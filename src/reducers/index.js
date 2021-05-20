import { combineReducers } from 'redux';
import todo from './todoReducer';
import products from './productsReducer';
import manufacturers from './ManufacturersReducer';
import productTypes from './productTypesReducer';

export default combineReducers({
  todo,
  products,
  manufacturers,
  productTypes,
});
