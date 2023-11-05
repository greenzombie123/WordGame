import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useWordCards = (words) => {
  const [wordCards, setWordCards] = useState(() => makeWordCards(words));

  const handleChangeStatus = (id, status) => {
    setWordCards(
      wordCards.map((wordCard) => {
        if (id === wordCard.id) return { ...wordCard, status: status };
        else return wordCard;
      })
    );
  };

  const handleRandomizeWordCards = () => {
    setWordCards(
      shuffle(
        wordCards.map((wordCard) => {
          if (wordCard.status === "incorrect")
            return { ...wordCard, status: "" };
          else if (wordCard.status === "bouncing")
            return { ...wordCard, status: "correct" };
          else return wordCard;
        })
      )
    );
  };

  const handleResetWordCards = () => {
    setWordCards(
      shuffle(
        wordCards.map((wordCard) => {
          return { ...wordCard, status: "" };
        })
      )
    );
  };

  // const handle

  return {
    wordCards,
    handleChangeStatus,
    handleRandomizeWordCards,
    handleResetWordCards,
  };
};

const makeWordCards = (words) => {
  return words.map((word) => ({
    word: word.word,
    id: uuidv4(),
    file: word.file,
    status: "",
  }));
};
