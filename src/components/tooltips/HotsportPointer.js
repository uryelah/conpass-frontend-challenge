import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTracking } from "../../store/actions/trackingActions";

function HotsportPointer(props) {
  const { x, y } = props;
  let [X, setX] = useState(x);
  let [Y, setY] = useState(y);
  let [positioned, setPositioned] = useState(false);
  let styles = {
    top: Y - 25,
    left: X - 25
  };

  const followMouse = e => {
    setX(e.clientX);
    setY(e.clientY);
  };
  if (!positioned) {
    document.getElementById("click-catcher").addEventListener("click", e => {
      setPositioned(true);
      //props.toggleTracking();
      document
        .getElementById("click-catcher")
        .removeEventListener("mousemove", followMouse);
      //document.getElementById("click-catcher").style.zIndex = "-1";
    });
  }

  useEffect(() => {
    document
      .getElementById("click-catcher")
      .addEventListener("mousemove", followMouse);
    if (positioned) {
      document
        .getElementById("click-catcher")
        .removeEventListener("mousemove", followMouse);
    }
  }, [positioned]);

  useEffect(() => console.log(x), [props.x]);
  return <div className="hotspot-pointer" style={styles} />;
}

HotsportPointer.propTypes = {
  tracking: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tracking: state.trackMouseMove.tracking
});

const mapDispatchToProps = {
  toggleTracking
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotsportPointer);
