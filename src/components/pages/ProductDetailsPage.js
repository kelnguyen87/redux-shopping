import React, { Component } from 'react';
import ProductDetails from '../containers/ProductDetails';

export default class ShoppingCart extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) { window.location.reload();}
  }

  render() {
    const { match: { params: { productUrl } } } = this.props; // this.props.match.params.productId
    return(
      <div className="container main-container">
        <ProductDetails productUrl={productUrl} />
      </div>
    )
  }
}
