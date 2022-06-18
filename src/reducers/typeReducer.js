import { SET_TYPE } from "../actions/types";

const initialState = "museum";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return action.payload;
    default:
      return state;
  }
};
