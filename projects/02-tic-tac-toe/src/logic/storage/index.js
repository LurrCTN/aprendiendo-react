export const guardarEnLocalStorage = ( newBoard, newTurn) => {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

}

export const resetLocalStorate = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('item')
}