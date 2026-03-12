import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InstrutorLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const res = await fetch("http://localhost:8080/instrutores/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();

    if (data && data.id) {
      // login ok, leva pro dashboard
      navigate(`/instrutor/${data.id}`);
    } else {
      setErro("Email ou senha incorretos!");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h2>Login do Instrutor</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "200px" }}
      />
      <br />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "200px" }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{
          padding: "0.7rem 2rem",
          backgroundColor: "#ff4500",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Entrar
      </button>
      {erro && <p style={{ color: "red", marginTop: "1rem" }}>{erro}</p>}
    </div>
  );
}

export default InstrutorLogin;