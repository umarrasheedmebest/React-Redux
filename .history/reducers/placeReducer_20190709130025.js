
import { ADD_PLACE } from '../actions/types';
import { REMOVE_PLACE } from '../actions/types';

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
        places: state.places.filter(places =>{ 
         return  places.value !== action.payload
        })
      };
      case  API_REQUEST:
      return {
        ...state,
        places: state.places.concat({
          value: action.payload
        })
      };
    default:
      return state;
  }
}

export default placeReducer;