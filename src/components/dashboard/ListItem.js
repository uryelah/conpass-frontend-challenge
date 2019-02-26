import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  removeTooltip,
  editTooltip,
  editOn
} from "../../store/actions/toolTipActions";

import ListItemOption from "./ListItemOption";

function ListItem(props) {
  const { thisId, removeTooltip, editOn, tooltips, title, description } = props;

  const highLightOn = () => {
    document.getElementsByClassName(thisId)[0].classList.add("highlight");
  };

  const highLightOff = () => {
    document.getElementsByClassName(thisId)[0].classList.remove("highlight");
  };

  useEffect(() => console.log(props), []);
  return (
    <div
      id={thisId}
      onMouseOver={e => highLightOn()}
      onMouseOut={e => highLightOff()}
      className="list-item-container"
    >
      <h3>{title.length > 0 ? title : "Unnamed Hotpsot"}</h3>
      <p>{description}</p>
      <div id="list-item-option-container">
        <ListItemOption
          text="Delete"
          onClick={() => removeTooltip(tooltips, thisId)}
        />
        <ListItemOption
          text="Edit"
          onClick={() => {
            editOn(tooltips, thisId, true);
            console.log(thisId);
          }}
        />
      </div>
    </div>
  );
}

ListItem.propTypes = {
  tooltips: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tooltips: state.tooltips
});

const mapDispatchToProps = {
  removeTooltip,
  editTooltip,
  editOn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
