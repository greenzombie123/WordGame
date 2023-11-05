import { useEffect, useState } from "react";

export const TopWordDisplay = ({ newCurrentWord }) => {
  const [currentWord, setCurrentWord] = useState("");

  const isFadeIn = currentWord === newCurrentWord;

  useEffect(() => {
    setTimeout(()=>{
      setCurrentWord(newCurrentWord);
    }, 500)
  }, [newCurrentWord]);

  return (
    <div className="topWordDisplay">
      <div className={`topWordDisplay_word ${isFadeIn ? "fadein" : ""}`}>
        {currentWord}
      </div>
    </div>
  );
};
