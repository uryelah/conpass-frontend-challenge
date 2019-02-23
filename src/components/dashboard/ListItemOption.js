import React from "react";

function ListItemOption(props) {
  return (
    <a href="#" onClick={props.onClick}>
      {props.text}
    </a>
  );
}

export default ListItemOption;
