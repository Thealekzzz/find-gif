import React from "react";
import gif from "../images/green-pear.gif";
import InfotipText from "./InfotipText";

const Infotip = ({ isValid }) => {
  return (
    <div className="infotip">
      {isValid ? (
        <InfotipText>По этому запросу нет гифок 🥲</InfotipText>
      ) : (
        <>
          <InfotipText>
            Нет запроса - нет гифок. <br />
            Давай это исправим?
          </InfotipText>
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
