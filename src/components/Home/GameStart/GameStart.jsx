import React from "react";
import GameImg from "./GameImg";

function GameStart(props) {
  return (
    <div className="gameStart">
      <GameImg chosenGame={props.chosenGame} />
    </div>
  );
}

export default GameStart;
