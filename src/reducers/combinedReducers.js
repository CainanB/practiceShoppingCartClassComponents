import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import loadProductsReducer from './loadProductsReducer'
export default combineReducers({
    store: cartReducer,
    items: loadProductsReducer
})