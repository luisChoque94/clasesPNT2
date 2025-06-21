import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState("Desconocido")
  const [edad, setEdad] = useState(20)

  useEffect(() => {
    console.log("1.--  inicializacion del componente")
    return () => {
      console.log("3.-- estamos en el ciclo de vida UNMOUNT: apenas se remueve este componente me ejecuta")
    }
  }, [])             //se ejecuta una vez con []

  useEffect(() => {
    console.log("2.-- cambio el estado nombre", nombre)
  }, [nombre])

  useEffect(() => {
    console.log("2.-- cambio el estado edad", edad)
  }, [edad])

   useEffect(() => {
    console.log("2.-- cambio uno de los dos estados", edad, edad)
  }, [nombre, edad])

  
  return (
    <>
      
      <h1>Hola {nombre}, tenes {edad} años</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <button onClick={() =>{
          setNombre(prompt("como te llamas"))
        }}>
          Cambiar nombre
        </button>

        <button onClick={() =>{
          setEdad(prompt("que edad tenes"))
        }}>
          Cambiar edad
        </button>

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
