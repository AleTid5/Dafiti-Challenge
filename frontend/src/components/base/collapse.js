import React, { Component } from "react"
import { IconContext } from "react-icons";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import {Col, Row, Collapse as Collapsable} from "reactstrap";
import Separator from "./separator";
import { htmlCleaner } from "../../utils/helpers";

export default class Collapse extends Component {
  state = {
    selected: false
  };

  render = () => (
    <React.Fragment>
      <Col xs={{size: 12}} className="item-body mt-3">
        <Row>
          <Col xs={{size: 10}}>
            <h3>{ this.props.title }</h3>
          </Col>
          <Col xs={{size: 2}}>
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
      <Collapsable isOpen={this.state.selected} className="item-body">
          <Col xs={{size: 12}}>
            <Row>
              <Col xs={{size: 12}}
                   className="description"
                   dangerouslySetInnerHTML={{__html: htmlCleaner(this.props.description)}} />
            </Row>
          </Col>
      </Collapsable>
    </React.Fragment>
  );
}