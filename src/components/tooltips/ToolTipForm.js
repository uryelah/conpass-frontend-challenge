import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { unSetHotspot } from "../../store/actions/trackingActions";
import FormButton from "./FormButtonGroup";
import FormInput from "./FormInput";
import {
  addTooltip,
  editTooltip,
  editOn
} from "../../store/actions/toolTipActions";
import HotsportPointer from "./HotsportPointer";

function ToolTipForm(props) {
  let clicker = document.getElementById("click-catcher");
  const { tooltips, tooltip, onMouseOver, onMouseOut, display } = props;
  let formWidth = 300;
  let formHeight = 125;
  let [id, setId] = useState("");
  let [title, setTitle] = useState(props.title ? `${props.title}` : "");
  let [description, setDescription] = useState(
    props.description ? `${props.description}` : ""
  );
  let [cX, setcX] = useState("");
  let [cY, setcY] = useState("");
  const { set, setted, unSetHotspot, addTooltip, editTooltip, coords } = props;

  let newToolTip = {
    id,
    title,
    description,
    cX: coords.x,
    cY: coords.y,
    targetTag: coords.targetTag,
    targetClassName: coords.targetClassName,
    targetId: coords.targetId,
    edit: false
  };

  let formContainer = {
    zIndex: setted ? "10" : "450",
    display: display
  };

  let formStyle = {
    top:
      formHeight + coords.y > clicker.clientHeight
        ? coords.y - (formHeight - 25)
        : coords.y,
    left:
      formWidth + coords.x > clicker.clientWidth
        ? coords.x - (formWidth - 25)
        : coords.x,
    maxWidth: `${formWidth}px`,
    maxHeight: `${formHeight}px`
  };

  function cancel(e) {
    e.preventDefault();
    unSetHotspot();
  }

  return (
    <React.Fragment>
      {!set && !setted ? null : (
        <div
          style={formContainer}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          <form
            style={formStyle}
            id="form-group"
            onSubmit={e => {
              e.preventDefault();
              coords.edit === true
                ? editTooltip(
                    tooltips,
                    { title: title, description: description },
                    coords.thisId
                  )
                : addTooltip(newToolTip).then(unSetHotspot);
            }}
          >
            <div id="form-input-group">
              <FormInput
                edittable={props.createForm ? true : coords.edit}
                autoFocus="autofocus"
                type="text"
                name="title"
                value={title}
                onChange={e => {
                  !props.title || coords.edit ? setTitle(e.target.value) : null;
                }}
              />
              <FormInput
                edittable={props.createForm ? true : coords.edit}
                autoFocus="autofocus"
                type="text"
                name="description"
                value={description}
                onChange={e => {
                  !props.description || coords.edit
                    ? setDescription(e.target.value)
                    : null;
                }}
              />
            </div>
            {props.createForm ? (
              <div id="form-button-group">
                <FormButton
                  text="Create Hotspot"
                  onClick={e => {
                    console.log("created new Hotspot");
                  }}
                />
                <FormButton
                  text="Cancel"
                  onClick={e => {
                    cancel(e);
                  }}
                />
              </div>
            ) : coords.edit ? (
              <div>
                <button>{coords.messageBtn}</button>
                <button
                  onClick={e => {
                    editOn(tooltips, coords.id, false);
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : null}
          </form>
          {setted ? null : (
            <HotsportPointer x={coords.x} y={coords.y} tooltip={newToolTip} />
          )}
        </div>
      )}
    </React.Fragment>
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
  unSetHotspot,
  addTooltip,
  editTooltip,
  editOn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolTipForm);
