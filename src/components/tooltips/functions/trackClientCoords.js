import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const track = props => {
  let appRoot = document.getElementById("root");
  if (props.tracking) {
    appRoot.addEventListener("mousemove", e => {
      console.log(e);
    });
  } else {
    appRoot.removeEventListener("mousemove", e => {
      console.log(e);
    });
  }
  return <script />;
};

ToolTipForm.propTypes = {
  tooltips: PropTypes.array.isRequired,
  tracking: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tracking: state.trackMouseMove.tracking
});

export default connect(mapStateToProps)(track);
