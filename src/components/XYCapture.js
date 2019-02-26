import React, { useState, useEffect, use } from "react";
import HotsportPointer from "./tooltips/HotsportPointer";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTracking, setHotspot } from "../store/actions/trackingActions";
import { addTooltip } from "../store/actions/toolTipActions";

function XYCapture(props) {
  const { tracking } = props;
  let clicker = document.getElementById("click-catcher");
  let [y, setY] = useState(0);
  let [x, setX] = useState(0);
  let [target, setTarget] = useState({ type: Object });
  let prevElement = document.getElementsByClassName("hotspot-pointer")[0];

  let followMouse = async e => {
    e.stopPropagation();
    let eX = e.clientX;
    let eY = e.clientY;
    let curElement = prevElement;
    // prettier-ignore
    if (e.target) {
        if (document.elementsFromPoint(eX, eY)[1] !== prevElement) {
          document.elementsFromPoint(eX, eY)[1].style.boxShadow = "inset 0 0 0 500px rgba(255, 0, 0, 0.2)";
          document.elementsFromPoint(eX, eY)[1].style.border = "2px solid red";
          if (prevElement && prevElement.className !== "hotspot-pointer") {
            prevElement.style.boxShadow = "none";
            prevElement.style.border = "none";
          }
          prevElement = document.elementsFromPoint(eX, eY)[1];
          curElement = prevElement;
        }
    }

    if (clicker) {
      try {
        await setX(e.clientX);
        await setY(e.clientY);
        await setTarget(curElement);
      } catch {
        setX.unsubscribe();
        setY.unsubscribe();
        return false;
      }
    }
  };

  const stop = e => {
    prevElement.style.boxShadow = "none";
    prevElement.style.border = "none";
    document
      .getElementById("click-catcher")
      .removeEventListener("mousemove", followMouse);
  };

  if (clicker) {
    clicker.addEventListener("mousemove", followMouse);
    clicker.addEventListener("mousedown", stop);
  } else {
    clicker.removeEventListener("mousemove", followMouse);
  }

  let newToolTip = {
    id: "",
    title: "",
    description: "",
    cX: x - 25,
    cY: y - 25
  };

  localStorage.setItem(
    "coords",
    JSON.stringify({
      x: x,
      y: y,
      targetTag: `${target.localName}`,
      targetClassName: `${target.className}`,
      targetId: `${target.id}`
    })
  );
  useEffect(() => {
    // unsubscribe
    return () => {
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
  tracking: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tooltips: state.tooltips,
  tracking: state.trackMouseMove.tracking
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
