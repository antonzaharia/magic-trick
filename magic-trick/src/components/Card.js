import React from "react";
import frontTest from "../images/JC.png";
import backTest from "../images/back.png";
import gsap from "gsap";

export default function Card({ front, back, reveal }) {
  const handleClick = () => {
    gsap.to(".flip-card-inner", { rotateY: 180, duration: 0.5 });
    reveal();
  };
  return (
    <div className="card-wrap" onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="front">
          <img className="card-image" src={front} />
        </div>
        <div className="back">
          <img className="card-image" src={back} />
        </div>
      </div>
    </div>
  );
}
