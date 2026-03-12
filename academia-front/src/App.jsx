import { Routes, Route, Link } from "react-router-dom";

import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";

// Páginas existentes
import Alunos from "./pages/Alunos";
import Instrutores from "./pages/Instrutor";
import Planos from "./pages/Planos";
import Agendamentos from "./pages/Agendamentos";

// Novas páginas de login/dashboard
import InstrutorLogin from "./pages/instrutorLogin";
import InstrutorDashboard from "./pages/InstrutorDashboard";
import AlunoLogin from "./pages/AlunoLogin";
import AlunoDashboard from "./pages/AlunoDashboard"; // ainda vamos criar

function App() {
  return (
    <div>
      <Banner /> {/* Banner separado */}

      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", margin: "1rem 0" }}>
        <Link to="/alunos">Alunos</Link>
        <Link to="/instrutores">Instrutores</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/agendamentos">Agendamentos</Link>
        <Link to="/instrutor/login">Login Instrutor</Link>
        <Link to="/login-aluno">Login Aluno</Link>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/instrutores" element={<Instrutores />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/agendamentos" element={<Agendamentos />} />

        {/* Login e Dashboard do instrutor */}
        <Route path="/instrutor/login" element={<InstrutorLogin />} />
        <Route path="/instrutor/:id" element={<InstrutorDashboard />} />

        {/* Login e Dashboard do aluno */}
        <Route path="/login-aluno" element={<AlunoLogin />} />
        <Route path="/aluno/:id" element={<AlunoDashboard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;