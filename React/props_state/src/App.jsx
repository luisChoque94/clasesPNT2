import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo'

function App() {
  //const [count, setCount] = useState(0)
  //const estado = useState("Susana")

  const [nombre, setNombre] = useState("Susana")

  const cambiarNombre = (nuevoNombre) =>{
    console.log("nombre Original", nombre)
     setNombre(nuevoNombre)
    console.log("nombre nuevo", nombre)
  }

  console.log(nombre)

  //const nombre  = "Susana"

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Saludo/>
      <Saludo nombre={nombre} elemento='h1'/>    
      <Saludo nombre={nombre} elemento='h2'/>
      <button onClick={() => setNombre(prompt("Cual es tu nombre?"))}>Cambiar nombre</button>    

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
