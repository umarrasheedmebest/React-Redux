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
    return {
      type: REMOVE_PLACE,
      payload: placeName
    }
  }

export const apiRequest = ()=> {
  axios.get('https://breaking-bad-qoutes.herokuapp.com/v1/quotes').then((res) => {
    console.log('api response', res);
  })
}  