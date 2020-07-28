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

  const handleClick = (e, coord) => {
    const operator = e.target.innerText

    if (operator == "+" && coord == "x") {
      if (parseInt(startX.value) >= maxX) {
        startX.value = maxX
      } else {
        startX.value++
      }
    } else if (operator == '-' && coord == "x") {
      if (parseInt(startX.value) <= 0) {
        startX.value = 0
      } else {
        startX.value--
      }
    } else if (operator == '+' && coord == "y") {
      if (parseInt(startY.value) >= maxY) {
        startY.value = maxX
      } else {
        startY.value++
      }
    } else if (operator == "-" && coord == "y") {
      if (parseInt(startY.value) <= 0) {
        startY.value = 0
      } else {
        startY.value--
      }
    }

  }

  return (
    <div className="set-new-rover-div div">
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addRover(
            {
              "x": parseInt(startX.value),
              "y": parseInt(startY.value),
              "direction": startDirection.value},
              movementsArray));
              movementsArray = []
              e.target.reset()
            }}
      >

        <h4>SET NEW ROVER</h4>
        x:
        <input readOnly className="rover-x-y-input" defaultValue="0" type="number" min="0" max={maxX} ref={node => (startX = node)} />
        <button className="incrementer-decrementer" type="button" onClick={(e) => handleClick(e, "x")}>+</button>
        <button className="incrementer-decrementer" type="button" onClick={(e) => handleClick(e, "x")}>-</button>

        <br />
        y:
        <input readOnly className="rover-x-y-input" defaultValue="0" type="number"min="0" max={maxY} ref={node => (startY = node)} />
        <button className="incrementer-decrementer" type="button" onClick={(e) => handleClick(e, "y")}>+</button>
        <button className="incrementer-decrementer" type="button" onClick={(e) => handleClick(e, "y")}>-</button>
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
