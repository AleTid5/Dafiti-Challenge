import React, { Component } from "react";
import Item from '../components/item/item';

export default class ItemDescription extends Component {
    render = () => {
        return (
            <React.Fragment>
                <div className="app">
                    <Item props={this.props} />
                </div>
            </React.Fragment>
        );
    };
}
