export const ButtonContainer = ({
  goToGame,
  goToSlideShow,
  popUpRef,
  openModal,
}) => {
  return (
    <div className="buttonContainer">
      <button className="finishButton" onClick={handleGoToSlideShow}>
        SlideShow
      </button>
      <button className="finishButton" onClick={handleGoToGame} ref={popUpRef}>
        Game
      </button>
      <button className="optionButton" onClick={handleOpenModal}>
        Options
      </button>
    </div>
  );
};
