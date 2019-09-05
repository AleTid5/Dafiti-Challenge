import React, { Component } from "react"
import {Col, Row} from "reactstrap";

export default class ItemImage extends Component {
  render = () => (
    <Row>
      <Col xs={{size: 12}}>
        <div className="image-container text-center">
          <img src={ this.props.src } alt="Product to sell"/>
        </div>
      </Col>
    </Row>
  );
}