// src/componentes/Banner.jsx
import { Link } from "react-router-dom";
import bannerImg from "../assets/Latrel.jpg"; // importe sua imagem aqui

function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px", // altura mínima para o banner aparecer
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Academia PowerFit
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Treine forte, viva melhor!
      </p>
      <Link to="/planos">
        <button
          style={{
            padding: "0.8rem 2rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            backgroundColor: "#ff4500",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Saiba Mais
        </button>
      </Link>
    </div>
  );
}

export default Banner;