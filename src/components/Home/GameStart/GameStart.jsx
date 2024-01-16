import React from "react";
import GameImg from "./GameImg";

function GameStart(props) {
  const getCoordinatesOnImgClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRatio = x / e.target.offsetWidth;
    const yRatio = y / e.target.offsetHeight;
    console.log("waldo poistion ratio: x=" + `${xRatio};` + ` y=${yRatio}`);
  };
  return (
    <div className="gameStart">
      <GameImg
        getCoordinatesOnImgClick={getCoordinatesOnImgClick}
        chosenGame={props.chosenGame}
      />
    </div>
  );
}

export default GameStart;
