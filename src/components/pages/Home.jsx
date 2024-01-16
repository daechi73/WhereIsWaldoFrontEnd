import React from "react";
import ChooseGame from "../Home/ChooseGame/ChooseGame";
import GameStart from "../Home/GameStart/GameStart";
import { useRef, useState } from "react";
import "./Home.css";
import BackHomeSvg from "../global/BackHomeSvg";

function Home() {
  //const chosenGame = useRef();
  const [gameStart, setGameStart] = useState(false);
  const [chosenGame, setChosenGame] = useState({});

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
        <GameStart chosenGame={chosenGame} />
      ) : (
        <ChooseGame setGameStart={setGameStart} setChosenGame={setChosenGame} />
      )}
    </div>
  );
}

export default Home;
