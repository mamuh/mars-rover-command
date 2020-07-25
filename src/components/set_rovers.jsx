import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SetRovers extends Component {

  render() {
    return (
      <div>
        <form>
        <fieldset>
        <legend>2 - New Rover</legend>
          <label>
            Start position:
            <label>x:
              <input type="number" min="0" name="x-coord-rover" />
            </label>
            <label>y:
              <input type="number" min="0" name="y-coord-rover" />
            </label>
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
        </fieldset>
        </form>

      </div>
    );
  }
}

export default SetRovers;
