import { GET_PLACES, LOADING_PLACES, ERROR_PLACES } from "./types";
import findCategory from "../utils/findCategory";

export const getPlaces =
  (topRightLat, topRighttLong, btmLeftLat, btmLeftLong, typeOfPlace) =>
  async (dispatch) => {
    const neLatitude = String(topRightLat);
    const neLongitude = String(topRighttLong);
    const swLatitude = String(btmLeftLat);
    const swLongitude = String(btmLeftLong);
    const categories = findCategory(typeOfPlace);

    try {
      setLoading();
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "fsq38M6RZ+WMYi+Hu6J2YI/4DFBOSH2B23GvWzzNq0NsTpA=",
        },
      };
      // ok
      const response = await fetch(
        `https://api.foursquare.com/v3/places/search?categories=${categories}&ne=${neLatitude}%2C${neLongitude}&sw=${swLatitude}%2C${swLongitude}&limit=20`,
        options
      );
      const data = await response.json();
      dispatch({
        type: GET_PLACES,
        payload: data.results,
      });
    } catch (error) {
      dispatch({
        type: ERROR_PLACES,
        payload: error,
      });
    }
  };

// set loading to true
export const setLoading = () => {
  return {
    type: LOADING_PLACES,
  };
};
