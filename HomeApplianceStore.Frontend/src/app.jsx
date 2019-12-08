import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Button from '@material-ui/core/Button';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import ListUsers from './users/ListUsers';
import ListOrders from './orders/ListOrders';
import Buyer from './buyer/buyer';
import ListProducts from './components/ListProducts';
import reducer from './store/reducers';

import './app.css';
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>



          <Router>
            <div>
            <header className="header-back">
              <nav>
              <div className="titleNews">Интернет магазин бытовой техники </div>

                <Button variant="contained" color="primary" className="linkAdmin">
                  <Link to="/admin" style={{ textDecoration: 'none', color:'white'}} >admin</Link>
                </Button>
                <Button variant="contained" color="primary" className="linkUsers">
                  <Link to="/users" style={{ textDecoration: 'none',color:'white'}} >users</Link>
                </Button>
                <Button variant="contained" color="primary" className="linkClient">
                  <Link to="/buyer" style={{ textDecoration: 'none', color:'white'}} >buyer</Link>
                </Button>
                <Button variant="contained" color="primary" className="linkOrders">
                  <Link to="/orders" style={{ textDecoration: 'none', color:'white'}} >orders</Link>
                </Button>
              </nav>
            </header>
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
                <Route path="/orders">
                  <ListOrders/>
                </Route>
              </Switch>
            </div>
          </Router>



      </Provider>
    );
  }
}
