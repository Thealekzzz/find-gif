import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import { api } from "../utils/api";

import Header from './Header';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';

function App() {
  const [gifs, setGifs] = useState([]);
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
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/random" element={<Random randomGif={randomGif} />} />
      </Routes>
    </div>
  );

}

export default App;
