import { useEffect, useState } from "react";

const ImageSide = ({ src, word }) => (
  <img src={src} alt={word} onLoad={() => URL.revokeObjectURL(src)} />
);

const DefinitionSide = ({ word, definition }) => <p alt={word}>{definition}</p>;

const ImageFront = ({ src = null, definition = null, word }) => {
  let hasImage = (src || definition) && true;
  
  return (
    <>
      {hasImage && (
        <div className="flipcard_front">
          {src ? <ImageSide src={src} word={word}/> : definition ? <DefinitionSide definition={definition} word={word}/> : null}
        </div>
      )}
      <div className={hasImage ? "flipcard_back" : "flipcard_front"}>
        {word}
      </div>
    </>
  );
};

const ImageBack = ({ src = null, definition = null, word }) => {
  let hasImage = (src || definition) && true;
  
  return (
    <>
      <div className={"flipcard_front"}>{word}</div>
      {hasImage && (
        <div className="flipcard_back">
          {src ? <ImageSide src={src} word={word}/> : definition ? <DefinitionSide definition={definition} word={word}/> : null}
        </div>
      )}
    </>
  );
};

export const FlipCard = ({ word, imageMode }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlipCard = () => {
    // const isFlippable = e.currentTarget.classList.contains("flippable");
    // if (isFlippable) e.currentTarget.classList.toggle("flipped");
    setIsFlipped(!isFlipped)
  };

  const handleReset = ()=> {
    setIsFlipped(false)
  }

  useEffect(()=>{
    handleReset()
  }, [imageMode])
  
  let innerCard;
  let hasImage = (word.file || word.definition) && true;

  if (imageMode === "ImageFront")
    innerCard = (
      <ImageFront
        src={word.file && URL.createObjectURL(word.file)}
        definition={word.definition && word.definition}
        word={word.word}
      />
    );
  else if (imageMode === "ImageBack")
    innerCard = (
      <ImageBack
        src={word.file && URL.createObjectURL(word.file)}
        definition={word.definition && word.definition}
        word={word.word}
      />
    );

  return (
    <div
      className={`flipcard ${hasImage ? "flippable" : ""} ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlipCard}
    >
      <div className="flipcard_inner">{innerCard}</div>
    </div>
  );
};
