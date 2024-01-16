import React from "react";
import GameImg from "../Home/GameImg";
import ChooseGame from "../Home/ChooseGame/ChooseGame";
import { useRef } from "react";

function Home() {
  const gameImgRef = useRef();
  const getCoordinatesOnImgClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRatio = x / e.target.offsetWidth;
    const yRatio = y / e.target.offsetHeight;
    // console.log("waldo poistion ratio: x=" + `${xRatio};` + ` y=${yRatio}`);
  };

  return (
    <div className="home">
      {/* <GameImg getCoordinatesOnImgClick={getCoordinatesOnImgClick} /> */}
      <ChooseGame />
    </div>
  );
}

export default Home;
