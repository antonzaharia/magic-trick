import React, { Component } from "react";
import gsap from "gsap";
import { shuffle } from "../animations/pack";

export default class Explanation extends Component {
  componentDidMount() {
    setTimeout(function () {
      gsap.to(".explanation", { opacity: 1, duration: 1 });
    }, 1000);
  }
  render() {
    return (
      <>
        {this.props.firstPhase ? (
          <div className="explanation">
            I chose 6 cards. Try to reveal them (click on any card)
          </div>
        ) : (
          ""
        )}
        {this.props.secondPhase ? (
          <div className="explanation">
            <div>THINK about ONE card from the following.</div>
            <div>Do Not click on it, just think about it.</div>
            <button className="done-btn" onClick={shuffle}>
              I'm done!
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
