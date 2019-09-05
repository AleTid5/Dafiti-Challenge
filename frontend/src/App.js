
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './assets/scss/app.scss';
import ItemDescription from './views/item-description';

export default class App extends Component {
  render = () => (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ItemDescription}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}