import React from 'react';

export default (props) => {

  return(
    <div className="input-group cart-form-input-group ">
      <input type="number" className="form-control mr-3"
        onChange={event => props.handleChangeCartQuantity(event, props.product.Id)}
        value={props.cartFormElement.quantity} />

      <button type="button" className="btn btn-danger btn-remove-cart"
        onClick={e => props.handleRemoveCartItem(props.product)}>×</button>
    </div>
  );
}
