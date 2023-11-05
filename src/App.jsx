import { useState } from "react";
import "./App.css";
import github from "./assets/GitHub.png";
import MainMenu from "./components/MainMenu/MainMenu";
import SlideShow from "./components/SlideShow/SlideShow";
import WordGame from "./components/CardGame/WordGame";
import { useStage } from "./hooks/useStage";
import { useWords } from "./hooks/useWords";
import { useImageMode } from "./hooks/useImageMode";
import { PictureGame } from "./components/CardGame/PictureGame/PictureGame";
import { useCardGameMode } from "./hooks/useCardGameMode";

function App() {
  const { cardGameMode, cardGameModeOptions } = useCardGameMode("word");
  const [gameMode, setGameMode] = useState("order");
  const [isNoShuffleMode, setNoShuffleMode] = useState(false);
  const { stage, goToSlideShow, goToWordGame, goToMainMenu } =
    useStage("MainMenu");
  const {
    words,
    handleAddWord,
    handleChangeWord,
    handleDeleteWord,
    handleAddImage,
  } = useWords(initialWords);
  const { imageMode, imageModeOptions } = useImageMode("ImageFront");

  const handleNoShuffleToggle = () => {
    if (isNoShuffleMode) setNoShuffleMode(false);
    else setNoShuffleMode(true);
  };

  const handleGameModeToggle = () => {
    if (gameMode === "any") setGameMode("order");
    else setGameMode("any");
  };

  return (
    <div className="App">
      {stage === "MainMenu" ? (
        <MainMenu
          words={words}
          goToSlideShow={goToSlideShow}
          goToWordGame={goToWordGame}
          onWordChange={handleChangeWord}
          onAddButtonClick={handleAddWord}
          onDeleteButtonClick={handleDeleteWord}
          onImageAdd={handleAddImage}
          onGameModeToggle={handleGameModeToggle}
          onNoShuffleToggle={handleNoShuffleToggle}
          isToggled={{
            gameMode: gameMode === "order",
            isNoShuffleMode: !isNoShuffleMode,
          }}
          imageModeOptions={imageModeOptions}
          cardGameModeOptions={cardGameModeOptions}
        />
      ) : stage === "SlideShow" ? (
        <SlideShow
          words={words}
          goToMainMenu={goToMainMenu}
          goToWordGame={goToWordGame}
          imageMode={imageMode}
        />
      ) : stage === "Game" && cardGameMode === "picture" ? (
        <PictureGame
          words={words}
          gameMode={gameMode}
          goToMainMenu={goToMainMenu}
          goToSlideShow={goToSlideShow}
        />
      ) : (
        <WordGame
          words={words}
          gameMode={gameMode}
          goToMainMenu={goToMainMenu}
          goToSlideShow={goToSlideShow}
          isNoShuffleMode={isNoShuffleMode}
        />
      )}
      <footer>
        <a href="#">
          <img src={github} alt="GitHub Image" />
          Green Zombie
        </a>
      </footer>
    </div>
  );
}

// const initialWords = [
//   { word: "apple", file: undefined, id: 1, hasWord: false },
//   { word: "bird", file: undefined, id: 2, hasWord: false },
//   { word: "snake", file: undefined, id: 3, hasWord: false },
//   { word: "ice cream", file: undefined, id: 4, hasWord: false },
// ];

const initialWords = [
  { word: "apple", file: new File(["aaa"], "a"), id: 1, hasWord: false },
  { word: "bird", file: new File(["aaa"], "a"), id: 2, hasWord: false },
  { word: "snake", file: new File(["aaa"], "a"), id: 3, hasWord: false },
  { word: "ice cream", file: new File(["aaa"], "a"), id: 4, hasWord: false },
];
export default App;
