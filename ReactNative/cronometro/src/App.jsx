import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cronometro from './components/Cronometro'

function App() {
  //const [count, setCount] = useState(0)
  const [estaIniciado, setEstaIniciado] = useState(false)
  
  return (
    <>
      <Cronometro estaIniciado={estaIniciado}/>
      <div className='card'>
        <button onClick={() => setEstaIniciado(!estaIniciado)}>
          {estaIniciado ? 'Pausar': 'Iniciar'}</button>
        <button>Reiniciar</button>
      </div>
    </>
  )
}

export default App
