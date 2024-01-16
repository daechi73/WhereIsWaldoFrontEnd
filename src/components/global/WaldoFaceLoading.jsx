import React from "react";
import "./WaldoFaceLoading.css";
import WaldoFace from "../../assets/imgs/WaldoFace.png";

function WaldoFaceLoading() {
  return (
    <div className="container-waldoFaceLoading">
      <img className="waldoFaceLoading" src={WaldoFace} alt="waldo face" />
    </div>
  );
}

export default WaldoFaceLoading;
