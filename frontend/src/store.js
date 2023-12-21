import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk }  from 'redux-thunk'
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({ 
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer,
})

const cartItemsLocal = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]

const initaialState = {
    cart: {cartItems : cartItemsLocal}
}

const middleware = [thunk]
const store = legacy_createStore(reducer, initaialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store