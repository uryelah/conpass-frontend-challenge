import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTooltip } from "../../store/actions/toolTipActions";

function ToolTipForm() {
  return <div />;
}

ToolTipForm.propTypes = {
  track: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tracking: state.tracking
});

const mapDispatchToProps = {
  addTooltip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolTipForm);

export default ToolTipForm;
