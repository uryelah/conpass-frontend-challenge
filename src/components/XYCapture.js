import React, { useState, useEffect, use } from "react";
import HotsportPointer from "./tooltips/HotsportPointer";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTracking, setHotspot } from "../store/actions/trackingActions";
import { addTooltip } from "../store/actions/toolTipActions";
import AddHotspot from "./AddHotspot";

function XYCapture(props) {
  const { tracking, addTooltip, set } = props;
  let clicker = document.getElementById("click-catcher");
  let hotPointer = document.getElementsByClassName("hotspot-pointer")[0];

  let [track, setTrack] = useState(true);
  let [y, setY] = useState(0);
  let [x, setX] = useState(0);

  let followMouse = async e => {
    if (track && clicker) {
      try {
        await setX(e.clientX);
        await setY(e.clientY);
        console.log("up");
      } catch {
        setX.unsubscribe();
        setY.unsubscribe();
        return false;
      }
    }
  };

  const stop = e => {
    document
      .getElementById("click-catcher")
      .removeEventListener("mousemove", followMouse);
  };

  if (clicker) {
    if (track) {
      clicker.addEventListener("mousemove", followMouse);
      clicker.addEventListener("mousedown", stop);
    } else {
      clicker.removeEventListener("mousemove", followMouse);
    }
  }

  let newToolTip = {
    id: "",
    title: "",
    description: "",
    cX: x - 25,
    cY: y - 25
  };

  useEffect(() => {
    // unsubscribe
    return () => {
      console.log(newToolTip);
      document
        .getElementById("click-catcher")
        .removeEventListener("mousemove", followMouse);
      return () => {
        null;
      };
    };
  }, [tracking]);

  return (
    <div>
      {tracking ? <HotsportPointer x={x} y={y} tooltip={newToolTip} /> : null}
    </div>
  );
}

XYCapture.propTypes = {
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
  addTooltip,
  setHotspot
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XYCapture);
