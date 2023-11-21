export const WordGameBottom = ({ goToMainMenu, goToSlideShow }) => {
  return (
    <div className="wordGame_bottom">
      <button className="mainMenuButton" onClick={goToMainMenu}>
        Main Menu
      </button>
      <button className="slideShowButton" onClick={goToSlideShow}>
        Slide Show
      </button>
    </div>
  );
};
