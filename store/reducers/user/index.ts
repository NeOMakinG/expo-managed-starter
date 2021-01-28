import { createReducer } from '@reduxjs/toolkit'
import map from '../../map';

const userReducer = createReducer([], {
  [map.SET_USER]: (state, action) => {
    // "mutate" the array by calling push()
    state = action.payload;
  },
  [map.GET_USER]: (state) => {
    return state;
  },
})

export default userReducer;
