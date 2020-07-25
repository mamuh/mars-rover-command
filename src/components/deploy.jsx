import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Deploy = (props) => {
  return (
    <div className="deploy">
      <button>Deploy squad</button>
    </div>
  );
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectCity }, dispatch);
// }

export default Deploy;
