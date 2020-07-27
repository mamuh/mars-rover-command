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
      positions: []
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

    let counter = 0
    const roverPositions = []
    const mapPosition = positions => {
      positions.map(position => {
        const startX = position.x
        const startY = position.y
        const startDirection = position.direction
        roverPositions.push(Object.assign({}, {x: startX}, {y: startY}, {direction: startDirection}, {roverId: counter}))

        const route = position.route
        route.map(route => {
          const routeX = route.x
          const routeY = route.y
          const routeDirection = route.direction
          roverPositions.push(Object.assign({}, {x: routeX}, {y: routeY}, {direction: routeDirection}, {roverId: counter}))
        })
        console.log(roverPositions)
        counter++
      })
    }

    mapPosition(positions)


    const displayPosition = (roverPositions) => {
      roverPositions.map(position => {
        const x = position.x
        const y = position.y
        const direction = position.direction
        const id = position.roverId
      })
    }



    let rows = [];
    for (var i = plateauY; i > 0; i--){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < plateauX; idx++){
        let cellID = `x${idx}y${i-1}`
        cell.push(<td className="" ref={this.cellID} key={cellID} id={cellID}>{cellID}</td>)
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
