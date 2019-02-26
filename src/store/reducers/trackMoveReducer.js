import {
  TOGGLE_TRACK_MOVE,
  SET_HOTSPOT,
  UNSET_HOTSPOT,
  DISABLE_HOTSPOTS,
  ENABLE_HOTSPOTS
} from "../actions/types";
const initialState = { tracking: false, set: false, seeHotspots: true };

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TRACK_MOVE:
      return Object.assign({}, state, {
        tracking: !state.tracking
      });
    case SET_HOTSPOT:
      return Object.assign({}, state, {
        set: true
      });
    case UNSET_HOTSPOT:
      return Object.assign({}, state, {
        set: false
      });
    case DISABLE_HOTSPOTS:
      return Object.assign({}, state, {
        seeHotspots: false
      });
    case ENABLE_HOTSPOTS:
      return Object.assign({}, state, {
        seeHotspots: true
      });
    default:
      return state;
  }
}
