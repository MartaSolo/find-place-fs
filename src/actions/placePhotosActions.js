import {
  GET_PLACE_PHOTOS,
  LOADING_PLACE_PHOTOS,
  ERROR_PLACE_PHOTOS,
} from "./types";

export const getPlacePhotos = (id) => async (dispatch) => {
  try {
    setLoading();
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "fsq38M6RZ+WMYi+Hu6J2YI/4DFBOSH2B23GvWzzNq0NsTpA=",
      },
    };
    const response = await fetch(
      `https://api.foursquare.com/v3/places/${id}/photos`,
      options
    );
    const data = await response.json();
    dispatch({
      type: GET_PLACE_PHOTOS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PLACE_PHOTOS,
      payload: error,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: LOADING_PLACE_PHOTOS,
  };
};
