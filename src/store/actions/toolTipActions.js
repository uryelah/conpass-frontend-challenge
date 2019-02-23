import {
  ADD_TOOLTIP,
  REMOVE_TOOLTIP,
  EDIT_TOOLTIP,
  DISABLE_TOOLTIP,
  ENABLE_TOOLTIP
} from "./types";

export const addTooltip = newTooltip => {
  return dispatch => {
    dispatch({ type: ADD_TOOLTIP, payload: newTooltip });
  };
};
