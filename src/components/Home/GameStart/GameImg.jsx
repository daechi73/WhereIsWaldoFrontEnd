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
        onClick={props.getCoordinatesOnImgClick}
      />
      <CharacterBox charBox={props.charBox} chosenGame={props.chosenGame} />
    </div>
  );
}

export default GameImg;
