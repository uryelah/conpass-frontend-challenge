import React, { useState, useEffect, use } from "react";
import HotsportPointer from "./tooltips/HotsportPointer";

function XYCapture(props) {
  const { tracking } = props;
  let clicker = document.getElementById("click-catcher");

  let [track, setTrack] = useState(true);
  let [y, setY] = useState(0);
  let [x, setX] = useState(0);

  let followMouse = async e => {
    if (track && clicker) {
      try {
        await setX(e.clientX);
        await setY(e.clientY);
        console.log("up");
      } catch {
        setX.unsubscribe();
        setY.unsubscribe();
        return false;
      }
    }
  };

  const stop = e => {
    document
      .getElementById("click-catcher")
      .removeEventListener("mousemove", followMouse);
  };

  if (clicker) {
    if (track) {
      document
        .getElementById("click-catcher")
        .addEventListener("mousemove", followMouse);
      document
        .getElementById("click-catcher")
        .addEventListener("mousedown", stop);
    } else {
      document
        .getElementById("click-catcher")
        .removeEventListener("mousemove", followMouse);
    }
  }

  function add(e) {
    console.log("why");
    newToolTip = {
      id,
      title: "",
      description: "",
      cX: x,
      cY: y
    };
    addTooltip;
  }
  useEffect(() => {
    // unsubscribe
    return () => {
      document
        .getElementById("click-catcher")
        .removeEventListener("mousemove", followMouse);
      return () => {
        null;
      };
    };
  });
  return <HotsportPointer x={x} y={y} />;
}

export default XYCapture;
