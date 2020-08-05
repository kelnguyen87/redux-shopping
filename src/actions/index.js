import * as types from './action-types';
import { fetchProducts, fetchProductDetails } from '../lib/fetchProducts';

export function addToCartAction(product) {

  return {
    type: types.ADD_TO_CART,
    productId: product.Id,
    Title: product.Title,
    Price: product.Price,
    ImageUrl: product.ImageUrl,
    Quantity: product.inventory
  };
}

export function removeFromCartAction(productId, count) {
  return {
    type: types.REMOVE_FROM_CART,
    productId: productId,
    productCount: count
  };
}

export const clearCart = () => {
  return {
    type: types.CLEAR_CART
  }
};

export function updateCartAction(payload) {
  return {
    type: types.UPDATE_CART,
    payload
  };
}

export function getProducts() {
  return {
    type: types.FETCH_PRODUCTS,
    payload: fetchProducts()
  };
}

export function getProductDetails(productId) {
  return {
    type: types.FETCH_PRODUCT_DETAILS,
    payload: fetchProductDetails(productId)
  };
}

export const closeMaxProductModal = () => {
  return {
    type: types.CLOSE_MAX_PRODUCT_MODAL
  }
};

export const changeCurrency = (currencyName) => {
  // currency value can be fetched here from an external api and then passes to the store
  return {
    type: types.CHANGE_CURRENCY,
    currencyName: currencyName
  }
};
