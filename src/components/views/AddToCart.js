import React, {Component} from 'react';
import {AddToCartContext} from '../../contexts/AddToCartContext';
import {highLightCartButton} from '../../lib/cartLib';
import {connect} from "react-redux";
import * as actions from "../../actions";


 class AddToCart extends Component {

    handleAddToCart = () => {
        highLightCartButton();
        const attributes = this.props.product;
        const title = attributes.name;
        this.showToast(title);
        this.context.action(attributes);
    };

    showToast = (Title) => {
        this.props.showHideToastAction(
            {
                isToastActive: true,
                toastMessage: `Product ${Title} added successfully!!`,
            }
        );
    };

    render() {
        return (
            <div className="add-cart-container">

                <button type="button" className="btn  btn-secondary"
                        onClick={this.handleAddToCart}> Add to Cart
                </button>

            </div>
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

