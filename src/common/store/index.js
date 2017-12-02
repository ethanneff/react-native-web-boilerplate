import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunk from "redux-thunk";

const rootReducer = (state = {}, action) => {
  return state;
};

const createReducer = reducers => {
  return combineReducers({
    rootReducer,
    ...reducers
  });
};

const enhancers = [applyMiddleware(thunk)];
const store = createStore(createReducer(), composeWithDevTools(...enhancers));
store.reducers = {};

const injectReducer = (name, reducer) => {
  store.reducers[name] = reducer;
  store.replaceReducer(createReducer(store.reducers));
  console.log(store.getState());
};

export { store, injectReducer };
