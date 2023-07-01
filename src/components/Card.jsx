import React from "react";

const Card = ({ gif }) => {
  return (
    <div className="card">
      <img 
        className="card__image" 
        alt={gif.alt} 
        src={gif.src} 
      />
    </div>
  );
};

export default Card;
