import { TOGGLE_TRACK_MOVE } from "./types";

export const toggleTracking = track => {
  return dispatch => {
    dispatch({ type: TOGGLE_TRACK_MOVE, track });
  };
};
