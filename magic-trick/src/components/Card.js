import React from "react";
import gsap from "gsap";

export default function Card({ front, back, reveal, firstPhase }) {
  const handleClick = () => {
    if (firstPhase) {
      gsap.to(".flip-card-inner", { rotateY: 180, duration: 0.5 });
      reveal();
    }
  };
  const makeClassName = () => {
    if (front.charAt(14) === "Q" && front.charAt(15) === "D") {
      return "flip-card-inner take-card";
    } else {
      console.log(front.charAt(14), front.charAt(15));
      return "flip-card-inner";
    }
  };
  return (
    <div className="card-wrap" onClick={handleClick}>
      <div className={makeClassName()}>
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
