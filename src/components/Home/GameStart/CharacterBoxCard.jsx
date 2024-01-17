import React from "react";
import "./CharacterBoxCard.css";
function CharacterBoxCard(props) {
  return (
    <div className="characterBoxCard">
      <img
        className="characterBoxCard-img"
        src={props.src}
        alt={"CharacterBoxCard "}
      />
      <div className="characterBoxCard-name">{props.charName}</div>
    </div>
  );
}

export default CharacterBoxCard;
