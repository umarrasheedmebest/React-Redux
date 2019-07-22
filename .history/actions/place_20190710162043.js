import { ADD_PLACE } from './types';
import { REMOVE_PLACE } from './types';
import { STOP_LOADING } from './types';
import { START_LOADING } from './types';

import axios from 'axios';
export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}

export const removePlace = placeName => {
  return (dispatch, getState) => {
    dispatch({type: 'START_LOADING'});
    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes').then((res) => {
      dispatch({type: 'STOP_LOADING'});
      console.log('api response', res);
    }).catch(()=>{
      dispatch({type: 'STOP_LOADING'});
    })
  }
}

export const getNews = () => ({
  type: GET_NEWS,
});

// export const apiRequest = () => {
//   return (dispatch, getState) => {
//     axios.get('https://breaking-bad-qoutes.herokuapp.com/v1/quotes').then((res) => {
//       console.log('api response', res);
//     })
//   }
// }  