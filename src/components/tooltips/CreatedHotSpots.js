import React, { useState, useEffect } from "react";
import ToolTipForm from "./ToolTipForm";
import HotSpot from "./Hotspot";

function CreatedHotSpots(props) {
  const { item } = props;
  let rootHeight = document.getElementById("root").clientHeight;
  let rootWidth = document.getElementById("root").clientWidth;

  let [hover, setHover] = useState(false);
  let clicker = document.getElementById("click-catcher");
  let [x, setX] = useState(item.cX);
  let [y, setY] = useState(item.cY);
  let [mouseDown, setMouseDown] = useState(false);
  let [mouseUp, setMouseUp] = useState(true);

  const hotSpotHover = () => {
    setHover(true);
  };

  const hotSpotOut = () => {
    setHover(false);
  };

  let display = hover | item.edit ? "block" : "none";

  let hotspotStyle = {
    position: "absolute",
    top: `${item.edit ? y - 25 : item.percentageTop * rootHeight - 25}px`,
    left: `${item.edit ? x - 25 : item.percentageLeft * rootWidth - 25}px`
  };

  function followPress(e) {
    if (mouseDown) {
      console.log(mouseDown);
    }

    setX(e.clientX);
    setY(e.clientY);
  }

  window.addEventListener("resize", e => {
    window.location.href = "/";
  });

  function stopPlace() {
    if (item.edit && item.id) {
      clicker.removeEventListener("mousemove", followPress);
    }
  }
  useEffect(() => {
    if (item.edit && mouseDown) {
      //clicker.addEventListener("mousemove", followPress);
    } else {
      clicker.removeEventListener("mousemove", followPress);
    }
  }, [false]);

  if (item.edit && document.getElementById(item.id)) {
    document.getElementById(item.id).addEventListener("mousedown", () => {
      clicker.addEventListener("mousemove", e => followPress(e));
      console.log("it");
    });
  }

  return (
    <React.Fragment key={item.id}>
      <HotSpot
        id={item.id}
        style={hotspotStyle}
        onMouseOver={() => hotSpotHover()}
        onMouseOut={() => hotSpotOut()}
        onMouseDown={() => {
          setMouseDown(true);
          setMouseUp(false);
        }}
        onMouseUp={() => {
          setMouseDown(false);
          setMouseUp(true);
        }}
      />
      <ToolTipForm
        display={display}
        onMouseOver={() => hotSpotHover()}
        onMouseOut={() => hotSpotOut()}
        setted={true}
        title={item.title}
        description={item.description}
        coords={{
          x: item.cX,
          y: item.cY,
          targetTag: item.targetTag,
          targetClassName: item.targetClassName,
          targetId: item.targetId,
          thisId: item.id,
          edit: item.edit,
          messageBtn: item.edit ? "Update Hotspot" : "Create Hotspot"
        }}
      />
    </React.Fragment>
  );
}

export default CreatedHotSpots;
