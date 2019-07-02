import React from 'react';
import { connect } from 'react-redux';

import * as numberActions from '../store/numbers-actions.js';

class Numbers extends React.Component {
  render() {
    return(
      <>
        <div onClick>{this.props.number.currentNumber}</div>
        <div onClick={this.props.resetNumber}>Reset Number</div>
      </>
    );
  }
} 

const mapStateToProps = state => ({
  number: state.numbers,
});

const mapDispatchToProps = (dispatch, getState) => ({
  resetNumber: () => dispatch(numberActions.numberReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Numbers);