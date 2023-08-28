import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS){
    const [a, b, c] = combo
      if(
        boardToCheck[a] && // nos fijamos si existe un valor
        boardToCheck[a] === boardToCheck[b] && // nos fijamos que tanto en A como en B este el mismo simbolo
        boardToCheck[a] === boardToCheck[c] // mismo checkeo que la condicion anterior
      ) {
        return boardToCheck[a]
      }
    }
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every(square => square !== null)
}