import React from 'react';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart';
import ReadMore from '../helpers/ReadMore';

export default ({product,cartItem}) => {

   const inventory = ( cartItem, productID)=>{
    console.log();
    if(cartItem[productID] !== undefined) console.log(product.Id,cartItem[ product.Id]);
  }


  return(
    <div className="col-6 col-sm-4">

      <div className="product-box card mb-4 shadow-sm">
        <div className="bd-placeholder-img">
          <Link to={"/product-detail/" + product.Id}>
            <img className="card-img-top" alt={product.Title} src={product.ImageUrl} />
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={"/product-detail/" + product.Id}>{product.Title}</Link>
          </h5>
          <p className="card-text description">
            <ReadMore text={product.Description} length="100" />
          </p>

          <p className="card-text"><b>Price:</b> ${product.Price}</p>
          {inventory(cartItem,product.Id)}

          <p className="card-text"><b>Stock:</b> {product.inventory > 0 ? product.inventory : 'Out Stock' }</p>

          <AddToCart product={product} />
        </div>
      </div>

    </div>
  );
}
