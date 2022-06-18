import { GET_LATLONG } from "../actions/types";

const initialState = { latitude: "", longitude: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LATLONG: {
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    }
    default:
      return state;
  }
};
