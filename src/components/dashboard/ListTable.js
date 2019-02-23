import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ListTitle from "./ListTitle";
import ListItem from "./ListItem";

function ListTable(props) {
  useEffect(() => console.log(props.tooltips), [props.tooltips]);

  //const listItems = hotspotItems => {
  //  return hotspotItems.map((item, i) => <ListItem key={i}>item</ListItem>);
  //};

  return (
    <div>
      {props.tooltips.map((item, i) => (
        <ListItem key={i} />
      ))}
    </div>
  );
}

ListTable.propTypes = {
  tooltips: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tooltips: state.tooltips
});

export default connect(mapStateToProps)(ListTable);
