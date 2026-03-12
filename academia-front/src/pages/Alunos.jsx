import { useState, useEffect } from "react"

function Alunos(){

    const [alunos,setAlunos] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/alunos")
        .then(res => res.json())
        .then(data => setAlunos(data))
    },[])

    return(

        <div>

        <h2>Alunos</h2>

        {alunos.map(aluno => (

            <div key={aluno.id}>
                {aluno.nome}
            </div>

        ))}

        </div>

    )
}

export default Alunos