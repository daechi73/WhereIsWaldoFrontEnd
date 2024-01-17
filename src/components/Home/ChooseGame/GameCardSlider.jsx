import React from "react";
import { useState, useRef } from "react";
import "./GameCardSlider.css";
import Waldo1 from "../../../assets/imgs/waldo1.jpg";
import Waldo2 from "../../../assets/imgs/waldo2.jpeg";
import Waldo3 from "../../../assets/imgs/waldo3.jpeg";
import Waldo4 from "../../../assets/imgs/waldo4.jpeg";
import GameCard from "./GameCard";
import WaldoFace from "../../../assets/imgs/WaldoFace.jpg";
import OdlawFace from "../../../assets/imgs/OdlawFace.png";
import WendaFace from "../../../assets/imgs/WendaFace.png";
import WizardFace from "../../../assets/imgs/WizardFace.png";
import WoofWhole from "../../../assets/imgs/WoofWhole.jpg";

function GameCardSlider(props) {
  const [currentCard, setCurrentCard] = useState(0);
  const gameCards = [
    {
      src: Waldo1,
      gameName: "The Beach",
      gameDifficulty: "Easy",
      numberOfFinds: "1",
      setGameStart: props.setGameStart,
      className: "theBeach",
      characters: [{ char: "Waldo", src: WaldoFace }],
    },
    {
      src: Waldo2,
      gameName: "The Bazzar",
      gameDifficulty: "medium",
      numberOfFinds: "5",
      setGameStart: props.setGameStart,
      className: "theBazzar",
      characters: [
        { char: "Waldo", src: WaldoFace },
        { char: "Odlaw", src: OdlawFace },
        { char: "Wenda", src: WendaFace },
      ],
    },
    {
      src: Waldo3,
      gameName: "The Feast",
      gameDifficulty: "Hard",
      numberOfFinds: "5",
      setGameStart: props.setGameStart,
      className: "theFeast",
      characters: [
        { char: "Waldo", src: WaldoFace },
        { char: "Wenda", src: WendaFace },
        { char: "Wizard", src: WizardFace },
        { char: "Odlaw", src: OdlawFace },
        { char: "Woof", src: WoofWhole },
      ],
    },
    {
      src: Waldo4,
      gameName: "The Siege",
      gameDifficulty: "Extremly Hard",
      numberOfFinds: "5",
      setGameStart: props.setGameStart,
      className: "theSiege",
      characters: [
        { char: "Waldo", src: WaldoFace },
        { char: "Wenda", src: WendaFace },
        { char: "Wizard", src: WizardFace },
        { char: "Odlaw", src: OdlawFace },
        { char: "Woof", src: WoofWhole },
      ],
    },
  ];
  const handleNextCard = () => {
    if (currentCard <= 2) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
  };
  const handlePrevCard = () => {
    if (currentCard >= 1) {
      setCurrentCard(currentCard - 1);
    } else {
      setCurrentCard(3);
    }
  };
  const renderCurrentCard = (
    <GameCard
      className={gameCards[currentCard].className}
      gameCard={gameCards[currentCard]}
      setChosenGame={props.setChosenGame}
    />
  );

  return (
    <div className="gameCardSlider">
      <div className="prev" onClick={handlePrevCard}>
        &#10094;
      </div>
      {renderCurrentCard}
      <div className="next" onClick={handleNextCard}>
        &#10095;
      </div>
    </div>
  );
}

export default GameCardSlider;
