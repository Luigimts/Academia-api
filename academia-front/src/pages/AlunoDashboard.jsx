import { useEffect, useState } from "react";

function AlunoDashboard() {

  const [aluno, setAluno] = useState(null);
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {

    // pegar aluno
    fetch("http://localhost:8080/alunos/1")
      .then(res => res.json())
      .then(data => setAluno(data));

    // pegar agendamentos do aluno
    fetch("http://localhost:8080/alunos/1/agendamentos")
      .then(res => res.json())
      .then(data => setAgendamentos(data));

  }, []);

  if (!aluno) return <p>Carregando...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>

      <h2>Bem-vindo, {aluno.nome}!</h2>

      <p>Idade: {aluno.idade} anos</p>
      <p>Peso: {aluno.peso} kg</p>
      <p>Altura: {aluno.altura} m</p>

      <h3>Seu Plano</h3>

      {aluno.plano ? (
        <div>
          <p><b>{aluno.plano.nome}</b></p>
          <p>{aluno.plano.descricao}</p>
          <p>R$ {aluno.plano.valor}</p>
        </div>
      ) : (
        <p>Sem plano contratado.</p>
      )}

      <h3>Seus Agendamentos</h3>

      {agendamentos.length > 0 ? (
        <ul>
          {agendamentos.map((a) => (
            <li key={a.id}>
              {a.data} - Instrutor {a.instrutor?.nome}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum agendamento.</p>
      )}

      <div style={{ marginTop: "20px" }}>

        <button style={{ margin: "10px" }}>
          Agendar Aula
        </button>

        <button style={{ margin: "10px" }}>
          Escolher Plano
        </button>

      </div>

    </div>
  );
}

export default AlunoDashboard;