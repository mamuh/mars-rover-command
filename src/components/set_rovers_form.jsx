import React from 'react'
import { connect, useSelector } from 'react-redux'
import { addRover } from '../actions'

const AddRover = ({ dispatch }) => {
  let startX
  let startY
  let startDirection
  let movementsArray = []
  let movesInput
  const maxX = useSelector(state => state.plateauX)
  const maxY = useSelector(state => state.plateauY)

  const addDirection = (direction) => {
    movesInput.value += direction
  }

  return (
    <div className="set-new-rover-div div">
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addRover({"x": parseInt(startX.value), "y": parseInt(startY.value), "direction": startDirection.value}, movementsArray));
          movementsArray = []
          e.target.reset()
        }}
      >

        <h4>SET NEW ROVER</h4>

        x:<input type="number" min="0" max={maxX} ref={node => (startX = node)} />
        <br />
        y:<input type="number" min="0" max={maxY} ref={node => (startY = node)} />
        <br />

        <label>
          Direction:
          <select ref={node => (startDirection = node)}>
            <option></option>
            <option value="N">North</option>
            <option value="S">South</option>
            <option value="E">East</option>
            <option value="W">West</option>
          </select>
        </label>

        <br /> <br />

        <label>
          Movements:
          <div>
            <input ref={node => (movesInput = node)} readOnly />
          </div>
          <button type="button" onClick={(e) => {
              addDirection("L")
              movementsArray.push("L")
            }}>Left
          </button>
          <button type="button" onClick={(e) => {
              addDirection("R")
              movementsArray.push("R")
            }}>Right
          </button>
          <button type="button" onClick={(e) => {
              addDirection("M")
              movementsArray.push("M")
            }}>Move
          </button>

        </label>

        <br /> <br />
        <button type="submit">Add Rover</button>

      </form>
    </div>
  )
}

export default connect()(AddRover)
