import { useEffect, useState } from "react"
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x : 0, y : 0})

  useEffect(() => {
    const handleMove = (event) =>{
      const { clientX, clientY } = event
      const mouseFollower = document.getElementById("mouseFollower")
      const mainPosition = document.getElementById('app').getBoundingClientRect()
      const { left, right, top, bottom } = mainPosition
      const circleHeight = 20
      const circleWidth = 20

      if (clientX + circleWidth > left &&
          clientX - circleWidth < right &&
          clientY + circleHeight > top &&
          clientY - circleHeight < bottom) {
        mouseFollower.style.backgroundColor = 'rgba(0, 0, 0, 1)'
        setPosition({x: clientX, y: clientY})
      } else {
        mouseFollower.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
        setPosition({x: clientX, y: clientY})
      }
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      setPosition({x: 670, y: 322})
    }
  }, [enabled])

  return(
    <>
      <div id="mouseFollower" style={{
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: '-1'
      }}/> 
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <main className="app" id="app">
      { mounted && <FollowMouse /> }
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse component</button>
    </main>
  )
}

export default App
