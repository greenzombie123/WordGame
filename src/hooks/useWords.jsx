import { useReducer, useState } from "react";
import { curry } from "lodash";

export const useWords = (initialWords) => {
  const [nextWordId, setNextWordId] = useState(initialWords.length + 1);
 
  const [words, wordsDispatch] = useReducer(wordsReducer, initialWords);

  const handleAddWord = () => {
    wordsDispatch({ type: "addedWord", id: nextWordId });
    setNextWordId(nextWordId + 1);
  };
  const handleChangeWord = curry((id, { target: { value } }) => {
    wordsDispatch({ type: "changedWord", word: value, id: id });
  });
  const handleDeleteWord = (id) => () =>
    wordsDispatch({ type: "deletedWord", id: id });

  const handleAddImage = curry((id, { target: { files } }) => wordsDispatch({ type: "addedImage", file: files[0], id: id }))
  
  return {
    words,
    handleAddWord,
    handleChangeWord,
    handleDeleteWord,
    handleAddImage,
  };
};

function wordsReducer(words, action) {
  switch (action.type) {
    case "addedWord": {
      return [
        ...words,
        {
          word: "",
          file: undefined,
          id: action.id,
          hasWord: false,
        },
      ];
    }

    case "changedWord": {
      return words.map((word) => {
        if (word.id === action.id) return { ...word, word: action.word };
        else return word;
      });
    }

    case "deletedWord": {
      return words.filter((word) => word.id !== action.id);
    }

    case "addedImage": {
      return words.map((word) => {
        if (word.id === action.id) return { ...word, file: action.file };
        else return word;
      });
    }

    default:
      break;
  }
}
