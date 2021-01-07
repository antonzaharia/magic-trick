import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <p className="welcome-text">Welcome to ASimpleMagicTrick</p>
        <button className="start-btn" onClick={this.props.start}>
          Start
        </button>
      </div>
    );
  }
}
