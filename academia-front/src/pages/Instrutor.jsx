import { useState,useEffect } from "react"

function Instrutores(){

    const [instrutores,setInstrutores] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/instrutores")
        .then(res => res.json())
        .then(data => setInstrutores(data))
    },[])

    return(

        <div>

        <h2>Instrutores</h2>

        {instrutores.map(instrutor => (

            <div key={instrutor.id}>
                {instrutor.nome}
            </div>

        ))}

        </div>

    )
}

export default Instrutores