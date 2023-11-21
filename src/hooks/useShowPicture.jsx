import { useState } from "react";

export const useShowPicture = (status) => {
  const [showPicture, setShowPicture] = useState(status);

  const handleShowPicture = () => {
    setShowPicture(
      showPicture === "Show Picture" ? "No Picture" : "Show Picture"
    );
  };

  const showPictureOptions = {
    currentState: showPicture,
    radioBoxes: [
      {
        name: "ShowPicture",
        label: "Don't Show",
        value: "No Picture",
        callback: handleShowPicture,
      },
      {
        name: "ShowPicture",
        label: "Show",
        value: "Show Picture",
        callback: handleShowPicture,
      },
    ],
  };

  return { showPicture, showPictureOptions };
};
