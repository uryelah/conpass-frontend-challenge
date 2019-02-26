import {
  TOGGLE_TRACK_MOVE,
  SET_HOTSPOT,
  UNSET_HOTSPOT,
  DISABLE_HOTSPOTS,
  ENABLE_HOTSPOTS
} from "./types";

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

export function unSetHotspot(set) {
  return dispatch => {
    dispatch({ type: UNSET_HOTSPOT, set });
  };
}

export function disableHotspots(seeHotspots) {
  return dispatch => {
    dispatch({ type: DISABLE_HOTSPOTS, seeHotspots });
  };
}

export function enableHotspots(seeHotspots) {
  return dispatch => {
    dispatch({ type: ENABLE_HOTSPOTS, seeHotspots });
  };
}
