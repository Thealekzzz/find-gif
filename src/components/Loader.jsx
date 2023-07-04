import React from "react";
import Spinner from "./Spinner";

const Loader = ({ className }) => {
  return (
    <div className="loading">
      <Spinner className={className} />
    </div>
  );
};

export default Loader;
