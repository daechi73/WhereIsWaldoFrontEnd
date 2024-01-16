import React from "react";
import "./GameCard.css";

function GameCard(props) {
  const handleGameStart = () => {
    props.gameCard.setGameStart(true);
    props.setChosenGame(props.gameCard);
  };
  return (
    <div className={"gameCard"} id={props.gameCard.className}>
      <img
        className="gameCard-img"
        src={props.gameCard.src}
        alt={props.gameCard.gameName}
        onClick={handleGameStart}
      />
      <div className="gameCard-info">
        <div className="gameCard-gameName">{props.gameCard.gameName}</div>
        <div className="gameCard-gameDifficulty">
          Difficulty: {props.gameCard.gameDifficulty}
        </div>
        <div className="gameCard-numberOfFinds">
          Characters: {props.gameCard.numberOfFinds}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
