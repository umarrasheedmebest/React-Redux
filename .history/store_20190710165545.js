
import { createStore, combineReducers, applyMiddleware } from 'redux';
import placeReducer from './reducers/placeReducer';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
  places: placeReducer
});

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const configureStore = () => {
//   return createStore(persistedReducer, applyMiddleware(thunk, logger));
// }
export const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
//export default configureStore;
export const persistor = persistStore(store);