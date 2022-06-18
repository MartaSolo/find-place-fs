import { GET_BOUNDS } from "./types";

export const getBounds = (neLatitude, neLongitude, swLatitude, swLongitude) => {
  return {
    type: GET_BOUNDS,
    payload: {
      neLatitude,
      neLongitude,
      swLatitude,
      swLongitude,
    },
  };
};
