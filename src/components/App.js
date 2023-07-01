import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

import { api } from "../data/api";

import Main from "./Main";
import Header from './Header';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';

function App() {
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

  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
}

export default App;
