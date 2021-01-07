import React, { Component } from "react";
import { fadeOut, welcomeFade } from "../animations/welcome";
import Pack from "../components/Pack";
import Welcome from "../components/Welcome";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      explanation: false,
      pack: false,
    };
  }
  handleStart = () => {
    fadeOut();
    setTimeout(() => {
      this.setState({ pack: true });
    }, 2000);
  };

  componentDidMount() {
    welcomeFade();
  }
  render() {
    return (
      <div className="content">
        <Welcome start={this.handleStart} />
        {this.state.pack ? <Pack /> : ""}
      </div>
    );
  }
}
