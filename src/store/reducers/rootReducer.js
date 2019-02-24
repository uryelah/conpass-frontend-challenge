import { combineReducers } from "redux";
import trackMoveReducer from "./trackMoveReducer";
import tooltipsReducer from "./tooltipsReducer";
import * as storage from "redux-storage";

export default storage.reducer(
  combineReducers({
    trackMouseMove: trackMoveReducer,
    tooltips: tooltipsReducer
  })
);
