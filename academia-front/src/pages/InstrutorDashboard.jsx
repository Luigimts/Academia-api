import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function InstrutorDashboard() {
  const { id } = useParams();
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/instrutores/${id}/agendamentos`)
      .then((res) => res.json())
      .then((data) => setAgendamentos(data));
  }, [id]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Meus Agendamentos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {agendamentos.map((a) => (
          <li
            key={a.id}
            style={{
              margin: "1rem auto",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <strong>Aluno:</strong> {a.aluno.nome} <br />
            <strong>Data:</strong> {a.data} <br />
            <strong>Horário:</strong> {a.horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstrutorDashboard;