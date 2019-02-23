import {
  ADD_TOOLTIP,
  REMOVE_TOOLTIP,
  EDIT_TOOLTIP,
  DISABLE_TOOLTIP,
  ENABLE_TOOLTIP
} from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TOOLTIP:
      return [...state, action.payload];
    default:
      return state;
  }
}
