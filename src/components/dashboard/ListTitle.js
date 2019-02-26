import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListItemOption from "./ListItemOption";
import { removeTooltips } from "../../store/actions/toolTipActions";
import {
  enableHotspots,
  disableHotspots
} from "../../store/actions/trackingActions";

function ListTitle(props) {
  const {
    tooltips,
    removeTooltips,
    enableHotspots,
    disableHotspots,
    seeHotspots
  } = props;

  return (
    <div id="list-title-container">
      <h2>{props.title}</h2>
      <div>
        <ListItemOption
          text={seeHotspots ? "Hide Hotspots" : "Show Hotspots"}
          onClick={() => (seeHotspots ? disableHotspots() : enableHotspots())}
        />
        <ListItemOption
          text="Delete All"
          onClick={() => removeTooltips(tooltips)}
        />
      </div>
    </div>
  );
}

ListTitle.propTypes = {
  tooltips: PropTypes.array.isRequired,
  seeHotspots: PropTypes.bool.isRequired,
  enableHotspots: PropTypes.func.isRequired,
  disableHotspots: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tooltips: state.tooltips,
  seeHotspots: state.trackMouseMove.seeHotspots
});

const mapDispatchToProps = {
  removeTooltips,
  enableHotspots,
  disableHotspots
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTitle);
