import { TOGGLE_TRACK_MOVE, SET_HOTSPOT } from "./types";

export function toggleTracking(track) {
  return dispatch => {
    dispatch({ type: TOGGLE_TRACK_MOVE, track });
  };
}

export function setHotspot(set) {
  return dispatch => {
    dispatch({ type: SET_HOTSPOT, set });
  };
}
