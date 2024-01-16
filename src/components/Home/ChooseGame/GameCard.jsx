import React from "react";
import "./GameCard.css";

function GameCard(props) {
  return (
    <div className="gameCard">
      <img className="gameCard-img" src={props.src} alt={props.gameName} />
      <div className="gameCard-info">
        <div className="gameCard-gameName">{props.gameName}</div>
        <div className="gameCard-gameDifficulty">
          Difficulty: {props.gameDifficulty}
        </div>
        <div className="gameCard-numberOfFinds">
          Characters: {props.numberOfFinds}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
