import React from "react";

function Hotspot(props) {
  const { id, style, onMouseOver, onMouseOut, onMouseDown, onMouseUp } = props;

  return (
    <div
      id={id}
      className={`hotspot ${id}`}
      style={style}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
}

export default Hotspot;
