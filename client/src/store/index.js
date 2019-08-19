import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducers);

const initialState = {
  user:
    { isLoggedIn: false }
};

const middleware = applyMiddleware(reduxThunk);

export const store = createStore(persistedReducer, initialState, middleware);
export const persistor = persistStore(store);
