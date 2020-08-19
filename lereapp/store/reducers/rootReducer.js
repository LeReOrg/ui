import { combineReducers } from 'redux';
import categories from './categories_reducer'

const rootReducer = combineReducers({
  categories,
});

export default rootReducer;