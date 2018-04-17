import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppState from "./state";
import Overview from "./views/Overview";
import BackendCondition from "./BackendCondition";

export const store = createStore<AppState>();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BackendCondition />
        <Router>
          <Route path="/" component={Overview} />
        </Router>
      </Provider>
    );
  }
}

export default Root;
