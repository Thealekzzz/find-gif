import React from "react"
import Button from "./Button";
import Card from "./Card"

const Main = (props) => {
  return (
    <main className="content">
      <section className="cards">
        <Card/>
        <Card/>
        <Card/>
      </section>
      <Button/>
    </main>
  )
};

export default Main;
