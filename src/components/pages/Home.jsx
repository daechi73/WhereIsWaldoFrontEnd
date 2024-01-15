import React from "react";
import GameImg from "../global/GameImg";
import { useRef } from "react";

function Home() {
  const gameImgRef = useRef();
  const getCoordinatesOnImgClick = (e) => {
    // console.log(e.clientX);
    // console.log(e.clientY);
    var rect = e.target.getBoundingClientRect();
    // console.log(rect.top, rect.left);
    console.log(e.target.offsetWidth);
    console.log(e.target.offsetHeight);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log("x=" + x);
    console.log("y=" + y);
    const xRatio = x / e.target.offsetWidth;
    const yRatio = y / e.target.offsetHeight;
    console.log("waldo poistion ratio: x=" + `${xRatio};` + ` y=${yRatio}`);
  };

  return (
    <div className="home">
      <GameImg getCoordinatesOnImgClick={getCoordinatesOnImgClick} />
    </div>
  );
}

export default Home;
