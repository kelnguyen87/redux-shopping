import { combineReducers } from 'redux';

// Reducers
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import toastReducer from "./toastReducer";
// Combine Reducers

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
  toast: toastReducer
});
