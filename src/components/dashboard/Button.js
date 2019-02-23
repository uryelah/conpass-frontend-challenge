import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTracking } from "../../store/actions/trackingActions";

function Button(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.toggleTracking();
          console.log(props);
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

Button.propTypes = {
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
)(Button);
