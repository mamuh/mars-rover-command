import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import store from '../store'
import axios from 'axios';

class Rover extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const body = {
      "plateau": {
        "x": 6,
        "y": 5
      },
      "rovers": [
        {
          "start": {
            "x": 1,
            "y": 2,
            "direction": "N"
          },
          "movements": ["L","M","L","M","L","M","L","M","M"]
        },
        {
          "start": {
            "x": 3,
            "y": 3,
            "direction": "E"
          },
          "movements": ["M","M","R","M","M","R","M","R","R","M"]
        }
      ]
    }

    axios.post('https://mars-rover-command.herokuapp.com/rover/deploy', body).then(res => console.log(res))
  }

  render() {
    console.log(this.props)
    const { plateauX, plateauY } = this.props;
    return (
      <div>
        ROVER HEEEEERE
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plateauX: state.plateauX,
  plateauY: state.plateauY,
  roverInitialX: state.roverX,
  roverInitialY: state.roverY
});

const mapDispatchToProps = () => {
  return null
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Rover);
