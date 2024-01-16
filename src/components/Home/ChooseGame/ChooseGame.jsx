import React from "react";
import GameCardSlider from "./GameCardSlider";
import "./ChooseGame.css";

function ChooseGame(props) {
  return (
    <div className="chooseGame">
      <GameCardSlider
        setGameStart={props.setGameStart}
        setChosenGame={props.setChosenGame}
      />
    </div>
  );
}

export default ChooseGame;
