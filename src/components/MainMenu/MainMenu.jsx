import { createElement, useEffect } from "react";
import { Modal } from "../util/Modal";
import { ToggleSwitch } from "../util/SlideToggle";
import { useModal } from "../../hooks/useModal";
import { TextInputGroup } from "./TextInputGroup";
import { ImageInputGroup } from "./ImageInputGroup";
import { Options } from "./Options";
import { CardGameModeOptions } from "./CardGameModeOptions";

function MainMenu({
  words,
  goToSlideShow,
  goToWordGame,
  onNoShuffleToggle,
  onGameModeToggle,
  isToggled,
  onWordChange,
  onAddButtonClick,
  onDeleteButtonClick,
  onImageAdd,
  imageModeOptions,
  cardGameModeOptions,
}) {
  const { handleCloseModal, handleOpenModal, modalRef } = useModal();

  const handleGoToSlideShow = () => {
    if (isWordsEmpty()) handleEmptyWords();
    else goToSlideShow();
  };

  const handleGoToGame = () => {
    if (isWordsEmpty()) handleEmptyWords();
    else goToWordGame();
  };

  const handleEmptyWords = () => {
    let inputs = document.querySelectorAll(".wordInput > input");
    inputs = Array.from(inputs, (input) => input);
    const emptyInputs = inputs.filter((input) => input.value === "");

    emptyInputs.forEach((emptyInput) => {
      emptyInput.placeholder = "Type A Word";
    });

    setTimeout(() => {
      emptyInputs.forEach((emptyInput) => {
        emptyInput.placeholder = "";
      });
    }, 3000);
  };

  const isWordsEmpty = () => {
    let inputs = document.querySelectorAll(".wordInput > input");
    inputs = Array.from(inputs, (input) => input);
    return inputs.some((input) => input.value === "");
  };

  return (
    <>
      <div className="MainMenu">
        <div className="MainMenu_top">
          <CardGameModeOptions options={cardGameModeOptions} />
          <div className="inputContainer">
            <TextInputGroup
              words={words}
              onAddButtonClick={onAddButtonClick}
              onDeleteButtonClick={onDeleteButtonClick}
              onChange={onWordChange}
            />
            <ImageInputGroup words={words} onImageAdd={onImageAdd} />
          </div>
        </div>

        <div className="buttonContainer">
          <button className="finishButton" onClick={handleGoToSlideShow}>
            SlideShow
          </button>
          <button className="finishButton" onClick={handleGoToGame}>
            Game
          </button>
          <button className="optionButton" onClick={handleOpenModal}>
            Options
          </button>
        </div>
      </div>

      <Options
        modalRef={modalRef}
        onGameModeToggle={onGameModeToggle}
        onNoShuffleToggle={onNoShuffleToggle}
        isToggled={isToggled}
        handleCloseModal={handleCloseModal}
        imageModeOptions={imageModeOptions}
      />
      {/* <Modal modalRef={modalRef} className="modal_OptionDisplay">
        <div className="optionContainer">
          <p className="optionText">Press cards by word order</p>
          <ToggleSwitch
            id={1}
            onToggleClick={onGameModeToggle}
            isToggled={isToggled.gameMode}
          />
          <p className="optionText">Shuffle cards when you press a card</p>
          <ToggleSwitch
            id={2}
            onToggleClick={onNoShuffleToggle}
            isToggled={isToggled.isNoShuffleMode}
          />
          <div className="buttonContainer">
            <button className="returnButton" onClick={handleCloseModal}>
              Return
            </button>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default MainMenu;
