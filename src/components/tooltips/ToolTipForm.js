import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTooltip } from "../../store/actions/toolTipActions";

function ToolTipForm(props) {
  let [id, setId] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [cX, setcX] = useState("");
  let [cY, setcY] = useState("");
  const { tracking } = props;

  const newToolTip = {
    id,
    title,
    description,
    cX,
    cY
  };

  return (
    <div>
      {!tracking ? null : (
        <form>
          NEWTOOLTIP FORM
          <input
            type="text"
            name="title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            name="description"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={e => {
              e.preventDefault();
              props.addTooltip(newToolTip);
            }}
          >
            Create new Hotspot
          </button>
        </form>
      )}
    </div>
  );
}

ToolTipForm.propTypes = {
  tooltips: PropTypes.array.isRequired,
  tracking: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tooltips: state.tooltips,
  tracking: state.trackMouseMove.tracking
});

const mapDispatchToProps = {
  addTooltip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolTipForm);
