import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import WordCard from "./WordCard";
import { useModal } from "../../hooks/useModal";
import { useGif } from "../../hooks/useGif";
import { GoodJobModal } from "./GoodJobModal";
import { useWordCards } from "../../hooks/useWordCards";
import { shuffle } from "lodash";

function WordGame({
  words,
  gameMode,
  goToSlideShow,
  goToMainMenu,
  isNoShuffleMode,
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [score, setScore] = useState(0);
  const {
    wordCards,
    handleChangeStatus,
    handleRandomizeWordCards,
    handleResetWordCards,
  } = useWordCards(words);
  const [currentWord, setCurrentWord] = useState(wordCards[0]);
  const { gif } = useGif();
  const { handleCloseModal, handleOpenModal, modalRef } = useModal();

  const resetWordGame = () => {
    setScore(0);
    handleResetWordCards();
    handleFirstCurrentWord();
    handleCloseModal();
  };

  const handleAnswerCheck = (id) =>
    id === currentWord.id && score !== wordCards.length;
  const handleIncrementScore = () => setScore(score + 1);
  const handleDecreaseScore = () => setScore(score - 1);
  const handleIsOrderMode = () => gameMode === "order";
  const handleIsAnyMode = () => gameMode === "any";
  const handleIsPictureMode = () => gameMode === "picture";
  const handleIsWinGame = () => score === wordCards.length;
  const handleWinGame = () => {
    setTimeout(() => {
      handleOpenModal();
    }, 500);
  };
  const handleWasClicked = (id) =>
    wordCards.some(
      (wordCard) => wordCard.id === id && wordCard.status === "correct"
    );
  const handleNewCurrentWord = (id) => {
    let unusedWordCards = wordCards.filter(
      (wordCard) => wordCard.status !== "correct" && wordCard.id !== id
    );

    if (unusedWordCards.length === 0) return;

    const newWordCard = shuffle(unusedWordCards)[0];
    setCurrentWord({
      word: newWordCard.word,
      id: newWordCard.id,
      file: newWordCard.file,
    });
  };

  const handleFirstCurrentWord = () => {
    const newWordCard = shuffle(wordCards)[0];
    setCurrentWord({
      word: newWordCard.word,
      id: newWordCard.id,
      file: newWordCard.file,
    });
  };

  const handleAnimationStop = () => {
    setIsAnimating(false);
  };

  const handleCardClick = (id) => {
    const isOrderMode = handleIsOrderMode();
    const isAnyMode = handleIsAnyMode();
    const isPictureMode = handleIsPictureMode();
    const wasClicked = handleWasClicked(id);
    const isWin = handleIsWinGame();

    if (isWin || isAnimating) return;
    if (isOrderMode) {
      if (wasClicked) return;
      else {
        const isCorrect = handleAnswerCheck(id);
        if (isCorrect) {
          handleIncrementScore();
          handleChangeStatus(id, "bouncing");
          handleNewCurrentWord(id);
        } else {
          handleChangeStatus(id, "incorrect");
        }
      }
    }
  };

  useEffect(() => {
    const isWin = handleIsWinGame();
    if (isWin) handleWinGame();
  }, [score]);

  // Randomize after an animation is played
  useEffect(() => {
    if (!isNoShuffleMode && score !== 0) {
      setTimeout(() => {
        if (score !== wordCards.length) handleRandomizeWordCards();
        handleAnimationStop();
      }, 500);
    }
  }, [score]);

  return (
    <>
      <div className="wordGame">
        <div className="wordGame_top">
          <div className="wordGame_container">
            {wordCards.map((wordCard, index) => (
              <WordCard
                numOfCards={words.length}
                word={wordCard.word}
                key={index}
                callback={handleCardClick}
                id={wordCard.id}
                status={wordCard.status}
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
}

export default WordGame;
