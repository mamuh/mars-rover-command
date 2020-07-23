import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const SetPlateau = (props) => {
  return (
    <div className="set-plateau">
      <fieldset>
        <legend>1 - Set plateau size</legend>
        <label for="x-coord">x</label>
        <input type="number" min="0" id="x-coord" name="x-coord" />

        <label for="y-coord">y</label>
        <input type="number" min="0" id="y-coord" name="y-coord" />
      </fieldset>
    </div>
  );
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectCity }, dispatch);
// }

export default SetPlateau;
