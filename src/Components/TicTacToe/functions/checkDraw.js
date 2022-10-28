import checkWinner from "./checkWinner"

export default function checkDraw(board) {
  let isAllCellsField = true

  board.map(cell => {
    if (!cell){
      isAllCellsField = false
    }
  })

  if (isAllCellsField && !checkWinner(board)){
    return true    
  }

  return false
}