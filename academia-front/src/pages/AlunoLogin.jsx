import { useState } from "react";

function AlunoLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [aluno, setAluno] = useState(null); // aluno logado

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/alunos/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const data = await res.json();

    if (data) {
      setAluno(data);
      setMensagem("Login realizado com sucesso!");
    } else {
      setMensagem("Email ou senha incorretos.");
    }
  }

  async function handleCadastro(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/alunos/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: "Novo Aluno", email, senha })
    });

    const data = await res.json();
    setAluno(data);
    setMensagem("Cadastro realizado! Bem-vindo.");
  }

  if (aluno) {
    return (
      <div>
        <h2>Bem-vindo, {aluno.nome}</h2>
        <p>Plano: {aluno.plano?.nome || "Não possui plano"}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Login do Aluno</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        <br /><br />
        <button onClick={handleLogin}>Entrar</button>
        <button onClick={handleCadastro} style={{ marginLeft: "1rem" }}>
          Cadastrar
        </button>
      </form>
      <p>{mensagem}</p>
    </div>
  );
}

export default AlunoLogin;