import { combineReducers } from "redux";
import trackMoveReducer from "./trackMoveReducer";

export default combineReducers({
  track: trackMoveReducer
});
