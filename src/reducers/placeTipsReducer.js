import {
  GET_PLACE_TIPS,
  RESET_PLACE_TIPS,
  LOADING_PLACE_TIPS,
  ERROR_PLACE_TIPS,
} from "../actions/types";

const initialState = {
  tips: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACE_TIPS:
      return {
        ...state,
        tips: action.payload,
        loading: false,
      };
    case RESET_PLACE_TIPS:
      return {
        ...state,
        tips: null,
        loading: false,
      };
    case LOADING_PLACE_TIPS:
      return {
        ...state,
        loading: true,
      };
    case ERROR_PLACE_TIPS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
