import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlateauSizeX, setPlateauSizeY } from '../actions';

const SetPlateau = (props) => {
  const dispatch = useDispatch()

  return (
    <div className="set-plateau">
      <fieldset>
        <h4>SET PLATEAU SIZE</h4>
        <label>x:
          <input type="number" min="1" id="x-coord" name="x-coord" onChange={(event) => dispatch(setPlateauSizeX(event))} />
        </label>

        <label>y:
          <input type="number" min="1" id="y-coord" name="y-coord" onChange={(event) => dispatch(setPlateauSizeY(event))} />
        </label>
      </fieldset>
    </div>
  );
};

// const mapStateToProps = state => ({
//   plateauX: state.plateauX,
//   plateauY: state.plateauY
// });

// const mapDispatchToProps = () => {
//   return {
//     setPlateauSizeX, setPlateauSizeY
//   };
// };

export default SetPlateau;
