import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ReadMore from "../helpers/ReadMore";

export default ({cartItems,cartCount}) => {
    const [listOpen, setListOpen] = useState(false);
    const toggleList = () => {
        setListOpen(!listOpen);
    }

    const cartItemsMarkUp = cartItems.map((product, index) =>{
        return (
            <li className="previewCartItem" key={product.Id} >
                <div className="previewCartItem-image">
                    <Link to={"/product-detail/" + product.productUrl}>
                        <img className="card-img" alt={product.Title} src={product.ImageUrl} />
                    </Link>
                </div>
                <div className="previewCartItem-content">
                    <h6 className="previewCartItem-name">
                        <Link to={"/product-detail/" + product.productUrl}>{product.Title}</Link>
                    </h6>
                    <p className="previewCartItem-desc">
                        <ReadMore text={product.Description} length="50" />
                    </p>

                    <p className="previewCartItem-price"><b>Price:</b> ${product.Price}</p>
                </div>

            </li>
            )

    });



    return(
    <div className="dropdown">

      <Link id="nav-view-cart-link" onClick={ toggleList} to={"#"} className="btn btn-secondary">
        Cart (items { cartCount.cartItemCount }) - { cartCount.cartTotal } VND
      </Link>
        {listOpen && (
            <div className="dropdown-menu show dropdown-previewcart">
                {cartItems.length ? (
                    <ul className="previewCart">
                        {cartItemsMarkUp}
                        <li className="previewCartItem">
                            <Link  to={"/shopping-cart"} onClick={ () => setListOpen(false)}  className="btn btn-secondary btn-block">
                                My cart
                            </Link>

                        </li>
                    </ul>
                ):(
                    <ul className="previewCart-emty">
                        <li className="previewCartItem">
                            <p className=" justify-content-center cart-empty">Your Cart is empty!</p>

                        </li>
                    </ul>
                )}


            </div>
        ) }

    </div>
  );
}
