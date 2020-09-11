import { combineReducers, createStore } from 'redux';
import AuthReducer from './Auth';

const reducers = combineReducers({AuthReducer})

const store = createStore(reducers)

export default store;