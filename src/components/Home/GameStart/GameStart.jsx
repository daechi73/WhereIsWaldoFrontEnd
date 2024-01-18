import React from "react";
import GameImg from "./GameImg";
import { useRef } from "react";
import GameStartMethods from "../../GameSetupModules/GameStartMethods";

function GameStart(props) {
  const charBox = useRef();
  const userClickCoords = useRef(null);
  const gameStartMethods = GameStartMethods(charBox, userClickCoords);
  return (
    <div className="gameStart">
      <GameImg
        chosenGame={props.chosenGame}
        handleGameImgClick={gameStartMethods.handleGameImgClick}
        charBox={charBox}
        userClickCoords={userClickCoords}
      />
    </div>
  );
}

export default GameStart;
