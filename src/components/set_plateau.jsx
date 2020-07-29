import React from 'react';
import { useDispatch } from 'react-redux';
import { setPlateauSizeX, setPlateauSizeY } from '../actions';

const SetPlateau = (props) => {
  const dispatch = useDispatch()

  return (
    <div className="set-plateau div">
      <h4>SET PLATEAU SIZE</h4>
      <label>width</label>
      <input type="range" defaultValue="0" min="1" max="10" id="x-coord" name="x-coord" onChange={(event) => dispatch(setPlateauSizeX(event))} />
      <br />
      <label>height</label>
      <input type="range" defaultValue="0" min="1" max="10" id="y-coord" name="y-coord" onChange={(event) => dispatch(setPlateauSizeY(event))} />
    </div>
  );
};

export default SetPlateau;
