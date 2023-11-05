// import { useEffect, useState } from "react";
import { FlipCard } from "./FlipCard";
import { useImageSrcList } from "../../hooks/useImageSrcList";

function Slides({ words, imageMode }) {
  const {imageSrcList} = useImageSrcList(words)

  return (
    <div className="slides">
      {words.map((word, index) => (
        <div className="wordSlide" key={index}>
            <FlipCard word={word} src={imageSrcList[index]} imageMode={imageMode}/>
        </div>
      ))}
    </div>
  );
}

export default Slides;

