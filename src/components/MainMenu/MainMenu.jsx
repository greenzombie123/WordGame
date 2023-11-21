import { createElement, useEffect } from "react";
import { Modal } from "../util/Modal";
import { ToggleSwitch } from "../util/SlideToggle";
import { useModal } from "../../hooks/useModal";
import { TextInputGroup } from "./TextInputGroup";
import { ImageInputGroup } from "./ImageInputGroup";
import { Options } from "./Options";
import { CardGameModeOptions } from "./CardGameModeOptions";
import { usePopUp } from "../../hooks/usePopUp";
import { PopUp } from "../util/PopUp";

function MainMenu({
  children,
  words,
  goToSlideShow,
  goToWordGame,
  onNoShuffleToggle,
  onGameModeToggle,
  isToggled,
  onWordChange,
  onAddButtonClick,
  onDeleteButtonClick,
  imageModeOptions,
  sideOptions,
  pictureGameModeOptions,
  errorCheckData,
}) {
  const { handleCloseModal, handleOpenModal, modalRef } = useModal();
  const { isOpen, popUpRef, handleOpenPopUp, message, handleMessage } =
    usePopUp();
  const { showPicture, cardGameMode } = errorCheckData;

  const handleGoToSlideShow = () => {
    if (handleErrorCheck()) handleError();
    else goToSlideShow();
  };

  const handleGoToGame = () => {
    if (handleErrorCheck()) handleError();
    else goToWordGame();
  };

  const handleErrorCheck = () =>
    isWordsEmpty() ||
    (isPictureGame() && hasNoImage()) ||
    (isShowPicture() && hasNoImage());

  const handleError = () => {
    if (isWordsEmpty()) handleEmptyWords();
    else if (isPictureGame() && hasNoPicture()) {
      handleOpenPopUp();
      handleMessage(
        "Must add a picture to all words if card game is in picture mode"
      );
    } else if (isShowPicture() && hasNoImage()) {
      handleOpenPopUp();
      handleMessage(
        "Must add a picture or a definition to all words if you want to display either one during the card game in word mode"
      );
    }
  };

  const handleEmptyWords = () => {
    handleOpenPopUp();
    handleMessage("Please write the words in the empty spaces");
  };

  const isWordsEmpty = () => words.some((word) => word.word === "");

  const hasNoPicture = () => words.some((word) => !word.file);

  const hasNoImage = () => words.some((word) => !word.file && !word.definition);

  const isShowPicture = () => showPicture === "Show Picture";

  const isPictureGame = () => cardGameMode === "picture";

  return (
    <>
      <div className="MainMenu">
        <div className="MainMenu_top">
          <CardGameModeOptions options={sideOptions} />
          <div className="inputContainer">
            <TextInputGroup
              words={words}
              onAddButtonClick={onAddButtonClick}
              onDeleteButtonClick={onDeleteButtonClick}
              onChange={onWordChange}
            />
            {children}
          </div>
        </div>

        <div className="buttonContainer">
          <button className="finishButton" onClick={handleGoToSlideShow}>
            SlideShow
          </button>
          <button
            className="finishButton"
            onClick={handleGoToGame}
            ref={popUpRef}
          >
            Game
          </button>
          <button className="optionButton" onClick={handleOpenModal}>
            Options
          </button>
        </div>
      </div>

      <PopUp isOpen={isOpen} message={message} popUpref={popUpRef} />

      <Options
        modalRef={modalRef}
        onGameModeToggle={onGameModeToggle}
        onNoShuffleToggle={onNoShuffleToggle}
        isToggled={isToggled}
        handleCloseModal={handleCloseModal}
        imageModeOptions={imageModeOptions}
        pictureGameModeOptions={pictureGameModeOptions}
      />
    </>
  );
}

export default MainMenu;
