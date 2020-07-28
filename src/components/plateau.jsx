import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import store from '../store';
import DataCell from './data_cell';

class Plateau extends Component {
  constructor(props) {
    super(props);

    this.cellID = React.createRef();

    this.state = {
      plateauX: 1,
      plateauY: 1,
      positions: [],
      selectedPositions: [],
      fetched: false,
    }

    store.subscribe(() => {
      this.setState({
        plateauX: store.getState().plateauX,
        plateauY: store.getState().plateauY,
        positions: store.getState().positions
      })
    })
  }


  componentDidUpdate(){
      const { positions, selectedPositions, fetched } = this.state;
      if (positions.length > 0 && fetched === false) {
        this.setState({
          fetched: true
        })

        // Find position with most routes
        const lengths = positions.map(position => position.route.length);
        const positionIndex = lengths.indexOf(Math.max.apply(Math, lengths));
        const routeNumber = positions[positionIndex].route.length - 1;

        let routeIndex = 0;
        // Create interval for rover animation
        const interval = setInterval(
          () => {
            routeIndex++;
            if(routeIndex === routeNumber) {
              clearInterval(interval);
            }
            const newSelectedPositions = positions.map((position) => {
                return position.route[routeIndex];
            })
            this.setState({
              selectedPositions: newSelectedPositions
            })
            console.log(newSelectedPositions)
          }
        , 2000)
      }
    }

  render() {
    const {
      plateauX,
      plateauY,
      positions,
      selectedPositions
    } = this.state

    // Set plateau size from form input
    const rows = [];
    for (var i = plateauY; i > 0; i--){
      const rowID = `row${i}`
      const cell = []
      for (var idx = 0; idx < plateauX; idx++){
        const cellID = `x${idx}y${i-1}`
        cell.push(
          <DataCell
            y={i - 1}
            x={idx}
            key={cellID}
            cellID={cellID}
            selectedPositions={selectedPositions}
            />
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
