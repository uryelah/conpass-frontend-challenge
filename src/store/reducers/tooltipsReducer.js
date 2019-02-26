import {
  ADD_TOOLTIP,
  REMOVE_TOOLTIP,
  EDIT_TOOLTIP,
  EDIT_ON,
  DISABLE_TOOLTIP,
  ENABLE_TOOLTIP
} from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TOOLTIP:
      return [action.payload, ...state];
    case EDIT_ON:
      return [...action.payload];
    case EDIT_TOOLTIP:
      return [...state, action.payload];
    case REMOVE_TOOLTIP:
      return [...action.payload];
    default:
      return state;
  }
}
