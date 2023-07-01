import React, { useEffect, useState } from "react";
import Main from "./Main";
import { api } from "../data/api";

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

  return <Main gifs={gifs} />;
}

export default App;
