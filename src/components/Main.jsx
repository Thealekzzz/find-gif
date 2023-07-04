import React from "react";
import "../pages/Main.css";
import Button from "./Button";
import Card from "./Card";
import InfotipText from "./InfotipText";
import Popup from "./Popup";

const Main = ({
  gifs,
  onNextButtonClick,
  buttonText,
  isLoading,
  isMoreGifs,
}) => {
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isPopupOpen, setPopupOpen] = React.useState(false);

  function handleClose() {
    setPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <main className="content">
        <section className="cards">
          {gifs.map((gif, index) => {
            return (
              <Card
                key={gif.id + index}
                gif={gif}
                onCardClick={(gif) => {
                  setSelectedCard(gif);
                  setPopupOpen(true);
                }}
              />
            );
          })}
        </section>
        {isMoreGifs ? (
          <Button onClick={onNextButtonClick} isLoading={isLoading}>
            {buttonText}
          </Button>
        ) : (
          <InfotipText>Это все гифки по такому запросу 🥲</InfotipText>
        )}
      </main>
      <Popup gif={selectedCard} isOpen={isPopupOpen} onClose={handleClose} />
    </>
  );
};

export default Main;
