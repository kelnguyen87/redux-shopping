import * as types from '../actions/action-types';

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      const allProductsSmart = action.payload;
      return { ...state, ...{ allProductsSmart } };
    case types.FETCH_PRODUCT_DETAILS:
      const productDetails = action.payload;
      return { ...state, ...{ productDetails } };
    default:
      return state;
  }
}

export default productsReducer;
