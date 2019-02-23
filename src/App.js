import React, { Component } from "react";
import "./styles/App.css";

// Components
import Navbar from "./components/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ClickCatcher from "./components/ClickCatcher";

class App extends Component {
  render() {
    return (
      <div>
        <ClickCatcher />
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
