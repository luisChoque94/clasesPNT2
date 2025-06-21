import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cronometro from './components/Cronometro'
import Control from './components/Control'
//import GlobalContext from './hooks/globalContext'
import { IniciadoProvider} from './hooks/useIniciado'


function App() {
  //const [count, setCount] = useState(0)
  //const { estaIniciado, toggleIniciado } = useIniciado()

  return (
    /* mi contexto lo estoy extrayendo y estoy haciendo un rappi dentro de este contexto
    Ademas estoy diciendole que el provider tiene un valor que es estaIniciado, setEstaIniciado
     Se recomienda que este provider sea dinamico para no  reescribir codigo
     CUSTOM HOOKS de react: permite que vos puedas reutilizar alguna logica de negocio en distintos componentes.
     IniciadoProvider es un componente que provee el contexto a los componentes hijos.
     Hay un problema , necesito que mi boton ejecute el cambio de estado,
     */


    <IniciadoProvider>
      <Cronometro />
      <Control />
    </IniciadoProvider>
  )
}

export default App
