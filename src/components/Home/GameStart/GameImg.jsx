import React from "react";
import "./GameImg.css";

function GameImg(props) {
  const getCoordinatesOnImgClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRatio = x / e.target.offsetWidth;
    const yRatio = y / e.target.offsetHeight;
    console.log("waldo poistion ratio: x=" + `${xRatio};` + ` y=${yRatio}`);
  };
  return (
    <div className="gameImg">
      <img
        className="gameImg-img"
        src={props.chosenGame.src}
        alt="gameImg"
        onClick={getCoordinatesOnImgClick}
      />
    </div>
  );
}

export default GameImg;
