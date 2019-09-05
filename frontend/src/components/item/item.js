import React, { Component } from "react";
import { Card, Col, Row } from 'reactstrap';
import api from '../../utils/api/api_items';
import Loader from '../base/loader';
import Separator from '../base/separator';
import ItemHeader from "./item-header";
import ItemBody from "./item-body";
import ItemDescription from "./item-description";
import ItemDetail from "./item-detail";

class Item extends Component {
  state = {
    item: {},
    isReady: false,
  };

  componentDidMount = () => this.search();

  search = () => {
    const itemId = 'MA366SH93DICAR';

    const item = api.searchItemById(itemId);

    this.setState({
      item: item,
      isReady: true
    })
  };

  renderItem = () => {
    if (! this.state.isReady) return (<Loader />);

    return (
      <Row>
        <ItemHeader brand={ this.state.item.brand }
                    productname={ this.state.item.productname }
                    imagesrc={ this.state.item.otherimages.shift() }
                    url={ this.state.item.url }
                    seller={ this.state.item.seller } />
        <Separator />
        <ItemBody item={this.state.item} />
        <ItemDescription description={this.state.item.description} />
        <ItemDetail description="" />
      </Row>
    );
  };

  render = () => (
    <React.Fragment>
      <Row>
        <Col md={{size: 8, offset: 2}} className="pb-5">
          <Card md="12" className="card-body item-description">
            {this.renderItem()}
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Item;
