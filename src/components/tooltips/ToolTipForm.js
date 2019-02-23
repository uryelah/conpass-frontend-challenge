import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTooltip } from "../../store/actions/toolTipActions";

function ToolTipForm(props) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [cX, setcX] = useState("");
  let [cY, setcY] = useState("");

  const newToolTip = {
    title,
    description,
    cX,
    cY
  };

  return (
    <div>
      <form>
        NEWTOOLTIP FORM
        <button
          onClick={e => {
            e.preventDefault();
            props.addTooltip(newToolTip);
          }}
        >
          Create new Hotspot
        </button>
      </form>
    </div>
  );
}

ToolTipForm.propTypes = {
  tooltips: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tooltips: state.tooltips
});

const mapDispatchToProps = {
  addTooltip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolTipForm);
