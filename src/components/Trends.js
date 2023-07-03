import React, { useState, useEffect } from "react";

import Main from "./Main";

import { api } from "../utils/api";

const Trends = ({ limit }) => {
  const textsList = [
    "Надо больше гифок!",
    "А можно еще чуть-чуть? 🥺",
    "Гифок много не бывает! 😈",
    "Следующие!",
  ];

  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState(textsList[0]);

  function handleNextButtonClick() {
    setOffset((prev) => prev + limit);
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

    // Изменение текста кнопки в зависимости от страницы
    const currentPage = offset / limit;
    setButtonText(textsList[Math.min(currentPage, textsList.length - 1)]);
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
      <span className="spinner spinner_black spinner_size_L"></span>;
    </div>
  );
};

export default Trends;
