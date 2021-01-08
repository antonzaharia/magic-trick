import React, { Component } from "react";
import { appear } from "../animations/pack";
import data from "../data/images";
import Card from "./Card";

export default class Pack extends Component {
  componentDidMount() {
    appear();
  }
  render() {
    return (
      <div className="pack">
        {data.frontFirst.map((img) => (
          <Card
            key={img}
            front={img}
            back={data.back}
            reveal={this.props.reveal}
            firstPhase={this.props.firstPhase}
          />
        ))}
      </div>
    );
  }
}
