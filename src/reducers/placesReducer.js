import { GET_PLACES, LOADING_PLACES, ERROR_PLACES } from "../actions/types";

const initialState = {
  places: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload,
        loading: false,
      };
    case LOADING_PLACES:
      return {
        ...state,
        loading: true,
      };
    case ERROR_PLACES:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
