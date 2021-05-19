import { combineReducers } from 'redux';
import todo from './todoReducer';
import products from './productsReducer';

export default combineReducers({
  todo,
  products,
});
