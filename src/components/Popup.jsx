import React from "react";

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
      </div>
    </div>
  );
};

export default Popup;
