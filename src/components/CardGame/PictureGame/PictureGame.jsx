import { useEffect, useState } from "react";
import ScoreBoard from "../ScoreBoard";
import { useModal } from "../../../hooks/useModal";
import { useGif } from "../../../hooks/useGif";
import { GoodJobModal } from "../GoodJobModal";
import { PictureCard } from "./PictureCard";
import { usePictureCardList } from "../../../hooks/usePictureCards";
import { shuffle } from "lodash";
import { TopWordDisplay } from "../TopWordDisplay";

export const PictureGame = ({
  words,
  goToSlideShow,
  goToMainMenu,
  gameMode,
}) => {
  const { pictureCardList, handleRandomizePictureCardList } =
    usePictureCardList(words);

  const [currentWord, setCurrentWord] = useState("");
  const [score, setScore] = useState(0);
  const [usedWords, setUsedWords] = useState([]);
  const { gif } = useGif();
  const { handleCloseModal, handleOpenModal, modalRef } = useModal();

  const handleWinRound = () => {
    if (words.length === score) {
      setTimeout(handleOpenModal, 500);
    }
  };

  const handleNewCurrentWord = () => {
    if (usedWords.length !== pictureCardList.length) {
      const newList = pictureCardList.filter(
        (pictureCard) =>
          !usedWords.some((usedWord) => usedWord.id === pictureCard.id)
      );

      const newCurrentWord = shuffle(newList)[0];

      setUsedWords([
        ...usedWords,
        { word: newCurrentWord.word, id: newCurrentWord.id },
      ]);

      setCurrentWord({ word: newCurrentWord.word, id: newCurrentWord.id });
    }
  };

  const resetWordGame = () => {
    setScore(0);
    handleCloseModal();
    handleRandomizePictureCardList();
    setCurrentWord("");
    setUsedWords([]);
  };

  const handleCheckAnswer = (word, id) => {
    return (
      word === currentWord.word &&
      id === currentWord.id &&
      score !== words.length
    );
  };

  const handleIncrementScore = () => setScore(score + 1);
  const handleDecreaseScore = () => setScore(score - 1);
  const handleIsQuiz = () => gameMode === "quiz";

  const handleWasFinished = (word, id) =>
    usedWords.some(
      (usedWord) =>
        usedWord.word === word && usedWord.id === id && id !== currentWord.id
    );

  useEffect(handleWinRound, [score]);
  useEffect(handleNewCurrentWord, [score]);

  return (
    <>
      <div className="wordGame">
        {gameMode === "quiz" && (
          <TopWordDisplay newCurrentWord={currentWord.word} />
        )}
        <div className="wordGame_top">
          <div className="wordGame_container">
            {pictureCardList.map((pictureCard) => (
              <PictureCard
                numOfCards={words.length}
                word={pictureCard.word}
                key={pictureCard.id}
                src={pictureCard.src}
                id={pictureCard.id}
                callbacks={{
                  handleCheckAnswer,
                  handleIncrementScore,
                  handleDecreaseScore,
                  handleIsQuiz,
                  handleWasFinished
                }}
              />
            ))}
          </div>
          <div className="scoreBoard_container">
            <ScoreBoard score={score} numOfWords={words.length} />
          </div>
        </div>
        <div className="wordGame_bottom">
          <button className="mainMenuButton" onClick={goToMainMenu}>
            Main Menu
          </button>
          <button className="slideShowButton" onClick={goToSlideShow}>
            Slide Show
          </button>
        </div>
      </div>

      <GoodJobModal
        gif={gif}
        resetWordGame={resetWordGame}
        modalRef={modalRef}
      />
    </>
  );
};
