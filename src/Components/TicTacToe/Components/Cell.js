import React from 'react'

const Cell = props => {
  return (
    <div className='Cell' onClick={props.onCellClick}>
      {props.value}
    </div>
  )
}

export default Cell
