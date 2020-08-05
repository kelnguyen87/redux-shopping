import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AddToCart from './AddToCart';
import ReadMore from '../helpers/ReadMore';

export default ({product, currency}) => {
    let currencyKeys = Object.keys(currency);
    let currencyValue = currency[currencyKeys[0]];
    let currencyName = currency[currencyKeys[1]];

    const productDiscount = (product) => {
        if (product.sale) {
            return (
                <span className="shop-card-discount">
                   {Math.round(((product.discount_price - product.Price) * 100) / product.Price)}% Off
               </span>
            );
        }
    }

    const productPrice=(product)=>{
        if (product.sale) {
            return (
                <>
                    <span className={'price'}>
                             {currencyName === 'đ' ?
                                 (`${Math.round(product.discount_price * currencyValue).toLocaleString()}${currencyName}`) :
                                 (`${currencyName}${Math.round(product.discount_price * currencyValue).toLocaleString()} `)}
                    </span>
                    <span className={'price price--noSale'}>
                            {currencyName === 'đ' ?
                                (`${Math.round(product.Price * currencyValue).toLocaleString()}${currencyName}`) :
                                (`${currencyName}${Math.round(product.Price * currencyValue).toLocaleString()} `)}
                        </span>
                </>
            );
        }else{
           return  <span className={'price '}>
                            {currencyName === 'đ' ?
                                (`${Math.round(product.Price * currencyValue).toLocaleString()}${currencyName}`) :
                                (`${currencyName}${Math.round(product.Price * currencyValue).toLocaleString()} `)}
                  </span>
        }
    }
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
                        {productPrice(product)}
                    </p>
                    <p className="card-text d-none">Stock: {product.inventory > 0 ? 'in Stock' : 'Sold Out'}</p>

                    <AddToCart product={product}/>
                </div>
            </div>

        </div>
    );
}
