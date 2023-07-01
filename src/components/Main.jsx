import React from "react";
import Button from "./Button";
import Card from "./Card";

const Main = ({ gifs }) => {
  return (
    <main className="content">
      <section className="cards">
        {gifs.map((gif) => {
          return <Card key={gif.id} gif={gif} />
        })}
      </section>
      <Button />
    </main>
  );
};

export default Main;
