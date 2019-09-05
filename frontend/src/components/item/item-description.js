import React, { Component } from "react"
import {Col, Row} from "reactstrap";
import Collapse from "../base/collapse";

export default class ItemDescription extends Component {
  render = () => (
    <Collapse title="Descripción"
              description={this.props.description} />
  );
}