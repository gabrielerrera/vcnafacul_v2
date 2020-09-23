import { combineReducers } from "redux";

import AuthReducer from "./Auth";
import MarkerReducer from "./Maps";

const reducers = combineReducers({ AuthReducer, MarkerReducer });

export default reducers;
