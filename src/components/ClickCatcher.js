import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Dashboard from "./dashboard/Dashboard";
import HotsportPointer from "./tooltips/HotsportPointer";
import XYCapture from "./XYCapture";
import { toggleTracking, setHotspot } from "../store/actions/trackingActions";
import { addTooltip } from "../store/actions/toolTipActions";

function ClickCatcher(props) {
  const {
    tracking,
    toggleTracking,
    addTooltip,
    setHotspot,
    set,
    tooltips
  } = props;

  if (tracking) {
    document
      .getElementById("click-catcher")
      .addEventListener("click", toggleTracking);
  } else if (document.getElementById("click-catcher")) {
    document
      .getElementById("click-catcher")
      .removeEventListener("click", toggleTracking);
  }

  useEffect(
    function() {
      return console.log("un/track");
    },
    [tracking]
  );

  return (
    <div id="click-catcher" className={""}>
      <Navbar />
      {tooltips.map(tooltip => {
        <h1>tooltip</h1>;
      })}
      {tracking ? <XYCapture tracking={tracking} /> : null}
      <Dashboard />
    </div>
  );
}

ClickCatcher.propTypes = {
  tracking: PropTypes.bool.isRequired,
  tooltips: PropTypes.array.isRequired,
  set: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tracking: state.trackMouseMove.tracking,
  tooltips: state.tooltips,
  set: state.trackMouseMove.set
});

const mapDispatchToProps = {
  toggleTracking,
  setHotspot,
  addTooltip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClickCatcher);
