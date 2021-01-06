import React from "react";
import frontTest from "../images/JC.png";
import backTest from "../images/back.png";
import gsap from "gsap";

export default function Card({ front, back }) {
  const handleClick = () => {
    gsap.to(".flip-card-inner", { rotateY: 180, duration: 0.5 });
  };
  return (
    <div className="card-wrap" onClick={handleClick}>
      <div class="flip-card-inner">
        <div className="front">
          <img className="card-image" src={frontTest} />
        </div>
        <div className="back">
          <img className="card-image" src={backTest} />
        </div>
      </div>
    </div>
  );
}