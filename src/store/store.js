import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import createEngine from "redux-storage-engine-localstorage";
import * as storage from "redux-storage";

const initialState = {};

export const engine = createEngine("my-save-key");

const middleware = [thunk, storage.createMiddleware(engine)];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
