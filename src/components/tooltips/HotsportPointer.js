import React, { useState, useEffect } from "react";
import ToolTipForm from "./ToolTipForm";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTracking } from "../../store/actions/trackingActions";
import { addTooltip } from "../../store/actions/toolTipActions";

function HotsportPointer(props) {
  const { x, y, toggleTracking, tracking, set } = props;
  let styles = {
    top: y,
    left: x
  };

  useEffect(() => {
    console.log(x, y);
  }, [props]);

  return (
    <div>
      <div className="hotspot-pointer" style={styles} />
    </div>
  );
}

HotsportPointer.propTypes = {
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
)(HotsportPointer);
