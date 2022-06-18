import {
  GET_PLACE_EXTENDED,
  LOADING_PLACE_EXTENDED,
  ERROR_PLACE_EXTENDED,
} from "../actions/types";

const initialState = {
  placeExtended: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACE_EXTENDED:
      return {
        ...state,
        placeExtended: action.payload,
        loading: false,
      };
    case LOADING_PLACE_EXTENDED:
      return {
        ...state,
        loading: true,
      };
    case ERROR_PLACE_EXTENDED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
