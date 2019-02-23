import React from "react";
import ListItemOption from "./ListItemOption";

function ListItem(props) {
  return (
    <div>
      List Item
      <ListItemOption text="Delete" onClick={() => console.log(props)} />
      <ListItemOption text="Edit" onClick={() => console.log("edit item")} />
    </div>
  );
}

export default ListItem;
