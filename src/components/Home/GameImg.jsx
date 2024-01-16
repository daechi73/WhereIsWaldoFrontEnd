import React from "react";
import "./GameImg.css";
import WaldoImg1 from "../../assets/imgs/waldo1.jpg";

function GameImg(props) {
  return (
    <div className="gameImg" ref={props.gameImgRef}>
      <img
        className="gameImg-img"
        src={WaldoImg1}
        alt="gameImg"
        onClick={props.getCoordinatesOnImgClick}
      />
    </div>
  );
}

export default GameImg;
