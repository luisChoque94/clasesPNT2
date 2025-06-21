import { useContext, useState, createContext } from 'react'

const IniciadoContext = createContext(false)

export function IniciadoProvider({ children }) {
    const [estaIniciado, setEstaIniciado] = useState(false)
    const [reiniciar, setReiniciar] = useState(false)
    
    const toggleIniciado = () => {setEstaIniciado(prev => !prev)}
    const toggleReiniciar = () => {
        setReiniciar(true)
        setEstaIniciado(false)
        
        setTimeout(() => {
            setReiniciar(false)
        })
    }
    return (
        <IniciadoContext.Provider value={{ estaIniciado, toggleIniciado, reiniciar, toggleReiniciar }}>
            {children}
        </IniciadoContext.Provider>
    )

}
export function useIniciado() {
    const estaIniciado = useContext(IniciadoContext)

    if (!estaIniciado) {
        throw new Error('useIniciado must be used within an IniciadoProvider')
    }
    return estaIniciado
}

/* Levando el estado iniciado como un contexto voy a crear un componente dentro del mismo que tenga ese contexto y devolverlo*/
/* children : layout para compartin todo lo que necesitas */