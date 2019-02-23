import React from "react";
import ListItemOption from "./ListItemOption";

function ListItem(props) {
  return (
    <div>
      List Item 1
      <ListItemOption
        text="Delete"
        onClick={() => console.log("delete item")}
      />
      <ListItemOption text="Edit" onClick={() => console.log("edit item")} />
    </div>
  );
}

export default ListItem;
