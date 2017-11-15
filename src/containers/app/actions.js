import * as constants from "./constants";

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
  return {
    type: constants.decrementAsync
  };
};

export const incrementAsync = () => {
  return {
    type: constants.incrementAsync
  };
};

export const incrementIfOdd = () => {
  return {
    type: constants.incrementIfOdd
  };
};
