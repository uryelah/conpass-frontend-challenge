import React, { useState, useEffect } from "react";
import ListTitle from "./ListTitle";
import ListItem from "./ListItem";

function ListTable() {
  let [hotspotItems, sethotspotItems] = useState([]);

  const addItem = () => {
    sethotspotItems([...hotspotItems, {}, {}]);
  };

  useEffect(addItem, []);

  const listItems = hotspotItems => {
    return hotspotItems.map((item, i) => <ListItem key={i}>item</ListItem>);
  };

  return <div>{listItems(hotspotItems)}</div>;
}

export default ListTable;
