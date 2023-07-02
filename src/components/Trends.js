import React, { useState, useEffect } from 'react';

import Main from './Main';

import { api } from '../utils/api';

const Trends = ({ limit }) => {
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Хочу больше гифок!');
  const textsList = [
    'Хочу больше гифок!',
    'Надо больше гифок!',
    'А можно еще чуть-чуть? 🥺',
    'Следующие!',
    'Гифок много не бывает! 😈'
  ]

  function handleNextButtonClick() {
    setOffset(prev => prev + limit);
    setButtonText(textsList[Math.floor(Math.random() * textsList.length)])
  }

  // get trends
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
          }))]);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [offset]);


  return gifs.length
    ? (
      <Main gifs={gifs} onNextButtonClick={handleNextButtonClick} buttonText={buttonText} isLoading={isLoading} />
    ) : (
      <div className="loading">
        <span className='spinner spinner_black spinner_size_L'></span>;
      </div>
    )
};

export default Trends;