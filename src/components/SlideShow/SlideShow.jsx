import Slides from "./Slides";
import { useSlideShow } from "../../hooks/useSlideShow";
import { useEffect } from "react";
import { SlideShowButtons } from "./SlideShowButtons";

function SlideShow({ words, goToWordGame, imageMode, mainMenuButton, onSwitchSides }) {
  const { goNextSlide, goPreviousSlide, toggleLeftSlideShowButton, goToFirstSlide } =
    useSlideShow(words);

  useEffect(toggleLeftSlideShowButton);

  return (
    <div className="slideShow">
      <div className="slideShow_top">
        <button
          className="slideShowButton_left"
          onClick={goPreviousSlide}
        ></button>
        <div className="slidesContainer">
          <Slides words={words} imageMode={imageMode} />
        </div>
        <button
          className="slideShowButton_right"
          onClick={() => goNextSlide(goToWordGame)}
        ></button>
      </div>
      <SlideShowButtons goToFirstSlide={goToFirstSlide} mainMenuButton={mainMenuButton} imageMode={imageMode} switchSides={onSwitchSides}/>
    </div>
  );
}

export default SlideShow;
