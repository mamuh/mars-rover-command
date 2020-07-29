import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deployRovers, resetRovers } from '../actions';

const Deploy = () => {
  const dispatch = useDispatch()
  const plateauX = useSelector(state => state.plateauX)
  const plateauY = useSelector(state => state.plateauY)
  const rovers = useSelector(state => state.rovers)
  const parsedRovers = []
  rovers.map(rover => parsedRovers.push(Object.assign({}, { start: rover.start }, { movements: rover.movements })))

  const plateauAndRoversObj = {
    "plateau": {
      "x": plateauX,
      "y": plateauY
    },
    "rovers": parsedRovers
  }

  console.log(plateauAndRoversObj)

  return (
    <button className="deploy-squad" onClick={e => {
        dispatch(resetRovers())
        dispatch(deployRovers(plateauAndRoversObj))
        }
      }>
      <span>Deploy squad </span>
    </button>
  )
}

export default Deploy;
