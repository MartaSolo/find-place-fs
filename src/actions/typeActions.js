import { SET_TYPE } from "./types";

export const setType = (type) => {
  return {
    type: SET_TYPE,
    payload: type,
  };
};
