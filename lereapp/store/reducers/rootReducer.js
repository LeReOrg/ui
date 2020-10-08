import { combineReducers } from 'redux';
import categories from './categories_reducer'
import products from './product_reducer'
import carts from './cart_reducer'
const rootReducer = combineReducers({
  categories,
  products,
  carts
});

export default rootReducer;