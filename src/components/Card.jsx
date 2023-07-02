import React from "react";

const Card = ({ gif, onCardClick }) => {
  function handleClick() {
    onCardClick(gif)
  }
  return (
    <div className="card">
      <img 
        className="card__image" 
        alt={gif.alt} 
        src={gif.src} 
        onClick={handleClick}
      />
    </div>
  );
};

export default Card;
