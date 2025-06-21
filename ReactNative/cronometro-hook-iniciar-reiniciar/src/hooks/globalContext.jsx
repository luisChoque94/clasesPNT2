import { createContext } from "react"


/* Cuando genero un contexto le puedo pasar un estado o lo que sea
    Implementamos el useContext, donde podemos buscar la informacion y utilizarla.
    El contexto tiene 2 propiedades principales:
// 1. Provider: Provee el contexto a los componentes hijos. 
// 2. Consumer: Permite a los componentes hijos acceder al contexto.
// 3. useContext: Hook que permite acceder al contexto de manera más sencilla. 
   
     */
const GlobalContext = createContext(false)

export default GlobalContext
