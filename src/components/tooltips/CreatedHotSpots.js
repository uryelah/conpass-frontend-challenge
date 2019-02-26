import React, { useState, useEffect } from "react";
import ToolTipForm from "./ToolTipForm";
import HotSpot from "./Hotspot";

function CreatedHotSpots(props) {
  const { item } = props;
  let [hover, setHover] = useState(false);
  let clicker = document.getElementById("click-catcher");
  let [x, setX] = useState(item.cX);
  let [xx, setXX] = useState(0);
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
    top: `${item.edit ? y - 25 : item.cY - 25}px`,
    left: `${item.edit ? x - 25 : item.cX - 25}px`
  };

  const dragStart = (e, id) => {
    e.persist();
    e.dataTransfer.setData("id", id);
    setXX(props.xx);
    if (props.xx) {
      hotspotStyle.left = `${xx - 25}px`;
      console.log(xx);
    }
  };

  const dragStart2 = (e, id) => {
    e.persist();
    //e.dataTransfer.setData("id", id);
    setXX(props.xx);
    console.log(xx);
  };

  const dragOn = (e, id) => {
    e.persist();
    console.log("drag on", e.screenX, e.screenY);
    setX(e.clientX);
    setY(e.clientY);
  };

  function followPress(e) {
    if (mouseDown) {
      console.log(mouseDown);
    }

    setX(e.clientX);
    setY(e.clientY);
  }

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
      <HotSpot />
      <div
        draggable
        onDragStart={e => dragStart(e, item.id)}
        onDragCapture={e => dragStart2(e, item.id)}
        onDragOver={e => dragOn(e)}
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
        className={`hotspot ${item.id}`}
        id={item.id}
        style={hotspotStyle}
      />
      <HotSpot id={item.id} />
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
