import React from "react"

const SearchButton = ({ type, onButtonClick, src, alt, disabled }) => {
  return (
    <button type={type} className="search__button" onClick={onButtonClick} disabled={disabled}>
      <img src={src} alt={alt} className="search__button-icon"/>
    </button>
  )
};

export default SearchButton;
