import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { navReducer } from './reducers';

const initialAppState = {};

export default getStore = () =>
  createStore(
    combineReducers({
      nav: navReducer
    }),
    initialAppState,
    applyMiddleware(thunk)
  );

