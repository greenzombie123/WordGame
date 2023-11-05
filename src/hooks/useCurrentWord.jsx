import { useState } from "react";
import { useScore } from "./useScore";

export function useCurrentWords(words) {
  const [currentWord, setCurrentWord] = useState(words);
  const {incrementScore} = useScore()
}


