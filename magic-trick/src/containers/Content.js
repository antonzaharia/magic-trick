import React, { Component } from "react";
import { fadeOut, welcomeFade } from "../animations/welcome";
import Explanation from "../components/Explanation";
import Pack from "../components/Pack";
import Welcome from "../components/Welcome";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      explanation: false,
      cardChose: false,
      pack: false,
    };
  }
  handleStart = () => {
    fadeOut();
    setTimeout(() => {
      this.setState({ pack: true, explanation: true });
    }, 2000);
  };
  handleReveal = () => {
    this.setState({ explanation: false, cardChose: true });
  };

  componentDidMount() {
    welcomeFade();
  }
  render() {
    return (
      <div className="content">
        <Welcome start={this.handleStart} />
        {this.state.explanation ? <Explanation firstPhase={true} /> : ""}
        {this.state.cardChose ? <Explanation secondPhase={true} /> : ""}
        {this.state.pack ? <Pack reveal={this.handleReveal} /> : ""}
      </div>
    );
  }
}
