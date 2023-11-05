import { useEffect, useState } from "react";
import { FlippableSection } from "./FlippableSection";

export const PictureCard = ({ numOfCards, word, src, id, callbacks }) => {
  const {
    handleCheckAnswer,
    handleIncrementScore,
    handleDecreaseScore,
    handleIsQuiz,
    handleWasFinished,
  } = callbacks;
  const [status, setStatus] = useState("");

  const handleCardClick = ({ currentTarget }) => {
    let {
      dataset: { word, id },
    } = currentTarget;

    const isQuiz = handleIsQuiz();
    const isCorrect = handleCheckAnswer(word, id);
    const wasFinished = handleWasFinished(word, id);

    if (isQuiz) {
      if (wasFinished) return;
      if (isCorrect) {
        handleIncrementScore();
        setStatus("correct");
      } else {
        setStatus("wrong");
      }
    } else {
      if (status === "selected") {
        handleDecreaseScore();
        setStatus("unselected");
      } else {
        handleIncrementScore();
        setStatus("selected");
      }
    }
  };

  useEffect(() => {
    let timeOutId;

    if (status === "wrong") {
      timeOutId = setTimeout(() => setStatus(""), 2000);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [status]);

  return (
    <div
      className={makeWordCard(numOfCards)}
      onClick={handleCardClick}
      data-word={word}
      data-id={id}
    >
      <div className="pictureCard_imageContainer">
        <FlippableSection src={src} word={word} status={status} />
      </div>
    </div>
  );
};

function makeWordCard(numOfCards) {
  if (numOfCards < 5) return "pictureCard_bigCard";
  else return "pictureCard_smallCard";
}
