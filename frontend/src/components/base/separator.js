import React, { Component } from "react"
import {Col, Row} from "reactstrap";

export default class Separator extends Component {
  render = () => (
    <Col xs={{size: 12}}>
      <Row>
        <Col xs={{size: 12}}>
          <hr/>
        </Col>
      </Row>
    </Col>
  );
}