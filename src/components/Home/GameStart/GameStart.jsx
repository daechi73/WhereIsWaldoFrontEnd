import React from "react";
import GameImg from "./GameImg";
import { useRef } from "react";

function GameStart(props) {
  const charBox = useRef();
  const makeCharBoxAppear = (e) => {
    charBox.current.style.display = "block";
    charBox.current.style.top = e.pageY + "px";
    charBox.current.style.left = e.pageX + "px";
    //charBox.current.style.cssText = `top:10%;position:absolute;display:block;`;
  };
  const getCoordinatesOnImgClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRatio = x / e.target.offsetWidth;
    const yRatio = y / e.target.offsetHeight;
    makeCharBoxAppear(e);
    console.log("waldo poistion ratio: x=" + `${xRatio};` + ` y=${yRatio}`);
  };
  return (
    <div className="gameStart">
      <GameImg
        chosenGame={props.chosenGame}
        getCoordinatesOnImgClick={getCoordinatesOnImgClick}
        charBox={charBox}
      />
    </div>
  );
}

export default GameStart;
