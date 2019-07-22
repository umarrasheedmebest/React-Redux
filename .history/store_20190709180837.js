
import { createStore, combineReducers, applyMiddleware } from 'redux';
import placeReducer from './reducers/placeReducer';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
const rootReducer = combineReducers({
  places: placeReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}

export default configureStore;