import {
  ADD_TOOLTIP,
  REMOVE_TOOLTIP,
  REMOVE_TOOLTIPS,
  EDIT_TOOLTIP,
  DISABLE_TOOLTIP,
  ENABLE_TOOLTIP,
  EDIT_ON
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

export const editOn = (tooltips, tooltipId, toggle) => {
  let newTooltips = tooltips.map(tooltip => {
    if (tooltip.id === tooltipId) {
      return { ...tooltip, edit: toggle };
    } else {
      return tooltip;
    }
  });
  return async dispatch => {
    dispatch({
      type: EDIT_ON,
      payload: [...newTooltips]
    });
  };
};

export const editTooltip = (tooltips, editedTooltip, tooltipId) => {
  let newTooltips = tooltips.map(tooltip => {
    if (tooltip.id === tooltipId) {
      return { ...tooltip, ...editedTooltip, edit: false };
    } else {
      return tooltip;
    }
  });
  return async dispatch => {
    dispatch({
      type: EDIT_ON,
      payload: [...newTooltips]
    });
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

export const removeTooltips = tooltips => {
  let newTooltips = [];
  return dispatch => {
    dispatch({
      type: REMOVE_TOOLTIPS,
      payload: [...newTooltips]
    });
  };
};
