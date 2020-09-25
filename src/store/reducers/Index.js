import { combineReducers } from "redux";

import AuthReducer from "./Auth";
import MarkerReducer from "./Maps/Maps";

const reducers = combineReducers({ AuthReducer, MarkerReducer });

export default reducers;
