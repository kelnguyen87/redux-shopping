import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import ProductList from "../containers/ProductList";

const Women = (props) => {
  useEffect(() => {props.getProducts();}  ,[]);

  return(
        <ProductList
            products={props.products}
            loading={props.loading}
            usedCurrencyProp={props.usedCurrencyProp}
            cart={props.cart}
            pageName={props.pageName}
            addToCartAction={props.addToCartAction}
        />
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.allProducts.filter(product => product.Category === 'women'),
    loading :state.products.loading,
    usedCurrencyProp: state.cart.usedCurrency,
    cart: state.cart.cartItem
  }

}

export default connect(mapStateToProps, actions)(Women);
