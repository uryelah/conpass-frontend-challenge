import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTracking } from "../../store/actions/trackingActions";

function Button(props) {
  let [track, toggleTrack] = useState(props.track);

  return (
    <div>
      <button onClick={() => props.toggleTracking(props.track)}>
        {props.text}
      </button>
    </div>
  );
}

Button.propTypes = {
  track: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  track: state.track
});

const mapDispatchToProps = {
  toggleTracking
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
