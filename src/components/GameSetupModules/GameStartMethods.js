const GameStartMethods = (charBox, userClickCoords) => {
  const hideCharBox = (e) => {
    charBox.current.style.display = "none";
  };
  const showCharBox = (e) => {
    if (charBox.current.style.display === "none") {
      charBox.current.style.display = "block";
      charBox.current.style.top = e.pageY + "px";
      charBox.current.style.left = e.pageX + "px";
      //charBox.current.style.cssText = `top:10%;position:absolute;display:block;`;
    } else {
      hideCharBox();
    }
  };

  const setUserClickCoords = (xRatio, yRatio) => {
    userClickCoords.current = { x: xRatio, y: yRatio };
  };
  const getCoordinatesOnImgClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRatio = x / e.target.offsetWidth;
    const yRatio = y / e.target.offsetHeight;
    setUserClickCoords(xRatio, yRatio);
    //console.log("waldo poistion ratio: x=" + `${xRatio};` + ` y=${yRatio}`);
  };
  const handleGameImgClick = (e) => {
    getCoordinatesOnImgClick(e);
    showCharBox(e);
  };

  return { showCharBox, handleGameImgClick };
};

export default GameStartMethods;
