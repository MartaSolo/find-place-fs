import {
  GET_PLACE_PHOTOS,
  LOADING_PLACE_PHOTOS,
  ERROR_PLACE_PHOTOS,
  RESET_PLACE_PHOTOS,
} from "../actions/types";

const initialState = {
  photos: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACE_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    case RESET_PLACE_PHOTOS:
      return {
        ...state,
        photos: null,
        loading: false,
      };
    case LOADING_PLACE_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    case ERROR_PLACE_PHOTOS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
