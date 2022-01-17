import { combineReducers } from 'redux';
// import persist reducer tool
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

// set config for persisting
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart',
  ],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

// export persisted root reducer by persistConfig
export default persistReducer(persistConfig, rootReducer);
