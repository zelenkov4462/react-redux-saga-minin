import React from "react";
import ReactDOM from "react-dom/client";
import thunk from "redux-thunk";

import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
