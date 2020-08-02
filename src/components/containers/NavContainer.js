import React, { Component } from 'react';
import { connect } from 'react-redux';

import { countCart } from '../../lib/cartLib';
import NavBar from '../views/NavBar';
import NavCartCount from '../views/NavCartCount';

class NavContainer extends Component {

  render() {
    return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark mb-5">
          <div className="container">
              <NavBar />
              <NavCartCount cartItems={this.props.cart} cartTotal={this.props.cartTotal}  cartCount={this.props.cartCount} />
          </div>

      </nav>
    )
  }
}

const mapStateToProps = state => {
    const cartCount = countCart(state.cart.cartItem);
    return {cart: state.cart.cartItem,cartTotal: state.cart.cartTotal, cartCount}
}

export default connect(mapStateToProps)(NavContainer);
