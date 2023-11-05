import { useEffect, useReducer, useRef } from "react";

export function useModal() {
  const [isModalOpen, toggleModal] = useReducer(modalReducer, false);
  // const [isModalOpen, toggleModal] = useReducer(modalReducer, true);
  const modalRef = useRef(null);

  const handleCloseModal = () => toggleModal({ type: "closed" });
  const handleOpenModal = () => toggleModal({ type: "opened" });

  useEffect(() => {
    handleCloseModal();
    // handleOpenModal();
  }, []);

  useEffect(() => {
    const modal = modalRef.current;
    if (modal)
      if (isModalOpen) {
        modal.showModal();
      } else {
        modal.close();
      }
  }, [isModalOpen]);

  return { handleCloseModal, handleOpenModal, modalRef };
}

function modalReducer(isModalOpen, action) {
  switch (action.type) {
    case "opened": {
      return true;
    }
    case "closed": {
      return false;
    }
    default:
      break;
  }
}
