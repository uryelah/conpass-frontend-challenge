import { combineReducers } from "redux";
import trackMoveReducer from "./trackMoveReducer";
import tooltipsReducer from "./tooltipsReducer";

export default combineReducers({
  trackMouseMove: trackMoveReducer,
  tooltips: tooltipsReducer
});
