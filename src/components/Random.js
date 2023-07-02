import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Button from './Button';

const Random = () => {
  const [randomGif, setRandomGif] = useState({});

  useEffect(() => {
    api
      .randomGif()
      .then((gif) => {
        setRandomGif(gif.data);
      })
      .catch(console.error);
  }, []);

  function handleClick() {
    api
      .randomGif()
      .then((gif) => {
        setRandomGif(gif.data);
      })
      .catch(console.error);
  }

  return randomGif.url
    ? (
      <section className="random">
        <img className="random__image" src={randomGif?.images?.downsized_large.url} alt={randomGif.title} />
        <Button onClick={handleClick}/>
      </section>
    ) : (
      <div className="loading">
        <span className='spinner spinner_black spinner_size_L'></span>;
      </div>
    )

};

export default Random;