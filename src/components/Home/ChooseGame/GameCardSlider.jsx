import React from "react";
import "./GameCardSlider.css";
import Waldo1 from "../../../assets/imgs/waldo1.jpg";
import Waldo2 from "../../../assets/imgs/waldo2.jpeg";
import Waldo3 from "../../../assets/imgs/waldo3.jpeg";
import Waldo4 from "../../../assets/imgs/waldo4.jpeg";

import GameCard from "./GameCard";

function GameCardSlider() {
  return (
    <div className="gameCardSlider">
      <div className="prev">&#10094;</div>
      <GameCard
        src={Waldo1}
        gameName="The Beach"
        gameDifficulty="easy"
        numberOfFinds="1"
      />

      <div className="next">&#10095;</div>
    </div>
  );
}

export default GameCardSlider;
