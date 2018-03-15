import * as constants from "./constants";

const initialState = {
  dimensions: {
    window: {
      height: null,
      width: null,
      scale: null,
      fontScale: null
    },
    screen: {
      height: null,
      width: null,
      scale: null,
      fontScale: null
    }
  },
  status: null,
  network: {
    effectiveType: null, // 2g, 3g, 4g, unknown
    type: null // none, wifi, cellular, unknown
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.updateDimension:
      return { ...state, dimensions: action.value };
    case constants.updateState:
      return { ...state, status: action.value };
    case constants.updateNetwork:
      return { ...state, network: action.value };
    default:
      return state;
  }
};
