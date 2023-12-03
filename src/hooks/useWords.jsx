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

  const handleAddImage = curry((id, { target: { files } }) =>
    wordsDispatch({ type: "addedImage", file: files[0], id: id })
  );

  const handleSwapFileDefinition = (id) => () =>
    wordsDispatch({ type: "swapFileDefinition", id });

  const handleChangeDefinition = curry((id, { target: { value } }) =>
    wordsDispatch({ type: "changedDefinition", id, definition: value })
  );

  const handleChangeAllToPicture = () =>
    wordsDispatch({ type: "changedAllToPicture" });

  const handleLoadWords = (words)=> wordsDispatch({type:"loadedWords", words:words})

  return {
    words,
    handleAddWord,
    handleChangeWord,
    handleDeleteWord,
    handleAddImage,
    handleSwapFileDefinition,
    handleChangeDefinition,
    handleChangeAllToPicture,
    handleLoadWords
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

    case "swapFileDefinition": {
      return words.map((word) => {
        const props = Object.keys(word);
        const hasFile = props.some((prop) => "file" === prop);
        const hasDefinition = props.some((prop) => "definition" === prop);

        if (word.id === action.id) {
          if (hasFile)
            return {
              word: word.word,
              id: word.id,
              hasWord: word.hasWord,
              definition: "",
            };
          else if (hasDefinition)
            return {
              word: word.word,
              id: word.id,
              hasWord: word.hasWord,
              file: null,
            };
        } else return word;
      });
    }

    case "changedDefinition": {
      return words.map((word) => {
        if (word.id === action.id)
          return { ...word, definition: action.definition };
        else return word;
      });
    }

    case "changedAllToPicture": {
      return words.map((word) => {
        return {
          word: word.word,
          id: word.id,
          hasWord: word.hasWord,
          file: null,
        };
      });
    }

    case "loadedWords":{
      return [...action.words]
    }

    default:
      break;
  }
}
