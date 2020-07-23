import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MovesDisplay extends Component {

  render() {
    return (
      <div className="moves-display">
        L, M, R
      </div>
    );
  }

};

export default MovesDisplay;
