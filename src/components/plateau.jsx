import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';

// class Plateau extends Component {

//   // getState() {
//   //   const height = useSelector(state => state.plateauY)
//   // }

//   render() {
//     const height = 3
//     const width = 4
//     let rows = [];
//         for (var i = 0; i < height; i++){
//           let rowID = `row${i}`
//           let cell = []
//           for (var idx = 0; idx < width; idx++){
//             let cellID = `cell${i}-${idx}`
//             cell.push(<td key={cellID} id={cellID}></td>)
//           }
//           rows.push(<tr key={i} id={rowID}>{cell}</tr>)
//         }
//         return(
//           <div className="container">
//             <table id="simple-board">
//                <tbody>
//                  {rows}
//                </tbody>
//              </table>
//           </div>
//         )
//   }

// };



const Plateau = (props) => {
  const height = useSelector(state => state.plateauY)
  const width = useSelector(state => state.plateauX)
  let rows = [];
      for (var i = 0; i < height; i++){
        let rowID = `row${i}`
        let cell = []
        for (var idx = 0; idx < width; idx++){
          let cellID = `cell${i}-${idx}`
          cell.push(<td key={cellID} id={cellID}></td>)
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

export default Plateau;
