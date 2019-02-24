import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Dashboard from "./dashboard/Dashboard";
import ToolTipForm from "./tooltips/ToolTipForm";
import HotsportPointer from "./tooltips/HotsportPointer";

function ClickCatcher(props) {
  const { tracking } = props;
  let [x, setX] = useState(null);
  let [y, setY] = useState(null);

  useEffect(() => console.log(x, y), [tracking]);

  return (
    <div id="click-catcher" className={tracking ? "cursor-none" : ""}>
      {props.tooltips.map((item, i) => (
        <HotsportPointer x={x} y={y} />
      ))}
      <Navbar />
      <Dashboard />
      <ToolTipForm />
    </div>
  );
}

ClickCatcher.propTypes = {
  tracking: PropTypes.bool.isRequired,
  tooltips: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tracking: state.trackMouseMove.tracking,
  tooltips: state.tooltips
});

export default connect(mapStateToProps)(ClickCatcher);
