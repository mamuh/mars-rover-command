import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';
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

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = () => {
  return null
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(SetRovers);
