import React from "react"

const Button = ({ onClick }) => {
  return (
    <button className="button button__more" type="button" onClick={onClick}>
      Загрузить еще
    </button>
  )
};

export default Button;
