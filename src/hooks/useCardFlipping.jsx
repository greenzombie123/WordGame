import { useEffect, useState } from "react";

export const useCardFlipping = (status) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!isFlipped && status === "correct") {
      setIsFlipped(true);
    }
    if (!isFlipped && status === "wrong") {
      setIsFlipped(true);
    }
    if(isFlipped && status === "wrong"){
        setTimeout(()=>{
            setIsFlipped(false)
        },2000)
    }
  }, [status, isFlipped]);

  return {isFlipped};
};
