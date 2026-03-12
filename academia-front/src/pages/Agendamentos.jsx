import { useState, useEffect } from "react"


function Agendamentos(){

  const [alunos,setAlunos] = useState([])
  const [instrutores,setInstrutores] = useState([])

  const [alunoId,setAlunoId] = useState("")
  const [instrutorId,setInstrutorId] = useState("")
  const [data,setData] = useState("")
  const [horario,setHorario] = useState("")

  useEffect(()=>{
    fetch("http://localhost:8080/alunos")
      .then(res => res.json())
      .then(data => setAlunos(data))

    fetch("http://localhost:8080/instrutores")
      .then(res => res.json())
      .then(data => setInstrutores(data))
  },[])

  async function criarAgendamento(){
    await fetch("http://localhost:8080/agendamentos",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        alunoId:Number(alunoId),
        instrutorId:Number(instrutorId),
        data:data,
        horario:horario
      })
    })
    alert("Agendamento criado!")
  }

  return(
    <div className="agendamento-container">

      <h2>Novo Agendamento</h2>

      <select onChange={(e)=>setAlunoId(e.target.value)}>
        <option>Selecione aluno</option>
        {alunos.map(aluno => (
          <option key={aluno.id} value={aluno.id}>{aluno.nome}</option>
        ))}
      </select>

      <select onChange={(e)=>setInstrutorId(e.target.value)}>
        <option>Selecione instrutor</option>
        {instrutores.map(instrutor => (
          <option key={instrutor.id} value={instrutor.id}>{instrutor.nome}</option>
        ))}
      </select>

      <input type="date" onChange={(e)=>setData(e.target.value)} />
      <input type="time" onChange={(e)=>setHorario(e.target.value)} />

      <button onClick={criarAgendamento}>Criar Agendamento</button>
    </div>
  )
}

export default Agendamentos