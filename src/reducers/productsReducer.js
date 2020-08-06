import * as types from '../actions/action-types';

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, loading: true };
    case types.FETCH_PRODUCTS_RECEIVED:
      const allProducts = action.json[0];

      return { ...state, ...{ allProducts }, loading: false };
    case types.FETCH_PRODUCT_DETAILS:
      const productDetails = action.payload[0];
      return { ...state, ...{ productDetails } };
    default:
      return state;
  }
}

export default productsReducer;
