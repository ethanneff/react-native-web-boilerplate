import { applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { createInjectSagasStore, sagaMiddleware } from "redux-sagas-injector";

import { put, takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function* rootSaga() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

const rootReducer = {
  app: (state = {}, action) => {
    switch (action.type) {
      case true:
        return action;
      default:
        return state;
    }
  }
};
const initialState = {};
const enhancers = [applyMiddleware(sagaMiddleware)];
const store = createInjectSagasStore(
  { rootSaga: rootSaga },
  rootReducer,
  initialState,
  composeWithDevTools(...enhancers)
);

export default store;
