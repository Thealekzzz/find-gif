import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';

function App() {
  const limit = 9;

  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Search limit={limit} />} />
        <Route path="/trends" element={<Trends limit={limit} />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );

}

export default App;
