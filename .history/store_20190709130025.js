
import { createStore, combineReducers, applyMiddleware } from 'redux';
import placeReducer from './reducers/placeReducer';
import thunk from 'redux-thunk'; 
const rootReducer = combineReducers({
  places: placeReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;