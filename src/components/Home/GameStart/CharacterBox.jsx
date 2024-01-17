import React from "react";
import "./CharacterBox.css";
import CharacterBoxCard from "./CharacterBoxCard";

function CharacterBox(props) {
  const renderCharacterBoxCard = props.chosenGame.characters.map((e, i) => {
    return <CharacterBoxCard key={i} src={e.src} charName={e.char} />;
  });
  return (
    <div className="characterBox" ref={props.charBox}>
      {renderCharacterBoxCard}
    </div>
  );
}

export default CharacterBox;
