import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useWordCards = (words) => {
  const [wordCards, setWordCards] = useState(() => makeWordCards(words));

  const handleResetWordCards = () => {
    setWordCards(makeWordCards(words));
  };

  const handleClickCurrentWord = (id) => {
    setWordCards(
      wordCards.map((wordCard) => {
        if (wordCard.id === id) return { ...wordCard, wasUsed: true };
        else return wordCard;
      })
    );
  };

  const handleUnClick = (id) => {
    setWordCards(
      wordCards.map((wordCard) => {
        if (wordCard.id === id) return { ...wordCard, wasUsed: false };
        else return wordCard;
      })
    );
  };

  // const handleKeepCorrect = () => {
  //   setWordCards(
  //     wordCards.map((wordCard) => {
  //       if (wordCard.wasUsed)
  //         return { ...wordCard, status: "correct_permanent" };
  //       else return wordCard;
  //     })
  //   );
  // };

  const handleRandomizeCards = () => {
    setWordCards(shuffle(wordCards));
  };

  return {
    wordCards,
    handleResetWordCards,
    handleClickCurrentWord,
    handleUnClick,
    handleRandomizeCards,
  };
};

const makeWordCards = (words) => {
  return shuffle(
    words.map((word) => ({
      word: word.word,
      id: uuidv4(),
      // file: word.file,
      wasUsed: false,
      status: "",
      [word.file ? "file" : "definition"]: word.file
        ? word.file
        : word.definition,
    }))
  );
};
