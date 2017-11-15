// TODO: remove exports and inject
import {
  all,
  put,
  call,
  takeEvery,
  takeLatest,
  fork
} from "redux-saga/effects";
import { delay } from "redux-saga";
import * as constants from "./constants";

export function* incrementAsync() {
  yield takeEvery(constants.incrementAsync, function*() {
    yield call(delay, 1000);
    yield put({ type: constants.increment });
  });
}

export function* decrementAsync() {
  yield takeLatest(constants.decrementAsync, function*() {
    yield call(delay, 1000);
    yield put({ type: constants.decrement });
  });
}

export default function* root() {
  yield all([fork(incrementAsync), fork(decrementAsync)]);
}
