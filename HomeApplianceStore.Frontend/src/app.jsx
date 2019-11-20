import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import ListUsers from './users/ListUsers';
import Buyer from './buyer/buyer';
import ListProducts from './components/ListProducts';
import reducer from './store/reducers';

import './app.css';
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <header className="header-back">
          <h1 className="titleNews">Интернет магазин бытовой техники </h1>

          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/admin">admin</Link>
                  </li>
                  <li>
                    <Link to="/users">users</Link>
                  </li>
                  <li>
                    <Link to="/buyer">buyer</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/admin">
                  <ListProducts />
                </Route>
                <Route path="/users">
                  <ListUsers />
                </Route>
                <Route path="/buyer">
                  <Buyer/>
                </Route>
              </Switch>
            </div>
          </Router>


        </header>


      </Provider>
    );
  }
}
