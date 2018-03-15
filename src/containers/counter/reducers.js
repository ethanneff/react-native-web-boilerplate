import * as constants from "./constants";

export default (state = 0, action) => {
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
