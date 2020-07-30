import React, {Component} from 'react';
import {connect} from 'react-redux';

import {AddToCartContext} from '../../contexts/AddToCartContext';
import * as actions from '../../actions';
import ProductListSummary from '../views/ProductListSummary';
import ProductDetailSummary from '../views/ProductDetailSummary';
import Pagination from '../helpers/Pagination';
import 'react-toastify/dist/ReactToastify.css';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentPage: 1,
            perPage: 12
        }

    }

    componentDidMount() {

        this.props.getProducts();
    }

    getPagedData = () => {
        const currentPageItemStart = (this.state.currentPage - 1) * this.state.perPage;
        const currentPageItemEnd = currentPageItemStart + this.state.perPage;
        return [currentPageItemStart, currentPageItemEnd];
    }

    handleThisPage = (number) => {
        this.setState({currentPage: number});
    }

    handlePreviousPage = () => {
        if (this.state.currentPage > 0) {
            this.setState({currentPage: (this.state.currentPage - 1)});
        }
    }

    handleNextPage = () => {
        const lastPage = Math.ceil(this.props.products.length / this.state.perPage);
        if (this.state.currentPage < lastPage) {
            this.setState({currentPage: (this.state.currentPage + 1)});
        }
    }

    render() {
        console.log(this.props.getcategory);
        const totalProductCount = this.props.products.length;
        const {cart} = this.props;

        const [currentPageItemStart, currentPageItemEnd] = this.getPagedData();
        const currentPageProducts = this.props.products.slice(currentPageItemStart, currentPageItemEnd);

        const productListMarkup = currentPageProducts.map(product =>
            <ProductDetailSummary product={product} key={product.Id} cartItem={cart} />
        );

        // Passing AddToCartContext as it might be used at any deep level child.
        return (
            <AddToCartContext.Provider value={{action: this.props.addToCartAction}}>

                    <div className="row justify-content-between mb-3">
                        <div className={'col-sm-6'}>
                            <h3 className="center">Product List</h3>
                        </div>
                        <div className={'col-sm-6 text-right'}>
                            <ProductListSummary currentPageItemStart={currentPageItemStart}
                                                currentPageItemEnd={currentPageItemEnd} totalProductCount={totalProductCount}/>
                        </div>
                    </div>

                    <div className="row">
                        {productListMarkup}
                    </div>
                    <Pagination currentPage={this.state.currentPage} perPage={this.state.perPage}
                                totalProductCount={totalProductCount} handlePreviousPage={this.handlePreviousPage}
                                handleThisPage={this.handleThisPage} handleNextPage={this.handleNextPage}/>




            </AddToCartContext.Provider>
        );
    }
}

const mapStateToProps = state => {
    if (typeof state.products.allProducts === 'undefined') {
        return {products: []};
    } else {
        return {
            products: state.products.allProducts,
            cart: state.cart,
            isToastActive: state.toast.isToastActive,
            toastMessage: state.toast.toastMessage
        }
    }
}

export default connect(mapStateToProps, actions)(ProductList);
