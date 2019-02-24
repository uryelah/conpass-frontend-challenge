import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeTooltip } from "../../store/actions/toolTipActions";

import ListItemOption from "./ListItemOption";

function ListItem(props) {
  useEffect(() => console.log(props), []);
  return (
    <div>
      <p>
        <strong> {props.title} </strong>
      </p>
      <p>{props.description}</p>
      <ListItemOption
        text="Delete"
        onClick={() => props.removeTooltip(props.tooltips, props.id)}
      />
      <ListItemOption text="Edit" onClick={() => console.log("edit item")} />
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
  removeTooltip
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
