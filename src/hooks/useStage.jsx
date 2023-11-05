import { useState } from "react"

export const useStage = (initialStage)=> {
  const [stage, setStage] = useState(initialStage)
  
  function goToSlideShow(){
    setStage("SlideShow")
  }

  function goToWordGame(){
    setStage("Game")
  }

  function goToMainMenu(){
    setStage("MainMenu")
  }

  return {stage, goToSlideShow, goToWordGame, goToMainMenu}
}