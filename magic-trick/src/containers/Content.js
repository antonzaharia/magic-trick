import React, { Component } from "react";
import { fadeOut, welcomeFade } from "../animations/welcome";
import Explanation from "../components/Explanation";
import Pack from "../components/Pack";
import Welcome from "../components/Welcome";
import { shuffle } from "../animations/pack";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      explanation: false,
      cardChose: false,
      thirdPhase: false,
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
  handleShuffle = () => {
    this.setState({ cardChose: false, thirdPhase: true });
    shuffle();
  };

  componentDidMount() {
    welcomeFade();
  }
  render() {
    return (
      <div className="content">
        <Welcome start={this.handleStart} />

        {this.state.explanation ? (
          <Explanation firstPhase={true} shuffle={this.handleShuffle} />
        ) : (
          ""
        )}
        {this.state.cardChose ? (
          <Explanation secondPhase={true} shuffle={this.handleShuffle} />
        ) : (
          ""
        )}
        {this.state.thirdPhase ? (
          <Explanation thirdPhase={true} shuffle={this.handleShuffle} />
        ) : (
          ""
        )}
        {this.state.pack ? (
          <Pack
            reveal={this.handleReveal}
            firstPhase={this.state.explanation ? true : false}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
