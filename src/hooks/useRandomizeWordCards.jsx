import { useEffect, useState } from "react";
import { shuffle } from "lodash";

function useRandomizeWordCards(words, score, clickedWords, isNoShuffleMode) {
  const [shuffledWordList, setShuffledWordList] = useState(undefined)

  function setWordCards(words, clickedWords, isNoShuffleMode) {
    const wordCards = document.querySelectorAll(".wordCard");
    // Check if all words have been clicked
    if (words.length === clickedWords.length) {
      wordCards.forEach((wordCard) => {
        wordCard.firstChild.classList.add("clicked");
      });
    } else {

      let shuffledWords;

      if (isNoShuffleMode && clickedWords.length === 0) {
        shuffledWords = shuffle(words);
        setShuffledWordList([...shuffledWords])
      } else if (isNoShuffleMode) {
        shuffledWords = [...shuffledWordList];
      } else shuffledWords = shuffle(words);
  
      const newClickedArray = [...clickedWords];
  
      wordCards.forEach((wordCard) => {
        const chosenWord = shuffledWords.pop();
        wordCard.firstChild.textContent = chosenWord.word;
  
        // Change card color if the word was previously clicked
        if (newClickedArray.includes(chosenWord.word)) {
          wordCard.firstChild.classList.add("clicked");
          newClickedArray.splice(newClickedArray.indexOf(chosenWord.word), 1);
        } else {
          wordCard.firstChild.classList.remove("clicked");
        }
      });
    }
  }

  useEffect(() => {
    setWordCards(words, clickedWords, isNoShuffleMode);
  }, [score]);
}

export { useRandomizeWordCards };
