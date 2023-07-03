import React from "react"

const Button = ({ onClick, isLoading, children }) => {
  return (
    <button className="button button__more" type="button" onClick={onClick} disabled={isLoading}>
      {isLoading ? <span className="spinner spinner_black"></span> : <span>{children}</span>}      
    </button>
  )
};

export default Button;
