import React, { Component } from "react"
import Collapse from "../base/collapse";

export default class ItemDescription extends Component {
  render = () => (
    <Collapse title="Descripción"
              description={this.props.description} />
  );
}