export const FlipCard = ({word, src, imageMode}) => {

  const handleFlipCard = (e) => {
    const isFlippable = e.currentTarget.classList.contains("flippable");
    if (isFlippable) e.currentTarget.classList.toggle("flipped");
  };

  let innerCard;
  let hasImage = src && true;

  if (imageMode === "ImageFront")
    innerCard = (
      <>
        {hasImage && (
          <div className="flipcard_front">
            <img src={src} alt={word.word} />
          </div>
        )}
        <div className={hasImage ? "flipcard_back" : "flipcard_front"}>
          {word.word}
        </div>
      </>
    );
  else if (imageMode === "ImageBack")
    innerCard = (
      <>
        <div className="flipcard_front">{word.word}</div>
        {hasImage && (
          <div className="flipcard_back">
            <img src={src} alt={word.word} />
          </div>
        )}
      </>
    );

  return (
    <div
      className={`flipcard ${hasImage ? "flippable" : ""}`}
      onClick={handleFlipCard}
    >
      <div className="flipcard_inner">{innerCard}</div>
    </div>
  );
};

