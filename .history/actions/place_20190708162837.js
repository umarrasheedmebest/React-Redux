import { ADD_PLACE } from './types';
import { REMOVE_PLACE } from './types';

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