function WordCard({ numOfCards, word, id, callback, status }) {
  const handleCardClick = ({ currentTarget }) => {
    let {
      dataset: { id },
    } = currentTarget;

    callback(id);
  };

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
