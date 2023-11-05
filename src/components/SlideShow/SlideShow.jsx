import Slides from "./Slides";
import { useSlideShow } from "../../hooks/useSlideShow";
import { useEffect } from "react";

function SlideShow({ words, goToMainMenu, goToWordGame, imageMode }) {
    const {goNextSlide, goPreviousSlide, toggleLeftSlideShowButton} = useSlideShow(words)

    useEffect(toggleLeftSlideShowButton)

  return (
    <div className="slideShow">
      <div className="slideShow_top">
        <button className="slideShowButton_left" onClick={goPreviousSlide}></button>
        <div className="slidesContainer">
            <Slides words={words} imageMode={imageMode}/>
        </div>
        {/* Pass goToWordGame to goNextSLide function as a callback*/}
        <button className="slideShowButton_right" onClick={()=>goNextSlide(goToWordGame)}></button>
      </div>
      <div className="slideShow_bottom">
        <button className="mainMenuButton" onClick={goToMainMenu}>Main Menu</button>
      </div>
    </div>
  );
}

export default SlideShow;
