"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { getCategoria } from "../data"

export default function CategoriaPage() {
  const params = useParams()
  const categoria = getCategoria(params.categoria)

  if (!categoria) {
    return (
      <section className="conteudo">
        <h2>Categoria não encontrada</h2>
        <p>Desculpe, essa categoria de reciclagem não existe.</p>
        <Link href="/categorias">Voltar para categorias</Link>
      </section>
    )
  }

  return (
    <section className="conteudo">
      <Link href="/categorias" style={{ marginBottom: "16px", display: "inline-block" }}>
        ← Voltar
      </Link>
      
      <h2>{categoria.nome}</h2>
      <p style={{ fontSize: "16px", color: "#555" }}>{categoria.descricao}</p>

      <h3>Benefícios da Reciclagem de {categoria.nome}</h3>
      <ul>
        {categoria.beneficios.map((beneficio, index) => (
          <li key={index}>{beneficio}</li>
        ))}
      </ul>

      <h3>Como Descartar {categoria.nome}</h3>
      <ul>
        {categoria.comoDescartar.map((passo, index) => (
          <li key={index}>{passo}</li>
        ))}
      </ul>

      <div style={{ marginTop: "32px", padding: "16px", backgroundColor: "#f0f8f0", borderRadius: "8px" }}>
        <p>
          <strong>Dica importante:</strong> Sempre pesquise os pontos de coleta autorizados em sua região para garantir uma reciclagem segura e adequada.
        </p>
      </div>
    </section>
  )
}
