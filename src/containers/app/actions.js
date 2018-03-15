import * as constants from "./constants";

export const updateDimension = value => {
  return {
    type: constants.updateDimension,
    value: value
  };
};

export const updateState = value => {
  return {
    type: constants.updateState,
    value: value
  };
};

export const updateNetwork = value => {
  return {
    type: constants.updateNetwork,
    value: value
  };
};
