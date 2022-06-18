import { GET_LATLONG } from "./types";

export const getLatLong = (latitude, longitude) => {
  return {
    type: GET_LATLONG,
    payload: { latitude, longitude },
  };
};
