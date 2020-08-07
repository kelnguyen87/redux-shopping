import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import AddToCart from '../views/AddToCart';
import {AddToCartContext} from '../../contexts/AddToCartContext';
import Loading from "../helpers/Loading";
import Price from "../helpers/Price";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {productId} = this.props; // this.props.match.params.productId
        this.props.getProductDetails(productId);
    }

    // Passing AddToCartContext as it might be used at any deep level child.
    render() {
        const {productDetails} = this.props;
        const {loading} =  this.props;

        if (loading) return <Loading />;

        return (
            <AddToCartContext.Provider value={{action: this.props.addToCartAction}}>
                <div>
                    {typeof productDetails !== 'undefined' &&
                    <React.Fragment>
                        <h3 className="center mb-3"> {productDetails.Title}</h3>

                        <div className="product-box card mb-3">
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <img alt={productDetails.Title}
                                         src={productDetails.ImageUrl}/>
                                </div>
                                <p className="card-text description">
                                    {productDetails.Description}
                                </p>

                                <p className="card-text"><b>Category:</b> {productDetails.Category}</p>
                              <p className="card-text ">
                                <b>inventory:</b> {productDetails.inventory}
                              </p>
                                <p className="card-text"><b>Made by:</b> {productDetails.Manufacturer}</p>
                                <p className="card-text">
                                    <b>Organic:</b> {productDetails.Organic ? 'Yes' : 'No'}</p>
                                <p className="card-text mb-5">
                                    <b>Price:</b>
                                    <Price product={productDetails} currency={this.props.usedCurrencyProp}/>
                                </p>

                                <AddToCart product={this.props.productDetails}/>
                            </div>
                        </div>
                    </React.Fragment>
                    }
                </div>
            </AddToCartContext.Provider>
        );
    }
}

const mapStateToProps = state => {
    return {
        productDetails: state.products.productDetails,
        loading :state.products.loading,
        usedCurrencyProp: state.cart.usedCurrency,

    };
}

export default connect(mapStateToProps, actions)(ProductDetails);
