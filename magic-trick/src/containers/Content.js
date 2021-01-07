import React, { Component } from "react";
import Card from "../components/Card";
import data from "../data/images";

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        {data.frontFirst.map((img) => (
          <Card front={img} back={data.back} />
        ))}
      </div>
    );
  }
}
