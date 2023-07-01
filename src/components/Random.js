import React, { useState, useEffect } from "react";

import Button from './Button';

import { api } from "../utils/api";

const Random = () => {
  const [randomGif, setRandomGif] = useState({});

  // get random gif
  useEffect(() => {
    api
      .randomGif()
      .then((gif) => {
        setRandomGif(gif.data);
        console.log(gif.data)
      })
      .catch(console.error);
  }, []);


  return (
    <section className="random">
      <img className="random__image" src={randomGif?.images?.downsized_large.url} alt={randomGif.title} />
      <Button />
    </section>
  );
};

export default Random;