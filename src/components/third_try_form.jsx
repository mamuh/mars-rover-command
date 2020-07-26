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
          console.log(movementsArray)
          dispatch(addRover({"x": parseInt(startX.value), "y": parseInt(startY.value), "direction": startDirection.value}, movementsArray));
          movementsArray = []
          startX = ""
          startY = ""
          startDirection = ""
        }}
      >
        x:<input id="x" ref={node => (startX = node)} />
        y:<input ref={node => (startY = node)} />

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

        <br />

        <label>
          Movements:
          <div>
            <input readOnly />
          </div>
          <button type="button" onClick={() => movementsArray.push("L")}>Left</button>
          <button type="button" onClick={() => movementsArray.push("R")}>Right</button>
          <button type="button" onClick={() => movementsArray.push("M")}>Move</button>
        </label>


        <button type="submit">Add Rover</button>
      </form>
    </div>
  )
}

export default connect()(AddRover)
