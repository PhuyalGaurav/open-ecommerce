import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk }  from 'redux-thunk'
import { productListReducer } from "./reducers/productReducers";
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({ 
    productList : productListReducer,

})
   
const initaialState = {}

const middleware = [thunk]
const store = legacy_createStore(reducer, initaialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store