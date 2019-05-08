import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { incrementCount, resetCount } from "../../actions/countActions";
import CounterApp from "../CounterApp";

const mapStateToProps = state => {
  return {
    count: state.countReducer.count
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    incrementCount: count => dispatch(incrementCount(count)),
    resetCount: () => dispatch(resetCount())
  };
};

class Counter extends Component {
  incrementCount = count => {
    count = 5;
    this.props.incrementCount(count);
  };

  render() {
    return (
      <CounterApp
        incrementCount={this.incrementCount}
        count={this.props.count}
        resetCount={this.props.resetCount}
      />
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  resetCount: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Counter);
