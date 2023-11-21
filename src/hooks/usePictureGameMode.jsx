import { useState } from "react";

export const usePictureGameMode = (status) => {
  const [pictureGameMode, setPictureGameMode] = useState(status);

  const handlePictureGameMode = () => {
    setPictureGameMode(pictureGameMode === "free" ? "quiz" : "free");
  };

  const pictureGameModeOptions = {
    currentState: pictureGameMode,
    radioBoxes: [
      {
        name: "PictureGameMode",
        label: "Quiz Mode",
        value: "quiz",
        callback: handlePictureGameMode,
      },
      {
        name: "PictureGameMode",
        label: "Free Mode",
        value: "free",
        callback: handlePictureGameMode,
      },
    ],
  };

  return { pictureGameMode, pictureGameModeOptions };
};
