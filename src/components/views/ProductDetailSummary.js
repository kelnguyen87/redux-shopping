import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AddToCart from './AddToCart';
import ReadMore from '../helpers/ReadMore';

export default ({product, currency}) => {


    let currencyKeys = Object.keys(currency);
    let currencyValue = currency[currencyKeys[0]];
    let currencyName = currency[currencyKeys[1]];
    console.log(currencyKeys,currencyValue,currencyName);
    const productDiscount = (product) => {
        if (product.sale) {
            return (
                <span className="shop-card-discount">
                   {Math.round(((product.discount_price - product.Price) * 100) / product.Price)}% Off
               </span>
            );
        }
    }
    //inventory(cartItem,product);

    return (
        <div className="col-6 col-sm-3">

            <div className="product-box card mb-4 shadow-sm">
                <div className="bd-placeholder-img">
                    <Link to={"/product-detail/" + product.Id}>
                        <img className="card-img-top" alt={product.Title} src={product.ImageUrl}/>
                    </Link>
                    {productDiscount(product)}
                </div>
                <div className="card-body">
                    <h6 className="card-title">
                        <Link to={"/product-detail/" + product.Id}>{product.Title}</Link>
                    </h6>
                    <p className="card-price">

                        <span className={'price'}> {currencyName}{Math.round(product.discount_price * currencyValue)}</span>
                        <span
                            className={'price price--noSale'}>{currencyName}{Math.round(product.Price * currencyValue)}</span>
                    </p>
                    <p className="card-text"><b>Stock:</b> {product.inventory > 0 ? product.inventory : 'Sold Out'}</p>

                    <AddToCart product={product}/>
                </div>
            </div>

        </div>
    );
}
