import {
  TOGGLE_TRACK_MOVE,
  SET_HOTSPOT,
  UNSET_HOTSPOT
} from "../actions/types";
const initialState = { tracking: false, set: false };

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
    default:
      return state;
  }
}
