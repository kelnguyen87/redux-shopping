import * as types from './action-types';
import { fetchProducts, fetchProductDetails } from '../lib/fetchProducts';

export function addToCartAction(product) {

  return {
    type: types.ADD_TO_CART,
    payload: { Id: product.code, Title: product.name, Price: product.price,ImageUrl: product.image[0],Description: product.description,productUrl: product.productUrl }
  };
}

export function removeFromCartAction(productId) {
  return {
    type: types.REMOVE_FROM_CART,
    productId: productId
  };
}

export function updateCartAction(payload) {
  return {
    type: types.UPDATE_CART,
    payload
  };
}

export function getProducts() {

  return {
    type: types.FETCH_PRODUCTS,
    payload: fetchProducts("2315cc02-5e3b-4ac1-b634-348db376bf71",1)
  };
}

export function getProductDetails(productUrl) {
  return {
    type: types.FETCH_PRODUCT_DETAILS,
    payload: fetchProductDetails(productUrl)
  };
}

export function showHideToastAction  (payload)  {
  return{
    type: 'TOAST',
    payload
  }
};
