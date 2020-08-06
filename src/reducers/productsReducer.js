import * as types from '../actions/action-types';
const initialState = {
  allProducts: [],
  loading: false
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, loading: true };

    case types.FETCH_PRODUCTS:
      const allProducts = action.products;
      return { ...state, ...{ allProducts }, loading: false };

    case types.FETCH_PRODUCT_DETAILS:
      const productDetails = action.payload[0];
      return { ...state, ...{ productDetails } };

    default:
      return state;
  }
}

export default productsReducer;
