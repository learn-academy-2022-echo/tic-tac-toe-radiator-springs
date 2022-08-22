import React from 'react'

const Square = (props) => {
  const squareClick = (props) => {
    props.clickPlay(props.index)
  }
  return (
    <div className="square" onClick={squareClick}>{props.value}</div>
  )
}
export default Square

