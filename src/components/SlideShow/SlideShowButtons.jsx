export const SlideShowButtons = ({
  goToFirstSlide,
  switchSides,
  imageMode,
  mainMenuButton,
}) => {
  return (
    <div className="slideShow_bottom">
      {mainMenuButton}
      <button className="slideShow_firstSlideButton" onClick={goToFirstSlide}>
        Return to First Slide
      </button>
      <button className="slideShow_switchSideButton" onClick={switchSides}>
        {imageMode === "ImageFront"
          ? "Put Words Behind Slides"
          : "Put Words In Front of Slides"}
      </button>
    </div>
  );
};
