import { useEffect, useState } from "react"
let intervalID

export default ({ estaIniciado }) => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log("Detecto el cambio del prop", estaIniciado)
        if(estaIniciado){
        intervalID = setInterval(() => {
            //setCount(prev => prev +1)
            setCount((valorPrevio) => {
                console.log(`valor del contador:  ${valorPrevio}`)
                return valorPrevio + 1
            })
        }, 1000)
        console.log("ID interval: ", intervalID)
    }else{
        clearInterval(intervalID)
    }
        //
    }, [estaIniciado])


    return (
        <div><h1>{count}</h1></div>
    )
}