import React from "react";

function HotsportPointer(props) {
  const { x, y } = props;
  let styles = {
    top: y - 25,
    left: x - 25
  };

  return (
    <div>
      <button className="hotspot-pointer" style={styles} />
    </div>
  );
}

export default HotsportPointer;
