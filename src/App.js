import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [circle, setCircle] = useState("0")
  const clickPlay = (index) => {
    if(squares - 1 === - 1)
  setSquares(0)
  }
  return (
    <>
    {/* Creates a column of 9 squares  */}

      <h1>Tic Tac Toe</h1>
      <div className= "board">

      {squares.map((value,index) => {
        return(
      
      <Square value={value} index={index}/>

        )})}
      </div>  
     
   </>
   )
}


export default App