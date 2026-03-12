// src/pages/AlunoDashboard.jsx
import { useEffect, useState } from "react";

function AlunoDashboard() {
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    // Simula pegar o aluno logado (id fixo 1 apenas para teste)
    fetch("http://localhost:8080/alunos/1") 
      .then(res => res.json())
      .then(data => setAluno(data));
  }, []);

  if (!aluno) return <p>Carregando...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Bem-vindo, {aluno.nome}!</h2>
      <p>Idade: {aluno.idade} anos</p>
      <p>Peso: {aluno.peso} kg</p>
      <p>Altura: {aluno.altura} m</p>
      <h3>Plano:</h3>
      {aluno.plano ? (
        <div>
          <p>Nome: {aluno.plano.nome}</p>
          <p>Descrição: {aluno.plano.descricao}</p>
          <p>Valor: R$ {aluno.plano.valor}</p>
        </div>
      ) : (
        <p>Sem plano contratado.</p>
      )}
    </div>
  );
}

export default AlunoDashboard;