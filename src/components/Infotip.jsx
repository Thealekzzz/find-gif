import React from "react";
import gif from "../images/green-pear.gif";

const Infotip = ({ isValid }) => {
  return (
    <div className="infotip">
      {isValid ? (
        <p className="infotip__text">По этому запросу нет гифок 🥲</p>
      ) : (
        <>
          <p className="infotip__text">
            Нет запроса - нет гифок. <br />
            Давай это исправим?
          </p>
          <img
            className="infotip__image"
            src={gif}
            alt="Подмигивающая зеленая груша"
          />
        </>
      )}
    </div>
  );
};

export default Infotip;
