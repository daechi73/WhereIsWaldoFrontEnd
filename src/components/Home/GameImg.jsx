import React from "react";
import "./GameImg.css";

function GameImg(props) {
  return (
    <div className="gameImg">
      <img
        className="gameImg-img"
        src={props.chosenGame.src}
        alt="gameImg"
        onClick={props.getCoordinatesOnImgClick}
      />
    </div>
  );
}

export default GameImg;
