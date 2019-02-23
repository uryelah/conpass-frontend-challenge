import React, { Component } from "react";
import { Provider } from "react-redux";

import "./styles/App.css";

// Components
import Navbar from "./components/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ClickCatcher from "./components/ClickCatcher";

import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ClickCatcher />
          <Navbar />
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
