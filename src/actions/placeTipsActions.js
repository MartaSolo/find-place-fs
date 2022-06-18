import { GET_PLACE_TIPS, LOADING_PLACE_TIPS, ERROR_PLACE_TIPS } from "./types";

export const getPlaceTips = (id) => async (dispatch) => {
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
      `https://api.foursquare.com/v3/places/${id}/tips?limit=50`,
      options
    );
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);
    dispatch({
      type: GET_PLACE_TIPS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PLACE_TIPS,
      payload: error,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: LOADING_PLACE_TIPS,
  };
};
