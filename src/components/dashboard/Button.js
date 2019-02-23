import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}

export default Button;
