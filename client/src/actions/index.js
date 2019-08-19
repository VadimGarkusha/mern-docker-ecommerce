import axios from 'axios';
import { serverUrl } from '../config/const';
import { LOGIN_USER, LOGOUT_USER } from './types';

export const userRegularLogin = (credentials) => async dispatch => {
  const { email, password } = credentials;

  try {
    const res = await axios.post(`${serverUrl}/signin`, {email,password});
    console.log(res)
    if (res.status === 200) {
      dispatch(loginSuccess(res.data));
      
    } else {
      dispatch(loginSuccess(null));
    }
  } catch (e) {
    console.warn('Error was caught:\n', e)
  }
}

export const userLogout = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
}

const loginSuccess = user => ({ type: LOGIN_USER, payload: user })