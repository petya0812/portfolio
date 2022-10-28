import React, { useState } from "react"
import Board from "./Components/Board"
import checkWinner from "./functions/checkWinner"
import checkDraw from "./functions/checkDraw"
import container from "../../hoc/container"

function TicTacToe() {
  const [board, setBoard] = useState(new Array(9).fill(""))
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [xIsNext, setXIsNext] = useState(true)
  const winner = checkWinner(board)
  const isDraw = checkDraw(board)
  const [xWins, setXWins] = useState(0)
  const [oWins, setOWins] = useState(0)

  const onCellClick = (cell) => {
    if (!board[cell] && !winner) {
      const boardCopy = [...board]
      boardCopy[cell] = xIsNext ? "X" : "O"
      setXIsNext(!xIsNext)
      setBoard(boardCopy)
      if (checkWinner(boardCopy) && checkWinner(boardCopy) == "X") {
        setXWins(xWins + 1)
      } else if (checkWinner(boardCopy) && checkWinner(boardCopy) == "O") {
        setOWins(oWins + 1)
      }
    }
  }

  const onButtonClick = () => {
    setBoard(new Array(9).fill(""))
    setIsGameStarted(!isGameStarted)
    setXIsNext(true)
    setOWins(0)
    setXWins(0)
  }

  const renderBoard = () => {
    if (isGameStarted) {
      return <Board board={board} onCellClick={onCellClick} />
    }
  }

  const playAgain = () => {
    setBoard(new Array(9).fill(""))
    setXIsNext(true)
  }

  const redClass = isGameStarted ? "btn-danger" : "btn-success"

  return (
    <div className="TicTacToe">
      {isGameStarted ? (
        <h2>
          {winner
            ? `WINNER ${winner}`
            : isDraw
            ? "DRAW"
            : `PLAYER ${xIsNext ? "X" : "O"}`}
        </h2>
      ) : null}
      {renderBoard()}

      <div className="footer">
        {isGameStarted ? <p className="h3 text-start">X - {xWins}</p> : null}

        <div className="btn-zone">
          {isDraw || winner ? (
            <button className="btn btn-primary" onClick={playAgain}>
              PLAY AGAIN
            </button>
          ) : null}
          <button className={`btn ${redClass}`} onClick={onButtonClick}>
            {isGameStarted ? "STOP" : "START GAME"}
          </button>
        </div>

        {isGameStarted ? <p className="h3 text-end">O - {oWins}</p> : null}
      </div>
    </div>
  )
}

export default container(TicTacToe, "center")
