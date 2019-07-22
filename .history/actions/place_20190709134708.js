import { ADD_PLACE } from './types';
import { REMOVE_PLACE } from './types';
import axios from 'axios';
export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}

export const removePlace = placeName => {
  return (dispatch, getState) => {
    dispatch({type: 'START_LOADING'})
    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes').then((res) => {
      console.log('api response', res);
      dispatch({type: 'STOP_LOADING'});
    }).catch(()=>{
      dispatch({type: 'STOP_LOADING'});
    })
  }
}

// export const apiRequest = () => {
//   return (dispatch, getState) => {
//     axios.get('https://breaking-bad-qoutes.herokuapp.com/v1/quotes').then((res) => {
//       console.log('api response', res);
//     })
//   }
// }  