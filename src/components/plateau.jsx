import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import store from '../store'


class Plateau extends Component {
  constructor(props) {
    super(props);

    this.cellID = React.createRef();

    this.state = {
      plateauX: 1,
      plateauY: 1,
      positions: [],
      selectedPositions: []
    }

    store.subscribe(() => {
      this.setState({
        plateauX: store.getState().plateauX,
        plateauY: store.getState().plateauY,
        positions: store.getState().positions
      })
    })
  }

  render() {
    const { plateauX, plateauY, positions } = this.state


    // const displayPositions = () => {
    //   const { positions, selectedPositions } = this.state

    //   this.setState({ selectedPositions: positions })
    // }





    // setting plateau size from form input
    let rows = [];
    for (var i = plateauY; i > 0; i--){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < plateauX; idx++){
        let cellID = `x${idx}y${i-1}`
        let classname = this.state.positions.find(position => position.route[0].x == idx && position.route[0].y == i-1) ? "selected" : "null"
        setTimeout(() => classname = this.state.positions.find(position => position.route[1].x == idx && position.route[1].y == i-1) ? "selected" : "null" , 2000)

        cell.push(
          <td
            className={classname}
            ref={this.cellID}
            key={cellID}
            id={cellID}>
            {cellID}
          </td>
         )
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
      <div className="container">
        <table id="simple-board">
           <tbody>
             {rows}
           </tbody>
         </table>
      </div>
    )
  }
}


export default Plateau;
