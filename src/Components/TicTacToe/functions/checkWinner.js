export default function checkWinner (board) {
  let winner = ''
  const list = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  list.map( comb => {
    const [a,b,c] = comb
    if (board[a] === board[b] && board[c] === board[b] && board[a]){
      winner = board[a]
    }
  })

  return winner
}