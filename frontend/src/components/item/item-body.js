import React, { Component } from "react"
import {Col, Row, Progress} from "reactstrap";
import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import whatsapp from '../../assets/img/whatsapp.png';

export default class ItemBody extends Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <Col xs={{size: 12}} className="item-body">
      <Row>
        <Col xs={{size: 12}}>
          <h3>Talle</h3>
        </Col>
        { this.props.item.sizes.map((size, k) =>
          <div className="col-1-5 clickable" key={k}>
            <div className="circle" title={`Aún quedan: ${size.quantity * -1}`}>{ size.size }</div>
          </div>)}
        <Col xs={{size: 12}} className="mt-3">
          <Progress color="default" value="95" />
        </Col>
        <Col xs={{size: 12}} className="mt-3 text-center">
          <img src={facebook} alt="facebook" width="30" />
          <img src={twitter} alt="twitter" width="50" />
          <img src={whatsapp} alt="whatsapp" width="35" />
        </Col>
      </Row>
    </Col>
  );
}