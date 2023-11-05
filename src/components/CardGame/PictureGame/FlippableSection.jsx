import { useRef, useState } from "react";
import { useEffect } from "react";

export const FlippableSection = ({ src, word, status }) => {

//   const [flipCardStatus, setFlipCardStatus] = useState("");

  return (
    <div className={`flipcard ${status}`}>
      <div className="flipcard_inner">
        <div className="flipcard_front">
          <img
            className="pictureCard_image"
            src={src}
            alt={word}
            onLoad={() => URL.revokeObjectURL(src)}
          />
        </div>
        <div className={`flipcard_back`}></div>
      </div>
    </div>
  );
};
