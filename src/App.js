import React, { Component } from "react";
import { Provider } from "react-redux";

import "./styles/App.css";

// Components
import Navbar from "./components/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ClickCatcher from "./components/ClickCatcher";
import ToolTipForm from "./components/tooltips/ToolTipForm";

import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ClickCatcher />
          <Navbar />
          <Dashboard />
          <ToolTipForm />
        </div>
      </Provider>
    );
  }
}

export default App;
