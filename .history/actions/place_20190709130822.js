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
    axios.get('https://breaking-bad-qoutes.herokuapp.com/v1/quotes').then((res) => {
      console.log('api response', res);
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