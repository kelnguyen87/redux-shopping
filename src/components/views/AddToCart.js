import React, {Component} from 'react';
import {AddToCartContext} from '../../contexts/AddToCartContext';
import {highLightCartButton} from '../../lib/cartLib';
import {connect} from "react-redux";
import * as actions from "../../actions";


class AddToCart extends Component {

    handleAddToCart = () => {
        highLightCartButton();
        const { product} = this.props;
        this.context.action(product);
        product.inventory -= 1;
        //return product;

    }

    render() {
        const {product} = this.props;
        if (product.inventory < 1) return (
            <button type="button" className="btn  btn-secondary"
                    disabled>Add to Cart
            </button>
        )
        return (
            <button type="button" className="btn  btn-secondary"
                    onClick={this.handleAddToCart}>Add to Cart
            </button>
        );
    }
}

AddToCart.contextType = AddToCartContext;

const mapStateToProps = state => {
    if (typeof state.products.allProductsSmart === 'undefined') {
        return {products: []};
    } else {
        return {
            products: state.products.allProductsSmart,
            isToastActive: state.toast.isToastActive,
            toastMessage: state.toast.toastMessage
        }
    }
}


export default connect(mapStateToProps, actions)(AddToCart);

