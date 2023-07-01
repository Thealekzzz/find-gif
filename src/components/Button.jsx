import React from "react"

const Button = ({ onClick, isLoading }) => {
  return (
    <button className="button button__more" type="button" onClick={onClick} disabled={isLoading}>
      {isLoading ? <span className="spinner"></span> : <span>Загрузить еще</span>}      
    </button>
  )
};

export default Button;
