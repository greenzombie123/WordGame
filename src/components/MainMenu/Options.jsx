import { Modal } from "../util/Modal";
import { ToggleSwitch } from "../util/SlideToggle";
import { RadioBoxGroup } from "./RadioBoxGroup";

export const Options = ({
  modalRef,
  onGameModeToggle,
  isToggled,
  onNoShuffleToggle,
  handleCloseModal,
  imageModeOptions
}) => {
  return (
    <Modal modalRef={modalRef} className="modal_OptionDisplay">
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
        <p className="optionText">Place image on the front or backside of a slide</p>
        <RadioBoxGroup
          options={imageModeOptions}
        />
        <div className="buttonContainer">
          <button className="returnButton" onClick={handleCloseModal}>
            Return
          </button>
        </div>
      </div>
    </Modal>
  );
};
