import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setHotspot } from "../../store/actions/trackingActions";
import { addTooltip } from "../../store/actions/toolTipActions";

function ToolTipForm(props) {
  let [id, setId] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [cX, setcX] = useState("");
  let [cY, setcY] = useState("");
  const { set, setHotspot, addTooltip, x, y } = props;

  let newToolTip = {
    id,
    title,
    description,
    cX: x,
    cY: y
  };

  return (
    <div>
      {!set ? null : (
        <form
          onSubmit={e => {
            e.preventDefault();
            addTooltip(newToolTip).then(setHotspot);
          }}
        >
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
          <button>Create new Hotspot</button>
        </form>
      )}
    </div>
  );
}

ToolTipForm.propTypes = {
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
  setHotspot,
  addTooltip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolTipForm);
