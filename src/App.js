import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [marker, setMarker] = useState("X")
  // const [turn, setTurn] = useState()
  const newBox = [...squares]
  
  // click on a square to mark it
  // Player 1 and 2 can make a mark alternately
  const handleClickPlay = (index) => {
    if (newBox[index] === "X" || newBox[index] === "O"){
      alert("Try another box")
    } else if (marker === "X") {
      newBox[index] = "X"
      setMarker("O")
    }else {
      newBox[index] = "O"
      setMarker("X")
    } setSquares(newBox)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
{/* // Creates a column of 9 squares */}      
      <div className= "board">

      {squares.map((value,index) => {
        return(
      
      <Square value={value} index={index} handleClickPlay={handleClickPlay} key={index}/>
        )})}
      </div>  
     
   </>
   )
}


export default App