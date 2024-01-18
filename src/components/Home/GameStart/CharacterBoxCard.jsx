import React from "react";
import "./CharacterBoxCard.css";

function CharacterBoxCard(props) {
  const handleCharBoxCardClick = (e) => {
    console.log(checkPositions());
    props.charBox.current.style.display = "none";
  };
  const checkPositions = () => {
    if (
      props.char.top < props.userClickCoords.current.y &&
      props.char.bottom > props.userClickCoords.current.y &&
      props.char.left < props.userClickCoords.current.x &&
      props.char.right > props.userClickCoords.current.x
    )
      return true;
    return false;
  };

  return (
    <div className="characterBoxCard" onClick={handleCharBoxCardClick}>
      <img
        className="characterBoxCard-img"
        src={props.char.src}
        alt={"CharacterBoxCard "}
      />
      <div className="characterBoxCard-name">{props.char.char}</div>
    </div>
  );
}

export default CharacterBoxCard;
