import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTracking } from "../store/actions/trackingActions";
import { addTooltip } from "../store/actions/toolTipActions";

import ToolTipForm from "./tooltips/ToolTipForm";

function AddHotspot(props) {
  const { tooltip } = props;
  return <ToolTipForm tooltip={tooltip} />;
}

AddHotspot.propTypes = {
  tooltips: PropTypes.array.isRequired,
  tracking: PropTypes.bool.isRequired,
  set: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tooltips: state.tooltips,
  tracking: state.trackMouseMove.tracking,
  set: state.trackMouseMove.set
});

const mapDispatchToProps = {
  toggleTracking,
  addTooltip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHotspot);
