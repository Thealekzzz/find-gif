import React from "react";
import Button from "./Button";
import Card from "./Card";

const Main = ({ gifs, onNextButtonClick, isLoading }) => {
  return (
    <main className="content">
      <section className="cards">
        {gifs.map((gif) => {
          return <Card key={gif.id} gif={gif} />
        })}
      </section>
      <Button onClick={onNextButtonClick} isLoading={isLoading}/>
    </main>
  );
};

export default Main;
