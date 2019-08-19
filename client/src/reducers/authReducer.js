import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, ...action.payload, isLoggedIn: true};

    case LOGOUT_USER:
      return {...state, isLoggedIn: false};

    default:
      return state;
  }
}