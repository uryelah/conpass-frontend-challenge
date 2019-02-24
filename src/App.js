import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import * as storage from "redux-storage";

import "./styles/App.css";

// Components

import ClickCatcher from "./components/ClickCatcher";

import store, { engine } from "./store/store";

const App = props => {
  const load = storage.createLoader(engine);
  load(store);
  return (
    <Provider store={store}>
      <ClickCatcher />
    </Provider>
  );
};

export default App;
