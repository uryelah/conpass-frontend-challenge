import { TOGGLE_TRACK_MOVE } from "../actions/types";
const initialState = { tracking: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TRACK_MOVE:
      return Object.assign({}, state, {
        tracking: !state.tracking
      });
    default:
      return state;
  }
}
