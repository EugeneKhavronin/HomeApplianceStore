import { combineReducers } from 'redux';

import products from './products';
import users from './users';
import orders from './orders';
export default combineReducers({
  products, users,orders
});
