import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Dashboard from "./dashboard/Dashboard";
import HotsportPointer from "./tooltips/HotsportPointer";
import ToolTipForm from "./tooltips/ToolTipForm";
import XYCapture from "./XYCapture";
import { toggleTracking, setHotspot } from "../store/actions/trackingActions";
import { addTooltip } from "../store/actions/toolTipActions";

function ClickCatcher(props) {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let coords;
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

  if (!tracking && set) {
    coords = JSON.parse(localStorage.getItem("coords"));
  }

  useEffect(() => setHotspot, [tracking === true]);
  useEffect(() => console.log(localStorage.getItem("myCat"), [tracking]));

  return (
    <div id="click-catcher" className={""} style={{ position: "relative" }}>
      <Navbar />
      {tracking ? <XYCapture tracking={tracking} /> : null}
      {!tracking && set ? <ToolTipForm coords={coords} /> : null}
      <Dashboard />
      {props.tooltips.map((item, i) => (
        <div
          className="ops"
          key={item.id}
          style={{
            position: "absolute",
            top: `${item.cY}px`,
            left: `${item.cX}px`
          }}
        >
          id={item.id}
          title={item.title}
          description={item.description}
        </div>
      ))}
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
