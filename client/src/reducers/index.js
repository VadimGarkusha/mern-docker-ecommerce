import {combineReducers} from 'redux';
import authReducer from './authReducer';
//import usersReducer from './usersReducer'

export default combineReducers({
    user: authReducer
});