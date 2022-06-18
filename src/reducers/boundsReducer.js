import { GET_BOUNDS } from "../actions/types";

const initialState = {
  neLatitude: "",
  neLongitude: "",
  swLatitude: "",
  swLongitude: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOUNDS:
      return {
        ...state,
        neLatitude: action.payload.neLatitude,
        neLongitude: action.payload.neLongitude,
        swLatitude: action.payload.swLatitude,
        swLongitude: action.payload.swLongitude,
      };
    default:
      return state;
  }
};
