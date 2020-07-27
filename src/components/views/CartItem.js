import React from 'react';
import CartUpdateForm from './CartUpdateForm';

export default (props) => {
    const {product} = props;

  return(
    <tr className={"row-" + product.Id}
      onClick={e => props.handleClickRow(product.Id)}>

      <th scope="row">{ props.counter }</th>
      <td>{ product.Title }</td>
      <td>{ product.Price } VND</td>
      <td>
        <CartUpdateForm product={props.product}
          cartFormElement={props.cartFormElement}
          handleRemoveCartItem={props.handleRemoveCartItem}
          handleChangeCartQuantity={props.handleChangeCartQuantity} />
      </td>
    </tr>
  );
}
