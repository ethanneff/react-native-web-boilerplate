import * as constants from "./constants";

const delay = action => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(action);
    }, 1000);
  };
};

export const increment = () => {
  return {
    type: constants.increment
  };
};

export const incrementValue = value => {
  return {
    type: constants.incrementValue,
    value: value
  };
};

export const decrement = () => {
  return {
    type: constants.decrement
  };
};

export const decrementAsync = () => {
  return delay(decrement());
};

export const incrementAsync = value => {
  return delay(incrementValue(value));
};

export const incrementIfOdd = () => {
  return {
    type: constants.incrementIfOdd
  };
};
