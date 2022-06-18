import { GET_PLACES, LOADING_PLACES, ERROR_PLACES } from "./types";

export const getPlaces =
  (
    topLeftLatitude,
    topLeftLongitude,
    btmRightLatitude,
    btmRightLongitude,
    typeOfPlace
  ) =>
  async (dispatch) => {
    const query = typeOfPlace;
    const topLeftLat = String(topLeftLatitude);
    const topLeftLong = String(topLeftLongitude);
    const btmRightLat = String(btmRightLatitude);
    const btmRightLong = String(btmRightLongitude);
    try {
      setLoading();
      const response = await fetch(
        `https://api.tomtom.com/search/2/poiSearch/${query}.json?topLeft=${topLeftLat}%2C${topLeftLong}&btmRight=${btmRightLat}%2C${btmRightLong}&view=Unified&relatedPois=off&key=${process.env.REACT_APP_TOMTOM_API_KEY}`
      );
      const data = await response.json();
      const filteredData = data.results.filter((dataItem) => {
        return dataItem.dataSources !== undefined;
      });
      dispatch({
        type: GET_PLACES,
        payload: filteredData,
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
