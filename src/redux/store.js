import { createStore, applyMiddleware } from "redux";
// import tools of persisting store
import { persistStore } from "redux-persist";
import logger from 'redux-logger';

import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// declare persistore variable
const persistor = persistStore(store);

// export store & persistor
export { store, persistor };
