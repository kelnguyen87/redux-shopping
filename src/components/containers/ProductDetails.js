import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AddToCart from '../views/AddToCart';
import { AddToCartContext } from '../../contexts/AddToCartContext';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {productDetails: {}};
  }

  componentDidMount() {
    const productUrl = this.props.productUrl; // this.props.match.params.productId
    this.props.getProductDetails(productUrl);
  }

  // Passing AddToCartContext as it might be used at any deep level child.
  render() {
    const {productDetails} = this.props.productDetails;

    if(productDetails !== undefined){
      return(
          <AddToCartContext.Provider value={{action: this.props.addToCartAction}}>
            <div>
              { typeof productDetails !== 'undefined' &&
              <React.Fragment>
                <h3 className="center">Product Details - {productDetails.name}</h3>
                <p>Details page of Product.</p>
                <div className="product-box card mb-3">
                  <div className="card-body">
                    <div className="text-center">
                      <img className="card-img-top" alt={productDetails.name} src={productDetails.image[0]} />
                    </div>
                    <p className="card-text description">
                      {productDetails.description}
                    </p>
                    <p className="card-text"><b>Code:</b> {productDetails.code}</p>
                    <p className="card-text"><b>Organic:</b> {productDetails.Organic ? 'Yes' : 'No' }</p>
                    <p className="card-text"><b>Price:</b> {productDetails.price} VND</p>

                    <AddToCart product={productDetails} />
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque augue, vehicula non facilisis in, maximus rutrum nulla. Nullam aliquet nec sapien id tempus. Maecenas non lorem orci. Nam nec blandit elit, vel bibendum ex. Etiam aliquet quam quis enim aliquet, vitae iaculis tortor tempus. Cras consectetur urna aliquet augue molestie vestibulum. Integer efficitur augue ex, non lacinia ex dapibus eget. Suspendisse eu ligula ut odio sodales sodales non eu eros. Morbi bibendum nulla molestie, ultricies nunc a, vulputate ex. Mauris vel dolor massa. Duis in dignissim nulla. Nulla eu justo finibus, molestie sapien at, lacinia augue. Cras eleifend mi ultrices nibh accumsan vehicula dapibus ac arcu. Sed sollicitudin bibendum odio, id placerat enim cursus in.</p>

                    <p>Fusce ultrices, nunc sit amet posuere ultricies, lectus ligula pulvinar nibh, ut faucibus velit libero vel neque. Duis lacinia, nisl non imperdiet malesuada, mi lorem convallis neque, sit amet aliquam arcu orci nec mi. Pellentesque massa justo, cursus eget blandit at, blandit ac massa. Proin non augue vel purus imperdiet rutrum quis ac risus. Quisque nec enim vel felis tempor facilisis nec suscipit ligula. Phasellus mauris nisl, ultrices eu eros eleifend, convallis dapibus enim. Proin varius maximus neque ac imperdiet. In eget metus nec felis faucibus auctor.</p>

                    <p>Etiam at vehicula nisl, bibendum porttitor erat. Pellentesque laoreet tempus nulla quis placerat. Cras tempor mauris ut feugiat fermentum. Donec nec ex et diam congue blandit et et dui. Donec sapien felis, finibus vitae maximus in, tristique dignissim justo. Integer ut tortor finibus, tristique quam sed, pellentesque nisl. Ut aliquet sapien a odio volutpat facilisis. Fusce dolor augue, molestie sed varius ut, suscipit non est. Praesent at posuere mauris. Donec eget maximus eros. Etiam commodo nibh eget commodo pharetra.</p>
                  </div>
                </div>
              </React.Fragment>
              }
            </div>
          </AddToCartContext.Provider>
      );
    }else{
      return  <h4 className="text-center cart-empty">Page Not Found</h4>
    }

  }
}

const mapStateToProps = state => {

  return {productDetails: state.products};
}

export default connect(mapStateToProps, actions)(ProductDetails);
