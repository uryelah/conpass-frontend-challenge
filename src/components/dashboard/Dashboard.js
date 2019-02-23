import React from "react";
import Button from "./Button";
import ListTable from "./ListTable";

function Dashboard() {
  return (
    <div>
      <Button text="Create Hotspot" onClick={() => console.log("clicked")} />
      <ListTable />
    </div>
  );
}

export default Dashboard;
