import React, { Component } from "react"
import { IconContext } from "react-icons";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import {Col, Row, Collapse as Collapsable} from "reactstrap";
import Separator from "./separator";

export default class Collapse extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    selected: false
  };

  createMarkup() {
    return {__html: this.props.description};
  }

  render = () => (
    <React.Fragment>
      <Col xs={{size: 12}} className="item-body">
        <Row>
          <Col xs={{size: 6}}>
            <h3>{ this.props.title }</h3>
          </Col>
          <Col xs={{size: 6}}>
            <IconContext.Provider value={{ size: '2em', className: "icon"}}>
              <div onClick={() => this.setState({selected: ! this.state.selected}) }
                   className="clickable pull-right">
                { this.state.selected ? <IoIosArrowDown /> : <IoIosArrowUp /> }
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
      </Col>
      <Separator />
      <Collapsable isOpen={this.state.selected}>
          <Col xs={{size: 12}}>
            <Row>
              <Col xs={{size: 12}}>
                {  }
                <div dangerouslySetInnerHTML={this.createMarkup()} />
              </Col>
            </Row>
          </Col>
      </Collapsable>
    </React.Fragment>
  );
}