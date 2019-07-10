import axios from 'axios';
import { serverUrl } from '../config/const';
import { FETCH_USER } from './types';

export const userRegularLogin = (credentials) => async dispatch => {
  const { email, password } = credentials;
  const res = await axios.post(`${serverUrl}/signin`,{ email,password});
  return dispatch(userObj(res.data));
}

const userObj = user => ({type: FETCH_USER, payload: user});