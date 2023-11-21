import { useEffect, useState } from "react";

function WordCard({ numOfCards, word, id, callback}) {
  const [status, setStatus] = useState("");

  const handleCardClick = ({ currentTarget }) => {
    let {
      dataset: { id },
    } = currentTarget;

    callback(id, handleCorrect, handleIncorrect, handleResetStatus);
  };

  const handleCorrect = () => {setStatus("correct")}
  const handleIncorrect = () => setStatus("incorrect");
  const handleResetStatus = () => setStatus("");
  const handleKeepCorrect = ()=> setStatus("correct_permanent")

  useEffect(() => {
    let timeOutId;
    if (status === "correct") setTimeout(handleKeepCorrect, 500);
    if (status === "incorrect") timeOutId = setTimeout(handleResetStatus, 1200);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [status]);

  return (
    <div
      className={`${makeWordCard(numOfCards)} wordCard`}
      onClick={handleCardClick}
      data-id={id}
    >
      <p className={status}>{word}</p>
    </div>
  );
}

function makeWordCard(numOfCards) {
  if (numOfCards < 5) return "wordCard_bigCard";
  else return "wordCard_smallCard";
}

export default WordCard;
