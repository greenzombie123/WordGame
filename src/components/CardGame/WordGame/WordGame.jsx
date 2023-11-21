import { useEffect, useState } from "react";
import ScoreBoard from "../ScoreBoard";
import WordCard from "./WordCard";
import { useModal } from "../../../hooks/useModal";
import { useGif } from "../../../hooks/useGif";
import { GoodJobModal } from "../GoodJobModal";
import { useWordCards } from "../../../hooks/useWordCards";
import { shuffle } from "lodash";
import { TopPictureDisplay } from "./TopPictureDisplay";
import { WordGameBottom } from "./WordGameBottom";

function WordGame({
  words,
  gameMode,
  goToSlideShow,
  goToMainMenu,
  isNoShuffleMode,
  showPicture,
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [score, setScore] = useState(0);
  const {
    wordCards,
    handleClickCurrentWord,
    handleResetWordCards,
    handleRandomizeCards,
    handleUnClick,
  } = useWordCards(words);
  const [currentWord, setCurrentWord] = useState(wordCards[0]);
  const { gif } = useGif();
  const { handleCloseModal, handleOpenModal, modalRef } = useModal();

  const resetWordGame = () => {
    setScore(0);
    handleAnimationStop();
    handleResetWordCards();
    handleCloseModal();
  };

  const handleAnswerCheck = (id) =>
    id === currentWord.id && score !== wordCards.length;
  const handleIncrementScore = () => setScore(score + 1);
  const handleDecreaseScore = () => setScore(score - 1);
  const handleIsOrderMode = () => gameMode === "order";
  const handleIsAnyMode = () => gameMode === "any";
  const handleIsWinGame = () => score === wordCards.length;
  const handleWinGame = () => {
    setTimeout(() => {
      handleOpenModal();
    }, 500);
  };

  const handleWasClicked = (id) =>
    wordCards.some(
      (wordCard) => wordCard.id === id && wordCard.wasUsed === true
    );

  const handleNewCurrentWord = () => {
    let unusedWordCards = wordCards.filter(
      (wordCard) => wordCard.wasUsed !== true
    );

    if (unusedWordCards.length === 0) return;

    const newWordCard = shuffle(unusedWordCards)[0];
    setCurrentWord(newWordCard);
  };

  const handleFirstCurrentWord = () => {
    const newWordCard = shuffle(wordCards)[0];
    setCurrentWord(newWordCard);
  };

  const handleAnimationStop = () => {
    setIsAnimating(false);
  };

  const handleStartAnimation = () => {
    setIsAnimating(true);
  };

  const handleCardClick = (id, handleCorrect, handleIncorrect, handleReset) => {
    const isOrderMode = handleIsOrderMode();
    const isAnyMode = handleIsAnyMode();
    const wasClicked = handleWasClicked(id);
    const isWin = handleIsWinGame();
    if (isWin || isAnimating) return;

    if (isAnyMode && !showPicture) {
      if (wasClicked) {
        handleDecreaseScore();
        handleUnClick(id);
        handleReset();
      } else {
        handleIncrementScore();
        handleClickCurrentWord(id);
        handleCorrect();
        handleStartAnimation();
      }
    } else if (isOrderMode) {
      if (wasClicked) return;
      else {
        const isCorrect = handleAnswerCheck(id);
        if (isCorrect) {
          handleIncrementScore();
          handleClickCurrentWord(id);
          handleStartAnimation();
          handleCorrect();
        } else {
          handleIncorrect();
        }
      }
    }
  };

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        handleAnimationStop();
        handleNewCurrentWord();
        if (!isNoShuffleMode) handleRandomizeCards();
      }, 500);
    }
  }, [isAnimating]);

  useEffect(() => {
    const isWin = handleIsWinGame();
    if (isWin) handleWinGame();
    if (score === 0) handleFirstCurrentWord();
  }, [score]);

  return (
    <>
      <div className="wordGame">
        {showPicture === "Show Picture" && (
          <TopPictureDisplay
            newCurrentWord={currentWord}
            goToMainMenu={goToMainMenu}
            goToSlideShow={goToSlideShow}
          />
        )}
        <div className="wordGame_top">
          <div className="wordGame_container">
            {wordCards.map((wordCard) => (
              <WordCard
                numOfCards={words.length}
                word={wordCard.word}
                key={wordCard.id}
                callback={handleCardClick}
                id={wordCard.id}
                isCorrect={wordCard.wasUsed}
              />
            ))}
          </div>
          <div className="scoreBoard_container">
            <ScoreBoard score={score} numOfWords={words.length} />
          </div>
        </div>
        {showPicture === "No Picture" && (
          <WordGameBottom
            goToMainMenu={goToMainMenu}
            goToSlideShow={goToSlideShow}
          />
        )}
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
