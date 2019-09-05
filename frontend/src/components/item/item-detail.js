import React, { Component } from "react"
import Collapse from "../base/collapse";

export default class ItemDetail extends Component {
  render = () => (
    <Collapse title="Detalle"
              description={this.props.description} />
  );
}