import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const SetPlateau = (props) => {
  return (
    <div className="set-plateau">
      <fieldset>
        <legend>1 - Set plateau size</legend>
        <label>x:
          <input type="number" min="0" id="x-coord" name="x-coord" />
        </label>

        <label>y:
          <input type="number" min="0" id="y-coord" name="y-coord" />
        </label>
      </fieldset>
    </div>
  );
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectCity }, dispatch);
// }

export default SetPlateau;
