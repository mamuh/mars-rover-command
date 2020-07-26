import React from 'react'
import { connect, useSelector } from 'react-redux'
import addRover from '../actions'

const AddRover = ({ dispatch }) => {
  let startX
  let startY
  let startDirection
  let movementsArray = []

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addRover({"x": parseInt(startX.value), "y": parseInt(startY.value), "direction": startDirection.value}, movementsArray));
          movementsArray = []
        }}
      >
        <fieldset>
          <h4>SET NEW ROVER</h4>

          x:<input type="number" min="0" ref={node => (startX = node)} />
          y:<input type="number" min="0" ref={node => (startY = node)} />

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
              <input readOnly />
            </div>
            <button type="button" onClick={() => movementsArray.push("L")}>Left</button>
            <button type="button" onClick={() => movementsArray.push("R")}>Right</button>
            <button type="button" onClick={() => movementsArray.push("M")}>Move</button>
          </label>

          <br /> <br />
          <button type="submit">Add Rover</button>
        </fieldset>
      </form>
    </div>
  )
}

export default connect()(AddRover)
