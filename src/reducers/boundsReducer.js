import { GET_BOUNDS } from "../actions/types";

const initialState = {
  topLeftLatitude: "",
  topLeftLongitude: "",
  btmRightLatitude: "",
  btmRightLongitude: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOUNDS:
      return {
        ...state,
        topLeftLatitude: action.payload.topLeftLatitude,
        topLeftLongitude: action.payload.topLeftLongitude,
        btmRightLatitude: action.payload.btmRightLatitude,
        btmRightLongitude: action.payload.btmRightLongitude,
      };
    default:
      return state;
  }
};
