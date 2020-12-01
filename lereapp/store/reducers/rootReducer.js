import { combineReducers } from 'redux';
import categories from './categories_reducer'
import products from './product_reducer'
import carts from './cart_reducer'
import user from './user_reducer'

const rootReducer = combineReducers({
  categories,
  products,
  carts,
  user
});

export default rootReducer;