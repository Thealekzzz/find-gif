import React from "react";
import Spinner from "./Spinner";

const Button = ({ onClick, isLoading, children }) => {
  return (
    <button
      className="button__more"
      type="button"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner className="spinner_black" />
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export default Button;
