import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListItemOption from "./ListItemOption";
import { removeTooltip } from "../../store/actions/toolTipActions";
function ListTitle(props) {
  const { tooltips } = props;
  return (
    <div id="list-title-container">
      <h2>{props.title}</h2>
      <button onClick={() => removeTooltip(tooltips)}>delete all</button>
      <ListItemOption
        text="Delete All"
        onClick={removeTooltip(tooltips, "id")}
      />
    </div>
  );
}

ListTitle.propTypes = {
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
)(ListTitle);
