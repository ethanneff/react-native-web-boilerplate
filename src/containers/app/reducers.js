// TODO: remove exports and inject
import * as constants from "./constants";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case constants.increment:
      return state + 1;
    case constants.incrementValue:
      return state + action.value;
    case constants.incrementIfOdd:
      return state % 2 !== 0 ? state + 1 : state;
    case constants.decrement:
      return state - 1;
    default:
      return state;
  }
};

export const bob = (state = 0, action) => {
  switch (action.type) {
    case constants.decrement:
      return state + 1;
    case constants.incrementValue:
      return state + action.value;
    case constants.incrementIfOdd:
      return state % 2 !== 0 ? state + 1 : state;
    case constants.increment:
      return state - 1;
    default:
      return state;
  }
};
