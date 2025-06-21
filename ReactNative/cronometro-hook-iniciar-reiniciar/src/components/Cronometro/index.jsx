import { useEffect, useState, useContext } from "react"
import { useIniciado } from "../../hooks/useIniciado"

let intervalID

export default () => {
    const [count, setCount] = useState(0)
    const { estaIniciado, reiniciar } = useIniciado()

    useEffect(() => {
        console.log("Detecto el cambio del prop", estaIniciado)

        if (estaIniciado) {
            intervalID = setInterval(() => {
                //setCount(prev => prev +1)
                
                setCount((valorPrevio) => {
                    console.log(`valor del contador:  ${valorPrevio}`)
                    return valorPrevio + 1
                
                })
            }, 1000)
            
            console.log("ID interval: ", intervalID)
        } else {
            clearInterval(intervalID)
        }
        //
    }, [estaIniciado])

    useEffect(() => {
        if (reiniciar) {
            console.log("Reiniciando el contador")
            setCount(0)
            //clearInterval(intervalID)
        }

    }, [reiniciar])


    return (
        <div><h1>{count}</h1></div>
    )
}

/* Podemos buscar el estado iniciado usando el hook useContext 
Hacemos la declaracion el import, obtenemos el contexto global,se lo paso al useContext
,ya puedo acceder.
En el hijo en vez de recibirlo como una prop ahora lo recibo como un contexto.
El resto de codigo es exactamente lo mismo.
*/