import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import "../pages/Random.css";
import Button from "./Button";
import Loader from "./Loader";

const Random = () => {
  const textsList = [
    "Давай еще гифку!",
    "И еще одну!",
    "А можно еще? 🥺",
    "Следующая!",
  ];

  const [randomGif, setRandomGif] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [gifNumber, setGifNumber] = useState(0);
  const [buttonText, setButtonText] = useState(textsList[gifNumber]);

  useEffect(() => {
    api
      .randomGif()
      .then((gif) => {
        setRandomGif(gif.data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setButtonText(textsList[Math.min(gifNumber, textsList.length - 1)]);
  }, [gifNumber]);

  function handleClick() {
    setIsLoading(true);
    setRandomGif({});
    api
      .randomGif()
      .then((gif) => {
        setRandomGif(gif.data);
        setGifNumber((prev) => ++prev);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }

  return randomGif.url ? (
    <section className="random">
      <img
        className="random__image"
        src={randomGif?.images?.downsized_large.url}
        alt={randomGif.title}
      />
      <Button onClick={handleClick} isLoading={isLoading}>
        {buttonText}
      </Button>
    </section>
  ) : (
    <Loader className="spinner_size_L" />
  );
};

export default Random;
