import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {incrementCount} from '../../actions/countIncrementActions';


const mapStateToProps = (state) => {
  return {
    count: state.incrementCountReducer.count
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    incrementCount: (count) => dispatch(incrementCount(count))
  }
}

class Counter extends Component {
  incrementCount = (count) => {
    count = 5;
    this.props.incrementCount(count);
  }

  render() {
    return (
      <div>
        <h1>meow desu {this.props.count}</h1>
        <button onClick={this.incrementCount}>lul</button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
}

export default connect(mapStateToProps,mapDispatchtoProps)(Counter);
