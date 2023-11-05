import { shuffle } from "lodash";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const usePictureCardList = (words) => {
  const [pictureCardList, setPictureCardList] = useState(() =>
    createPictureCardList(words)
  );

  const handleRandomizePictureCardList = () => {
    const list = createPictureCardList(words);
    setPictureCardList([...list]);
  };

  return {
    pictureCardList,
    handleRandomizePictureCardList
  };
};

const createPictureCardList = (words) => {
  return shuffle(
    words.map((word) => {
      return {
        word: word.word,
        src: URL.createObjectURL(word.file),
        id: uuidv4(),
      };
    })
  );
};
