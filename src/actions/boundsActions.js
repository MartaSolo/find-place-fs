import { GET_BOUNDS } from "./types";

export const getBounds = (
  topLeftLatitude,
  topLeftLongitude,
  btmRightLatitude,
  btmRightLongitude
) => {
  return {
    type: GET_BOUNDS,
    payload: {
      topLeftLatitude,
      topLeftLongitude,
      btmRightLatitude,
      btmRightLongitude,
    },
  };
};
