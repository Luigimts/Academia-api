import { useEffect, useState } from "react"

function Planos(){

const [planos,setPlanos] = useState([])

useEffect(()=>{

fetch("http://localhost:8080/planos")
.then(res => res.json())
.then(data => setPlanos(data))

},[])

async function escolherPlano(planoId) {

  const alunoId = localStorage.getItem("alunoId")

  if (!alunoId) {
    alert("Faça login para escolher um plano")
    return
  }

  // pegar dados atuais do aluno
  const resAluno = await fetch(`http://localhost:8080/alunos/${alunoId}`)
  const aluno = await resAluno.json()

  // atualizar aluno com plano escolhido
  await fetch(`http://localhost:8080/alunos/${alunoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...aluno,
      plano: { id: planoId }
    })
  })

  alert("Plano escolhido com sucesso!")
}

return(

<div>

<h2>Planos da Academia</h2>

{planos.map(plano => (

    

<div key={plano.id} style={{
border:"1px solid black",
padding:"10px",
margin:"10px"
}}>

<h3>{plano.nome}</h3>

<p>{plano.descricao}</p>

<p>Duração: {plano.duracaoDias} dias</p>

<p>Valor: R$ {plano.valor}</p>

<button onClick={() => escolherPlano(plano.id)}>
Escolher Plano
</button>

</div>

))}

</div>

)

}

export default Planos