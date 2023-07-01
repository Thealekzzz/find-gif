import React, { useState, useEffect } from 'react';

import Main from './Main';

import { api } from '../utils/api';

const Trends = () => {
  const [gifs, setGifs] = useState([]);

  // get trends
  useEffect(() => {
    api
      .trendingGifs()
      .then((gif) => {
        setGifs(gif.data.map((item) => ({
          id: item.id,
          alt: item.title,
          src: item.images.original.url,
        })));
      })
      .catch(console.error);
  }, []);


  return <Main gifs={gifs}/>;
};

export default Trends;