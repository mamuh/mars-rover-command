import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SetRovers extends Component {

  render() {
    return (
      <div>
        <form>
          <label>
            Start position:
            <label for="x-coord-rover">x</label>
            <input type="number" min="0" name="x-coord-rover" />
            <label for="y-coord-rover">y</label>
            <input type="number" min="0" name="y-coord-rover" />
          </label>

          <br />

          <label>
            Direction:
            <select>
              <option value="north">North</option>
              <option value="north">South</option>
              <option value="north">East</option>
              <option value="north">West</option>
            </select>
          </label>

          <br />

          <label>
            Movements:
            <div>
              L, M, R, L
            </div>
            <button>Left</button>
            <button>Right</button>
            <button>Move</button>
          </label>

          <br />

          <input type="submit" value="Add Rover" />
        </form>

      </div>
    );
  }
}

export default SetRovers;
