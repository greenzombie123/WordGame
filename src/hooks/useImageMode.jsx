import { useState } from "react";

export const useImageMode = (initialMode) => {
  const [imageMode, setImageMode] = useState(initialMode);

  const handleChangeToImageFront = () => setImageMode("ImageFront");
  const handleChangeToImageBack = () => setImageMode("ImageBack");

  const imageModeOptions = {
    currentState: imageMode,
    radioBoxes: [
      {
        name: "ImageMode",
        label: "Backside",
        value:"ImageBack",
        callback: handleChangeToImageBack
      },
      {
        name: "ImageMode",
        label: "Frontside",
        value:"ImageFront",
        callback: handleChangeToImageFront
      },
    ],
  };

  return { imageMode, imageModeOptions };
};
