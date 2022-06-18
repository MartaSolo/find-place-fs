import {
  GET_PLACE_EXTENDED,
  LOADING_PLACE_EXTENDED,
  ERROR_PLACE_EXTENDED,
} from "./types";

export const getPlaceExtended = (id) => async (dispatch) => {
  const Poi_id = id;
  try {
    setLoading();
    const response = await fetch(
      `https://api.tomtom.com/search/2/poiDetails.json?key=${process.env.REACT_APP_TOMTOM_API_KEY}&id=${Poi_id}`
    );
    const data = await response.json();
    dispatch({
      type: GET_PLACE_EXTENDED,
      payload: data.result,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PLACE_EXTENDED,
      payload: error,
    });
  }
};

export const setLoading = () => {
  return {
    type: LOADING_PLACE_EXTENDED,
  };
};
