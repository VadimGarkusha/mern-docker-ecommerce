import axios from 'axios';
import { serverUrl } from '../config/const';
import { AUTH_USER } from './types';
import { history } from '../store/history';

export const userRegularLogin = (credentials) => async dispatch => {
  const { email, password } = credentials;

  try {
    const res = await axios.post(`${serverUrl}/signin`, {email,password});
    console.log(res)
    if (res.status === 200) {
      dispatch(loginSuccess(res.data));
      //history.push('/');
    } else {
      dispatch(loginSuccess(null));
    }
  } catch (e) {
    console.warn('Error was caught:\n', e)
  }
}

const loginSuccess = user => ({ type: AUTH_USER, payload: user })