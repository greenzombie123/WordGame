import { useEffect, useState } from "react";
import { ImageDisplay } from "./ImageDisplay";
import { DefinitionDisplay } from "./DefinitionDisplay";
import { DisplayContainer } from "./DisplayContainer.";

export const TopPictureDisplay = ({
  newCurrentWord,
  goToMainMenu,
  goToSlideShow,
}) => {
  const [currentWord, setCurrentWord] = useState("");

  const props = Object.keys(newCurrentWord);
  const hasFile = props.some((prop) => "file" === prop);
  const hasDefinition = props.some((prop) => "definition" === prop);
  let display;
  let type;

  if (hasFile) {
    const src = URL.createObjectURL(newCurrentWord.file);
    display = <ImageDisplay newCurrentWord={newCurrentWord.word} src={src} />;
    type = "imageContainer";
  } else if (hasDefinition) {
    display = <DefinitionDisplay definition={newCurrentWord.definition} />;
    type = "definitionContainer";
  }

  // const src = URL.createObjectURL(newCurrentWord.file);
  const isFadeIn = currentWord === newCurrentWord;

  useEffect(() => {
    setTimeout(() => {
      setCurrentWord(newCurrentWord);
    }, 500);
  }, [newCurrentWord]);

  return (
    <div className="topPictureDisplay">
      <div className="topPictureDisplay_buttons">
        <button className="topPictureDisplay_button" onClick={goToMainMenu}>
          Menu
        </button>
        <button className="topPictureDisplay_button" onClick={goToSlideShow}>
          Slides
        </button>
      </div>
      <DisplayContainer isFadeIn={isFadeIn} type={type}>
        {display}
      </DisplayContainer>
      {/* <div
        className={`topPictureDisplay_imageContainer ${
          isFadeIn ? "fadein" : ""
        }`}
      >
        <img
          className="topPictureDisplay_image"
          src={src}
          alt={newCurrentWord.newCurrentWord}
          onLoad={() => URL.revokeObjectURL(src)}
        />
      </div> */}
    </div>
  );
};
