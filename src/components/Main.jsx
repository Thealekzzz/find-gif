import React from "react";
import Button from "./Button";
import Card from "./Card";

const Main = ({ gifs, randomGif }) => {
  return (
    <main className="content">
      <section className="cards">
        {gifs.map((gif) => {
          return <Card key={gif.id} gif={gif} />
        })}
      </section>
      <Button />

      <section className="random">
        <img className="random__image" src={randomGif.images?.downsized_large.url} alt={randomGif.title} />
        <Button/>
      </section>
    </main>
  );
};

export default Main;
