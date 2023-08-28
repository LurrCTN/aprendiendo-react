import { useState } from 'react'
import confetti from "canvas-confetti"
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/Winner'
import './App.css'
import { Board } from './components/Board'
import { guardarEnLocalStorage, resetLocalStorate} from "./logic/storage/index.js"



function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage 
      ? JSON.parse(boardFromLocalStorage) 
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.X
  })
  // si es null no hay ganador, si es false empataron
  const [winner, setWinner] = useState(null)
  
  const updateBoard = (index) => {
    // verificamos que el square este vacio
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    guardarEnLocalStorage(newBoard, newTurn)

    // verificamos si hay algun ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    //reseteamos el local storage
    resetLocalStorate()
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      <Board board={board} updateBoard={updateBoard} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  )
}

export default App
