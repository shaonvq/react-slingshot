/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import Counter from "./containers/CounterPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>meow</h1>
        <Switch>
          <Route exact path="/" component={Counter} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
