import React from "react";
import "./CharacterBox.css";
import CharacterBoxCard from "./CharacterBoxCard";

function CharacterBox(props) {
  const renderCharacterBoxCard = props.chosenGame.characters.map((e, i) => {
    return (
      <CharacterBoxCard
        key={i}
        char={e}
        userClickCoords={props.userClickCoords}
        charBox={props.charBox}
      />
    );
  });
  return (
    <div className="characterBox" ref={props.charBox}>
      {renderCharacterBoxCard}
    </div>
  );
}

export default CharacterBox;
