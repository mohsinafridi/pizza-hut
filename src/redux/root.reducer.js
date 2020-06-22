import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Different Reducers
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from "./shop/shop.reducer";

// save in local storage.
const persistConfig  ={
    key: 'root',
    storage ,
    whitelist: ['cart']
}

const rootReducer  = combineReducers({
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer);    

