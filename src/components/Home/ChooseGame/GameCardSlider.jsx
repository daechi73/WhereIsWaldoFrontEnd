import React from "react";
import { useState, useRef } from "react";
import "./GameCardSlider.css";
import Waldo1 from "../../../assets/imgs/waldo1.jpg";
import Waldo2 from "../../../assets/imgs/waldo2.jpeg";
import Waldo3 from "../../../assets/imgs/waldo3.jpeg";
import Waldo4 from "../../../assets/imgs/waldo4.jpeg";
import GameCard from "./GameCard";

function GameCardSlider(props) {
  const [currentCard, setCurrentCard] = useState(0);
  const waldo1 = useRef();
  const waldo2 = useRef();
  const waldo3 = useRef();
  const waldo4 = useRef();
  const gameCards = [
    {
      src: Waldo1,
      gameName: "The Beach",
      gameDifficulty: "Easy",
      numberOfFinds: "1",
      setGameStart: props.setGameStart,
      className: "theBeach",
    },
    {
      src: Waldo2,
      gameName: "The Bazzar",
      gameDifficulty: "medium",
      numberOfFinds: "4",
      setGameStart: props.setGameStart,
      className: "theBazzar",
    },
    {
      src: Waldo3,
      gameName: "The Feast",
      gameDifficulty: "Hard",
      numberOfFinds: "4",
      setGameStart: props.setGameStart,
      className: "theFeast",
    },
    {
      src: Waldo4,
      gameName: "The Siege",
      gameDifficulty: "Extremly Hard",
      numberOfFinds: "5",
      setGameStart: props.setGameStart,
      className: "theSiege",
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
