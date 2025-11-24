"use client"

import Link from "next/link"
import { categorias } from "./data"

export default function CategoriasPage() {
  return (
    <section className="conteudo">
      <h2>Categorias de Reciclagem</h2>
      <p>Explore as principais categorias de materiais que podem ser reciclados e descubra os benefícios de reciclar cada uma delas.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        marginTop: "24px"
      }}>
        {categorias.map((categoria) => (
          <Link key={categoria.id} href={`/categorias/${categoria.id}`} style={{ textDecoration: "none" }}>
            <div style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
              transition: "all 0.3s ease",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e8f5e9"
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f9f9f9"
              e.currentTarget.style.boxShadow = "none"
            }}>
              <h3 style={{ margin: "0 0 8px 0", color: "#2e7d32" }}>
                {categoria.nome}
              </h3>
              <p style={{ margin: 0, color: "#666", fontSize: "14px", flex: 1 }}>
                {categoria.descricao}
              </p>
              <span style={{ marginTop: "12px", color: "#2e7d32", fontWeight: "500" }}>
                Saiba mais →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
    
  )
}
