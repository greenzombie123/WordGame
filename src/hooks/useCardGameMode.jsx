import { useState } from "react";

export const useCardGameMode = (status, handleChangeAllToPicture) => {
  const [cardGameMode, setCardGameMode] = useState(status);

  const handleChangeToPictureMode = () => {
    setCardGameMode("picture");
    handleChangeAllToPicture();
  };
  const handleChangeToWordMode = () => setCardGameMode("word");

  const cardGameModeOptions = {
    currentState: cardGameMode,
    radioBoxes: [
      {
        name: "CardGameMode",
        label: "Picture",
        value: "picture",
        callback: handleChangeToPictureMode,
      },
      {
        name: "CardGameMode",
        label: "Word",
        value: "word",
        callback: handleChangeToWordMode,
      },
    ],
  };

  return { cardGameMode, cardGameModeOptions };
};
