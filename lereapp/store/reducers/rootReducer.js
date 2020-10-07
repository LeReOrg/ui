import { combineReducers } from 'redux';
import categories from './categories_reducer'
import products from './product_reducer'

const rootReducer = combineReducers({
  categories,
  products
});

export default rootReducer;