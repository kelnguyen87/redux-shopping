import React from 'react';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart';
import ReadMore from '../helpers/ReadMore';

export default ({product}) => {
  const {attributes} = product;

  return(
    <div className="col-6 col-sm-3">

      <div className="product-box card mb-4 shadow-sm">
        <div className="bd-placeholder-img">
          <Link to={"/product-detail/" + attributes.productUrl}>
            <img  alt={attributes.name} src={attributes.image[0]} />
          </Link>
        </div>
        <div className="card-body">
          <h6 className="card-title">
            <Link to={"/product-detail/" + attributes.productUrl}>{attributes.name}</Link>
          </h6>
          <p className="card-text description">
            <ReadMore text={attributes.description} length="100" />
          </p>

          <p className="card-text"><b>Price:</b> {attributes.price} VND</p>
          <AddToCart product={attributes} />
        </div>
      </div>

    </div>
  );
}
