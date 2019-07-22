
import { ADD_PLACE } from '../actions/types';
import { REMOVE_PLACE } from '../actions/types';
import { START_LOADING } from '../actions/types';
import { STOP_LOADING } from '../actions/types';

const initialState = {
  placeName: '',
  places: [],
  isLoading: false
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
      // case REMOVE_PLACE:
      // return {
      //   ...state,
      //   places: state.places.filter(places =>{ 
      //    return  places.value !== action.payload
      //   })
      // };
      case START_LOADING:
      return {...state, isLoading: true}
      case STOP_LOADING:
      return  {...state, isLoading: false}
      case 'GET_NEWS':
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default placeReducer;