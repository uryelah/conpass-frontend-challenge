import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { unSetHotspot } from "../../store/actions/trackingActions";
import ListItem from "../dashboard/ListItem";
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
    props.description ? props.description : ""
  );

  let [cX, setcX] = useState("");
  let [cY, setcY] = useState("");
  let [arrowDir, setArrowDir] = useState("form-pointer");
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
        : formWidth + coords.x > clicker.clientWidth ||
          coords.x - formWidth / 2 < 0
        ? coords.y - 25
        : coords.y + 40,
    left:
      formWidth + coords.x > clicker.clientWidth
        ? coords.x - formWidth - 50
        : coords.x - formWidth / 2 < 0
        ? coords.x + 50
        : coords.x - formWidth / 2 - 5,
    maxWidth: `${formWidth}px`,
    maxHeight: `${formHeight}px`
  };

  function cancel(e) {
    e.preventDefault();
    unSetHotspot();
  }

  useEffect(() => {
    if (formHeight + coords.y > clicker.clientHeight) {
      setArrowDir("form-pointer_down");
    }
    if (formWidth + coords.x > clicker.clientWidth) {
      setArrowDir("form-pointer_right");
    }
    if (coords.x - formWidth / 2 < 0) {
      setArrowDir("form-pointer_left");
    }
  }, []);

  useEffect(() => {
    if (set) {
      let text = { title };
      document
        .getElementById("temp-hotspotItem")
        .classList.add("temp-hot-height");
    }
  }, [title, description]);

  return (
    <React.Fragment>
      {!set && !setted ? null : (
        <div
          className="form-container"
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
            <div className={arrowDir} />
            <div id={arrowDir}>
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
                    document
                      .getElementById("temp-hotspotItem")
                      .classList.remove("temp-hot-height");
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
