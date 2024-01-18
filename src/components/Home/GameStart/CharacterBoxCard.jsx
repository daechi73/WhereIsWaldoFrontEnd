import React from "react";
import "./CharacterBoxCard.css";

function CharacterBoxCard(props) {
  const handleCharBoxCardClick = (e) => {
    console.log(props.userClickCoords);
    console.log(props.userClickRatio);
    // console.log(checkPositions());
    props.charBox.current.style.display = "none";
  };
  const checkPositions = () => {
    if (
      props.char.top < props.userClickRatio.current.y &&
      props.char.bottom > props.userClickRatio.current.y &&
      props.char.left < props.userClickRatio.current.x &&
      props.char.right > props.userClickRatio.current.x
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
