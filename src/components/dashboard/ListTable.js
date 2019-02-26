import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ListTitle from "./ListTitle";
import ListItem from "./ListItem";

function ListTable(props) {
  const { set } = props;
  useEffect(
    () =>
      document
        .getElementById("temp-hotspotItem")
        .classList.remove("temp-hot-height"),
    [set === false]
  );

  //const listItems = hotspotItems => {
  //  return hotspotItems.map((item, i) => <ListItem key={i}>item</ListItem>);
  //};

  return (
    <div id="list-container">
      <ListTitle title="List of hotspots" />
      <div id="temp-hotspotItem" />
      {props.tooltips.map((item, i) => (
        <ListItem
          key={item.id}
          thisId={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

ListTable.propTypes = {
  tooltips: PropTypes.array.isRequired,
  set: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  tooltips: state.tooltips,
  set: state.trackMouseMove.set
});

export default connect(mapStateToProps)(ListTable);
