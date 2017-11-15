// TODO: finish
// TODO: call from reducers and sagas

import { injectReducer } from "redux-reducers-injector";
import { injectSaga } from "redux-sagas-injector";

// const injectReducer = (reducers, sagas) = {

// }

function* combineSagas() {
  yield all([fork(incrementAsync), fork(decrementAsync)]);
}
