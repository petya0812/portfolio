import React from 'react'
import Cell from './Cell'
import '../TicTacToe.scss'

const Board = props => {
  return (
    <div className='Board'>
      {props.board.map((cell,key) => {
        return (<Cell key = {key} value = {cell} onCellClick = {(props.onCellClick.bind(this,key))}/>)
      })}
    </div>
  )
}

export default Board
