
import { createStore, combineReducers, applyMiddleware } from 'redux';
import placeReducer from './reducers/placeReducer';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  places: placeReducer
});

const persistConfig = {
  key: 'root',
  storage: storage
}
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const configureStore = () => {
//   return createStore(persistedReducer, applyMiddleware(thunk, logger));
// }
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
//export default configureStore;
export const persistor = persistStore(store);