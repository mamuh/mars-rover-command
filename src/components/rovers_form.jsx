import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Field, reduxForm } from 'redux-form'

const onSubmit = values => {
  console.log(values)
}

let RoversForm = ({handleSubmit}) => {
    // const { handleSubmit } = props
    return (

      <form onSubmit={handleSubmit}>

      <legend>2 - New Rover</legend>
        <div>
          Start position:
          <label htmlFor="start-x">x:</label>
            <Field name="start-x" component="input" type="number" />

          <label htmlFor="start-y">y:</label>
            <Field name="start-y" component="input" type="number" />
        </div>

        <br />

        <div>
          <label htmlFor="direction">Direction</label>
          <Field name="direction" component="select">
            <option></option>
            <option value="N">North</option>
            <option value="S">South</option>
            <option value="E">East</option>
            <option value="W">West</option>
          </Field>
        </div>

        <br />

        <div>
          <label htmlFor="movements">Movements</label>
          <div>
            <input type="text" placeholder="L, M, R" />
          </div>
          <button>Left</button>
          <button>Right</button>
          <button>Move</button>
        </div>

        <br />

        <button type="submit">Add Rover</button>

      </form>

    );

}

export default reduxForm({
  form: 'rovers',
  onSubmit
})(RoversForm)

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => {
//   return {
//     addRover: (start, movements) => dispatch({ type: 'ADD_ROVER', start: {"x": 1, "y": 2, "direction": "N"}, movements: ["L", "R"] }),
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setRoverInitialX: (id) => { dispatch({ type: 'ROVER_INITIAL_X', id: id }) }
//   }
// };

// export default connect(
//   null,
//   mapDispatchToProps()
// )(RoversForm);

// export default RoversForm
