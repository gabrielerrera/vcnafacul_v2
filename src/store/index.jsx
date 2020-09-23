import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from './reducers/Index';


function saveToLocalStorage(state) {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
  } catch (e) {
      console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
  } catch (e) {
      console.log(e);
      return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState, applyMiddleware(promise));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;