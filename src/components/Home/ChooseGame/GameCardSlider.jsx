import React from "react";
import { useState } from "react";
import "./GameCardSlider.css";
import Waldo1 from "../../../assets/imgs/waldo1.jpg";
import Waldo2 from "../../../assets/imgs/waldo2.jpeg";
import Waldo3 from "../../../assets/imgs/waldo3.jpeg";
import Waldo4 from "../../../assets/imgs/waldo4.jpeg";
import GameCard from "./GameCard";

function GameCardSlider() {
  const [currentCard, setCurrentCard] = useState(0);
  const gameCards = [
    <GameCard
      src={Waldo1}
      gameName="The Beach"
      gameDifficulty="Easy"
      numberOfFinds="1"
    />,
    <GameCard
      src={Waldo2}
      gameName="The Bazaar"
      gameDifficulty="Medium"
      numberOfFinds="4"
    />,
    <GameCard
      src={Waldo3}
      gameName="The Feast"
      gameDifficulty="Hard"
      numberOfFinds="4"
    />,
    <GameCard
      src={Waldo4}
      gameName="Attack the Castle"
      gameDifficulty="Extremely Hard"
      numberOfFinds="5"
    />,
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
  const renderCurrentCard = gameCards[currentCard];

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
