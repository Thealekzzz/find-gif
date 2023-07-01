import React, { useState, useEffect } from 'react';

import Main from './Main';

import { api } from '../utils/api';

const Trends = ({ limit }) => {
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleNextButtonClick() {
    setOffset(prev => prev + limit);
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
  }, [offset]);


  return <Main gifs={gifs} onNextButtonClick={handleNextButtonClick} isLoading={isLoading} />;
};

export default Trends;