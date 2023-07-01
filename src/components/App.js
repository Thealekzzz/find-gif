import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';

function App() {
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
