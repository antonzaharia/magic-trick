import React, { Component } from "react";
import { welcomeFade } from "../animations/welcome";
import Card from "../components/Card";
import Welcome from "../components/Welcome";
import data from "../data/images";

export default class Content extends Component {
  componentDidMount() {
    welcomeFade();
  }
  render() {
    return (
      <div className="content">
        <Welcome />
        {/* {data.frontFirst.map((img) => (
          <Card front={img} back={data.back} />
        ))} */}
      </div>
    );
  }
}
