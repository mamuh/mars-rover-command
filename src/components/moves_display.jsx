import React from 'react';
import { useSelector } from 'react-redux';
import RoverMoves from './rover_moves';
import Deploy from './deploy';



const MovesDisplay = () => {
  const rovers = useSelector(state => state.rovers)
  const isLoading = useSelector(state => state.isLoading)
  const iconPath = process.env.PUBLIC_URL + '/gear.svg';

  return (
    <div className="rovers-div div">
      <h4>3. DEPLOY ROVERS</h4>
      <div className="rovers-list">
        {
          isLoading ?
           <img src={iconPath} />
           :
           rovers.map(rover => {
              return (
                <RoverMoves rover={rover} key={rover.roverId} />
              )
          })
        }
      </div>
      <Deploy />
    </div>
  )
}

export default MovesDisplay
