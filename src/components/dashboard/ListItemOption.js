import React from "react";

function ListItemOption(props) {
  return (
    <a className="list-options" href="#" onClick={props.onClick}>
      {props.text}
    </a>
  );
}

export default ListItemOption;
