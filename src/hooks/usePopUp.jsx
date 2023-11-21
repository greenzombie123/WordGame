import { useEffect, useRef, useState } from "react";

export const usePopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const popUpRef = useRef();

  const handleOpenPopUp = () => setIsOpen(true);
  const handleClosePopUp = () => setIsOpen(false);
  const handleMessage = (text) => setMessage(text);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        handleClosePopUp();
      }, 6000);
    }
  }, [isOpen]);

  return {
    isOpen,
    popUpRef,
    handleOpenPopUp,
    message,
    handleMessage,
  };
};
