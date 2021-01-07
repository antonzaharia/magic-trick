import React, { Component } from "react";
import data from "../data/images";
import Card from "./Card";

export default class Pack extends Component {
  render() {
    return (
      <div className="pack">
        {data.frontFirst.map((img) => (
          <Card key={img} front={img} back={data.back} />
        ))}
      </div>
    );
  }
}
