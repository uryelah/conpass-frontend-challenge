import {
  ADD_TOOLTIP,
  REMOVE_TOOLTIP,
  EDIT_TOOLTIP,
  DISABLE_TOOLTIP,
  ENABLE_TOOLTIP
} from "./types";

const uuidv1 = require("uuid/v1");

export const addTooltip = newTooltip => {
  let id;
  const generateId = async () => {
    id = await uuidv1();
  };
  return async dispatch => {
    await generateId();
    dispatch({ type: ADD_TOOLTIP, payload: { ...newTooltip, id } });
  };
};

export const removeTooltip = (tooltips, tooltipId) => {
  let newTooltips = tooltips.filter(tooltip => {
    return tooltip.id !== tooltipId;
  });

  return dispatch => {
    dispatch({
      type: REMOVE_TOOLTIP,
      payload: tooltips.filter(tooltip => {
        return tooltip.id !== tooltipId;
      })
    });
  };
};
