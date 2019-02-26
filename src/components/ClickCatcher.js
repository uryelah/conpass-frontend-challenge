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
import CreatedHotSpots from "./tooltips/CreatedHotSpots";

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
    tooltips,
    seeHotspots
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

  let xx = null;
  let yy = null;

  return (
    <div
      id="click-catcher"
      onDragOver={e => {
        e.persist();
        xx = e.clientX;
        console.log(e);
      }}
      className={""}
      style={{ position: "relative" }}
    >
      <Navbar />
      {tracking ? <XYCapture tracking={tracking} /> : null}
      {!tracking && set ? (
        <ToolTipForm coords={coords} createForm={true} />
      ) : null}
      <Dashboard />
      {seeHotspots
        ? props.tooltips.map((item, i) => (
            <CreatedHotSpots
              item={item}
              key={item.id}
              class={item.id}
              xx={xx}
            />
          ))
        : null}
    </div>
  );
}

ClickCatcher.propTypes = {
  tracking: PropTypes.bool.isRequired,
  tooltips: PropTypes.array.isRequired,
  set: PropTypes.bool.isRequired,
  seeHotspots: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tracking: state.trackMouseMove.tracking,
  tooltips: state.tooltips,
  set: state.trackMouseMove.set,
  seeHotspots: state.trackMouseMove.seeHotspots
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
