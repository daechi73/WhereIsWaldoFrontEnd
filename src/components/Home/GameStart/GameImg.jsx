import React from "react";
import "./GameImg.css";
import { useRef } from "react";
import CharacterBox from "./CharacterBox";

function GameImg(props) {
  return (
    <div className="gameImg">
      <img
        className="gameImg-img"
        src={props.chosenGame.src}
        alt="gameImg"
        onClick={props.handleGameImgClick}
      />
      <CharacterBox
        charBox={props.charBox}
        chosenGame={props.chosenGame}
        userClickCoords={props.userClickCoords}
      />
    </div>
  );
}

export default GameImg;
