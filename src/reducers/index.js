import { combineReducers } from "redux";
import typeReducer from "./typeReducer";
import latlongReducer from "./latlongReducer";
import boundsReducer from "./boundsReducer";
import placesReducer from "./placesReducer";
import placeTipsReducer from "./placeTipsReducer";

export default combineReducers({
  type: typeReducer,
  latLong: latlongReducer,
  bounds: boundsReducer,
  places: placesReducer,
  placeTips: placeTipsReducer,
});
