import React, { useState, useEffect } from "react";

import Main from "./Main";

import { api } from "../utils/api";

const Trends = ({ limit }) => {
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Хочу больше гифок!");
  const textsList = [
    "Надо больше гифок!",
    "А можно еще чуть-чуть? 🥺",
    "Гифок много не бывает! 😈",
    "Следующие!",
  ];
  const currentPage = offset / limit;

  function handleNextButtonClick() {
    setOffset((prev) => prev + limit);
    switch (currentPage) {
      case 0:
        setButtonText(textsList[0]);
        break;
      case 1:
        setButtonText(textsList[1]);
        break;
      case 2:
        setButtonText(textsList[2]);
        break;
      case 3:
        setButtonText(textsList[3]);
        break;
      case currentPage >= 4:
        setButtonText(textsList[4]);
        break;
    }
  }

  useEffect(() => {
    setIsLoading(true);
    api
      .trendingGifs(limit, offset)
      .then((newGifs) => {
        setGifs([
          ...gifs,
          ...newGifs.data.map((item) => ({
            id: item.id,
            alt: item.title,
            src: item.images.original.url,
          })),
        ]);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [offset]);

  return gifs.length ? (
    <Main
      gifs={gifs}
      onNextButtonClick={handleNextButtonClick}
      buttonText={buttonText}
      isLoading={isLoading}
    />
  ) : (
    <div className="loading">
      <span className="spinner spinner_size_L"></span>
    </div>
  );
};

export default Trends;
