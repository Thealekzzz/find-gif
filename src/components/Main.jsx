import React from "react";
import Button from "./Button";
import Card from "./Card";

const Main = ({ gifs, onNextButtonClick, buttonText, isLoading }) => {
  return (
    <main className="content">
      <section className="cards">
        {gifs.map((gif, index) => {
          return <Card key={gif.id + index} gif={gif} />
        })}
      </section>
      <Button onClick={onNextButtonClick} isLoading={isLoading}>{buttonText}</Button>
    </main>
  );
};

export default Main;
