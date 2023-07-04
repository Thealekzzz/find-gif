import React from "react";
import "../pages/Popup.css";
import closeIcon from "../images/closePopup.svg";

const Popup = ({ gif, isOpen, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (evt) => {
      evt.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (evt) => {
    evt.target === evt.currentTarget && onClose();
  };

  return (
    <div className={`popup ${isOpen && "popup_opened"}`} onMouseDown={handleOverlay}>
      <div className="popup__container">
        <img
          src={gif.src}
          alt={gif.alt}
          className="popup__image"
        />

        <img src={closeIcon} className="popup__close-button" alt="Закрыть всплывающее окно, кнопка" onClick={onClose} />
      </div>
    </div>
  );
};

export default Popup;
