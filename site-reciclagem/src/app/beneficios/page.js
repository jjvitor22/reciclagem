"use client"

import { useEffect, useState } from "react"

export default function BeneficiosPage() {
  const [ciLoading, setCiLoading] = useState(true)
  const [ciError, setCiError] = useState(null)
  const [ciData, setCiData] = useState(null)

  async function fetchCarbonIntensity() {
    try {
      setCiLoading(true)
      setCiError(null)

      const res = await fetch("https://api.carbonintensity.org.uk/intensity")
      if (!res.ok) throw new Error(`Status ${res.status}`)

      const json = await res.json()
      const item = Array.isArray(json.data) && json.data.length > 0 ? json.data[0] : null
      setCiData(item)
    } catch (err) {
      setCiError(err.message || "Erro ao buscar intensidade")
    } finally {
      setCiLoading(false)
    }
  }

  useEffect(() => {
    fetchCarbonIntensity()
  }, [])

  const boxStyle = {
    marginTop: 24,
    border: "1px solid #ddd",
    padding: 12,
    borderRadius: 8,
    width: 300,
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    fontSize: 14,
  }

  return (
    <section className="conteudo">
      <h2>Benefícios da Reciclagem do Lixo Eletrônico: Impactos Positivos para o Planeta</h2>
      <p>Você já pensou nos benefícios que a reciclagem correta do lixo eletrônico pode trazer? <br/> Quando você descarta seus eletrônicos da forma certa, está contribuindo para um mundo mais sustentável e saudável.</p>
      <h2>Benefícios Ambientais</h2>
      <p>A reciclagem de lixo eletrônico protege nosso planeta de várias formas:</p>
      <ul className="custom">
        <li>Reduz a extração de matérias-primas</li>
        <p>Reciclando eletrônicos, conseguimos reutilizar metais valiosos como cobre, alumínio, ouro e prata, reduzindo a necessidade de minerar novos recursos naturais. Isso preserva os ecossistemas e reduz o impacto ambiental da mineração.</p>
        <li>Diminui a poluição ambiental</li>
        <p>Quando o lixo eletrônico é reciclado corretamente, os materiais tóxicos como chumbo, mercúrio e cádmio não contaminam o solo e a água. Isso protege a qualidade do ar, evita o vazamento de substâncias perigosas em lençóis freáticos e preserva a vida marinha.</p>
        <li>Economiza energia na produção</li>
        <p>Produzir novos eletrônicos a partir de matéria-prima natural consome muito mais energia do que reciclar. Usando materiais reciclados, economizamos energia e reduzimos as emissões de gases de efeito estufa, combatendo as mudanças climáticas.</p>
        <li>Conserva recursos naturais escassos</li>
        <p>Muitos minerais usados em eletrônicos são limitados na natureza. Ao reciclá-los, garantimos que esses recursos estejam disponíveis para as gerações futuras e mantemos o equilíbrio dos ecossistemas.</p>
      </ul>
      <h2>Benefícios Sociais e Econômicos</h2>
      <ul className="custom">
        <li>Cria novos empregos</li>
        <p>A indústria de reciclagem gera muitos postos de trabalho em coleta, triagem, processamento e comercialização de materiais reciclados. Isso movimenta a economia local e oferece oportunidades profissionais.</p>
        <li>Melhora a saúde pública</li>
        <p>Reduzindo a exposição a substâncias tóxicas, prevenimos doenças respiratórias, neurológicas, câncer e outros problemas de saúde. Pessoas que trabalham com reciclagem adequada correm menos riscos de contaminação.</p>
        <li>Promove a economia circular</li>
        <p>A reciclagem cria um ciclo onde materiais são reutilizados continuamente, reduzindo o desperdício e os custos de produção. Isso torna as empresas mais eficientes e sustentáveis.</p>
        <li>Conscientiza a população</li>
        <p>Quando mais pessoas participam da reciclagem, aumenta a conscientização sobre a importância da sustentabilidade. Isso muda comportamentos e cria uma sociedade mais responsável com o meio ambiente.</p>
      </ul>
      <h2>Como Você Pode Contribuir?</h2>
      <p>
        Separe seus eletrônicos velhos ou quebrados e leve-os a um ponto de coleta autorizado.<br/>
        Procure empresas de reciclagem especializadas em lixo eletrônico na sua região.<br/>
        Participe de campanhas e eventos de recolhimento de eletrônicos.<br/>
        Compartilhe essa importância com amigos e família.
      </p>

      <p><b>Reciclar lixo eletrônico é um ato simples que gera benefícios enormes para o planeta, a economia e a saúde de todos. Seja parte dessa solução!</b></p>

      <div style={{ marginTop: 32, padding: 16, backgroundColor: "#e8f5e9", borderRadius: 8, textAlign: "center" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>Explore Outras Categorias de Reciclagem</h3>
        <p style={{ margin: "0 0 12px 0" }}>Conheça as principais categorias de materiais que podem ser reciclados:</p>
        <a href="/categorias" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2e7d32", color: "#fff", textDecoration: "none", borderRadius: 6, fontWeight: 500 }}>
          Ver Categorias →
        </a>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={boxStyle} aria-live="polite">
          <h4 style={{ margin: "0 0 8px 0" }}>Carbon Intensity (UK)</h4>
          {ciLoading && <p style={{ margin: 0 }}>Carregando intensidade...</p>}

          {ciError && (
            <div style={{ color: "#c00" }}>
              <p style={{ margin: 0 }}>Erro: {ciError}</p>
            </div>
          )}

          {!ciLoading && !ciError && ciData && (
            <div>
              <p style={{ margin: "6px 0 0 0", fontSize: 12 }}>
                {new Date(ciData.from).toLocaleString()} → {new Date(ciData.to).toLocaleString()}
              </p>
              <p style={{ margin: "6px 0", fontWeight: 700 }}>
                {ciData.intensity.actual ?? ciData.intensity.forecast} gCO₂/kWh
              </p>
              <p style={{ margin: 0, fontSize: 12 }}>Índice: {ciData.intensity.index}</p>
            </div>
          )}

          <div style={{ marginTop: 8, display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button onClick={fetchCarbonIntensity} style={{ padding: "6px 8px", fontSize: 12 }}>Atualizar</button>
            <a href="https://api.carbonintensity.org.uk/" target="_blank" rel="noreferrer" style={{ fontSize: 12, alignSelf: "center" }}>Fonte</a>
          </div>
        </div>
      </div>
    </section>
  )
}