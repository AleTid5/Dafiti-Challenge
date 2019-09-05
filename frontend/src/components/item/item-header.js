import React, { Component } from "react"
import {Col, Row} from "reactstrap";
import Heart from "../base/heart";
import ItemImage from "./item-image";

export default class ItemHeader extends Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <Col xs={{size: 12}} className="item-header">
      <ItemImage src={ this.props.imagesrc } />
      <Row>
        <Col xs={{size: 8}}>
          <h3>{ this.props.brand }</h3>
          <h4>{this.props.productname}</h4>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <h5>Vendido y entregado: <a href={this.props.url} target="_blank">{this.props.seller}</a></h5>
        </Col>
        <Col xs={{size: 4}}>
          <div className="icon pull-right">
            <Heart />
          </div>
        </Col>
      </Row>
    </Col>
  );
}