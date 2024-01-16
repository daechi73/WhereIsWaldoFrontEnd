import React from "react";
import GameImg from "../Home/GameImg";
import ChooseGame from "../Home/ChooseGame/ChooseGame";
import { useRef, useState } from "react";
import "./Home.css";
import BackHomeSvg from "../global/BackHomeSvg";

function Home() {
  //const chosenGame = useRef();
  const [gameStart, setGameStart] = useState(false);
  const [backHome, setBackHome] = useState(false);
  const [chosenGame, setChosenGame] = useState({});
  const getCoordinatesOnImgClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRatio = x / e.target.offsetWidth;
    const yRatio = y / e.target.offsetHeight;
    console.log("waldo poistion ratio: x=" + `${xRatio};` + ` y=${yRatio}`);
  };
  const handleBackHomeBtn = () => {
    setGameStart(false);
  };
  return (
    <div className="home">
      <div className="header">
        {gameStart ? <BackHomeSvg onClick={handleBackHomeBtn} /> : ""}
        <div className="title">Where's Waldo??</div>
      </div>
      {gameStart ? (
        <GameImg
          getCoordinatesOnImgClick={getCoordinatesOnImgClick}
          chosenGame={chosenGame}
        />
      ) : (
        <ChooseGame setGameStart={setGameStart} setChosenGame={setChosenGame} />
      )}
    </div>
  );
}

export default Home;
