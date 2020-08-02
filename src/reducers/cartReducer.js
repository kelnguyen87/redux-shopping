import * as types from '../actions/action-types';

const initialState = {
    cartItem: [],
    cartTotal: 0,
    productMaxShowModal: false,
    modalMessage: null
}
const cartReducer = (state = initialState, action) => {
    let doesItemExist;
    switch (action.type) {
        case types.ADD_TO_CART:
            let newCartItem = state.cartItem;
            let newCartTotal = state.cartTotal;
            let productMaxShowModal = state.productMaxShowModal;
            let modalMessage = state.modalMessage;

            if(action.Quantity <=0){
                productMaxShowModal = !state.productMaxShowModal;
                modalMessage = 'Sorry! This product is out of stock';
            }else{

                let chkProductInCart = state.cartItem.find( product => product.Id === action.productId);
                if(chkProductInCart){
                    if(chkProductInCart.Count < action.Quantity){
                        newCartItem = state.cartItem.map(product=>(
                            product.Id === action.productId ? {...product, Count: product.Count + 1}: product
                        ));
                        newCartTotal = state.cartTotal + 1;
                    }else {
                        productMaxShowModal = !state.productMaxShowModal;
                        modalMessage = 'Sorry! Your product order cannot exceed our stock';
                    }
                }else{

                    newCartItem = state.cartItem.concat({Id: action.productId,Title:action.Title,Price:action.Price, ImageUrl:action.ImageUrl, Count: 1});
                    /*newCartItem = {...state.cartItem,
                        Id:action.productId,
                        Title:action.Title,
                        Price:action.Price,
                        ImageUrl:action.ImageUrl,
                        count: 1
                    }*/
                    newCartTotal = state.cartTotal + 1;
                }
            }

            return {
                ...state,
                cartTotal: newCartTotal,
                cartItem: newCartItem,
                productMaxShowModal: productMaxShowModal,
                modalMessage: modalMessage
            }


        case types.REMOVE_FROM_CART:
            const newCartState = state.filter((item) => {
                if (item.Id === action.productId) {
                    return false;
                }
                return true;
            });
            return newCartState;

        case types.UPDATE_CART:
            const cartFormArr = Object.keys(action.payload).map((key, index) => {
                return action.payload[key];
            });

            doesItemExist = false;

            const newProdCartState = state.map((item) => {
                let itemFound = cartFormArr.find((element) => element.Id === item.Id);
                if (itemFound) {
                    item.quantity = itemFound.quantity;
                    doesItemExist = true;
                }
                return item;
            });

            if (doesItemExist) {
                return newProdCartState;
            }

            return state;
        case types.CLOSE_MAX_PRODUCT_MODAL:
            return {
                ...state, productMaxShowModal: !state.productMaxShowModal
            }
        default:
            return state;
    }
}

export default cartReducer;
