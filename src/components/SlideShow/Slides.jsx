import { FlipCard } from "./FlipCard";

function Slides({ words, imageMode }) {

  return (
    <div className="slides">
      {words.map((word, index) => (
        <div className="wordSlide" key={index}>
            {/* <FlipCard word={word} src={imageSrcList[index]} imageMode={imageMode}/> */}
            <FlipCard word={word} imageMode={imageMode}/>
        </div>
      ))}
    </div>
  );
}

export default Slides;

