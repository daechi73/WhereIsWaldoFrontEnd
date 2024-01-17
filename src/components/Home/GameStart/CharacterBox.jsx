import React from "react";
import "./CharacterBox.css";
import CharacterBoxCard from "./CharacterBoxCard";
import WaldoFace from "../../../assets/imgs/WaldoFace.jpg";

function CharacterBox(props) {
  const renderCharacterBoxCard = props.chosenGame.characters.map((e, i) => {
    if (e === "Waldo")
      return <CharacterBoxCard key={i} src={WaldoFace} charName={e} />;
  });
  return (
    <div className="characterBox" ref={props.charBox}>
      {renderCharacterBoxCard}
    </div>
  );
}

export default CharacterBox;
