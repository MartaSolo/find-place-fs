import { combineReducers } from "redux";
import typeReducer from "./typeReducer";
import latlongReducer from "./latlongReducer";
import boundsReducer from "./boundsReducer";
import placesReducer from "./placesReducer";
import placeExtendedReducer from "./placeExtendedReducer";

export default combineReducers({
  type: typeReducer,
  latLong: latlongReducer,
  bounds: boundsReducer,
  places: placesReducer,
  placeExtended: placeExtendedReducer,
});
