import React, { Component } from "react";
import { Button, Card, Col, Row } from 'reactstrap';
import api from '../../utils/api/api_items';
import Loader from '../base/loader';
import NoData from '../base/no-data';
import Separator from '../base/separator';
import ItemHeader from "./item-header";
import ItemBody from "./item-body";
import ItemDescription from "./item-description";
import ItemDetail from "./item-detail";

class Item extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    item: {},
    isReady: false,
  };

  componentWillMount = () => {
    this.search();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.search !== this.props.search)
      this.search();
  };

  search = () => {
    const itemId = 'MA366SH93DICAR';

    const item = api.searchItemById(itemId);

    this.setState({
      item: item,
      isReady: true
    })
  };

  changeIcon = () => {
    this.setState(prevState => ({fullHeart: !prevState.fullHeart}));
  }

  renderItem = () => {
    if (! this.state.isReady) return (<Loader />);

    if (! Object.keys(this.state.item).length) return (<NoData />);

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
