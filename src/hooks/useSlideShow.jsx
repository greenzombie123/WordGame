import { useRef } from "react";

export function useSlideShow(words, goToWordGame) {
  // Indicates the current position of the slides component
  const positionRef = useRef(0);

  // Increment positionRef and move to the next slide.
  function goNextSlide(goToWordGame) {
    if(positionRef.current === words.length - 1){
      goToWordGame()
    }
    else if (positionRef.current < words.length - 1) {
      const slides = document.querySelector(".slides");
      positionRef.current++;
      slides.style.transform = `translateX(-${positionRef.current * 1600}px)`;
      if (positionRef.current === 1) toggleLeftSlideShowButton();
      //     if length is max
      //         Find SlideButton
      //         Change CSS
      // if position is max
      //     Call changeToWordGame
    }
  }

  // Reduce positionRef and move to the next slide.
  function goPreviousSlide() {
    if (positionRef.current !== 0) {
      const slides = document.querySelector(".slides");
      positionRef.current--;
      slides.style.transform = `translateX(-${positionRef.current * 1600}px)`;
      if (positionRef.current === 0) toggleLeftSlideShowButton();
    }
  }

  // Hide or reveal left button depending on slides component position
  function toggleLeftSlideShowButton() {
    const leftButton = document.querySelector(".slideShowButton_left");
    if (positionRef.current === 0) leftButton.style.visibility = "hidden";
    else leftButton.style.visibility = "visible";
  }

  return { goNextSlide, goPreviousSlide, toggleLeftSlideShowButton };
}
