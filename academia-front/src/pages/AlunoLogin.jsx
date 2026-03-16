import { useState } from "react";

function AlunoLogin() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/alunos/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await res.json();

    if (data) {

      localStorage.setItem("alunoId", data.id);

      setMensagem("Login realizado!");

      window.location.href = "/dashboard";

    } else {

      setMensagem("Email ou senha incorretos");

    }
  }

  async function handleCadastro(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/alunos/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: email,
        email,
        senha
      })
    });

    const data = await res.json();

    localStorage.setItem("alunoId", data.id);

    setMensagem("Cadastro realizado!");

    window.location.href = "/dashboard";
  }

  return (

    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h2>Login do Aluno</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e)=>setSenha(e.target.value)}
        />

        <br /><br />

        <button type="submit">Entrar</button>

      </form>

      <br />

      <button onClick={handleCadastro}>
        Cadastrar
      </button>

      <p>{mensagem}</p>

    </div>

  );
}

export default AlunoLogin;