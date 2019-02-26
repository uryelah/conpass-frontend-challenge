import React from "react";
import Button from "./Button";
import ListTable from "./ListTable";

function Dashboard() {
  return (
    <div id="dashboard">
      <div style={{ alignSelf: "center" }}>
        <Button text="Create Hotspot" onClick={() => console.log("clicked")} />
      </div>
      <div style={{ alignSelf: "center" }}>
        <ListTable />
      </div>
    </div>
  );
}

export default Dashboard;
