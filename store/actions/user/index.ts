import { createAction } from '@reduxjs/toolkit'
import map from '../../map';

const setUser = createAction(map.SET_USER);
const getUser = createAction(map.GET_USER);

export default {
  setUser,
  getUser
};
