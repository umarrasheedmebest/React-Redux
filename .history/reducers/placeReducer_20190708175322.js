
import { ADD_PLACE } from '../actions/types';
import { REMOVE_PLACE } from '../actions/types';
import console = require('console');

const initialState = {
  placeName: '',
  places: []
};

const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          value: action.payload
        })
      };
      case REMOVE_PLACE:
      return {
        ...state,
        places: state.places.filter(item =>{ 
            console.log('item', item, 'action.payload', action.payload);
            item !== action.payload})
      };
    default:
      return state;
  }
}

export default placeReducer;