# reciclagem
# Tutorial React, Next.js e CSS
# Páginas (Home, Descarte e Contato) — React/Next.js
•	Criadas com componentes funcionais (HomePage, DescartePage, ContatoPage).
•	Usam JSX, que permite escrever HTML dentro do JavaScript.
•	A página Home apresenta informações sobre o descarte de lixo eletrônico, lista impactos ambientais e inclui um mini jogo educativo.
•	A página Descarte explica como descartar corretamente, com uma lista de boas práticas.
•	A página Contato contém um formulário com campos de nome, e-mail e mensagem.
•	Botões interativos:
o	“Saiba Mais” usa router.push("/descarte") para navegar sem recarregar a página.
o	“Entre em Contato” abre a página de contato em nova aba com window.open("/contato", "_blank").
•	A função handleDrop() exibe mensagens conforme a escolha correta ou errada no jogo (“Acertou!” ou “Lixeira errada!”).
•	Utiliza hooks do React (useState, useRouter) para controlar mensagens e navegação.
________________________________________
# CSS (Estilos e Layout)
# Estrutura geral:
•	Define aparência e layout da página com Flexbox e variáveis CSS.
•	Utiliza responsividade e suporte a modo escuro.
# Layout principal (.page, .main, .intro, .ctas):
•	.page: centraliza o conteúdo, define fundo e fonte geral.
•	.main: cria o contêiner branco central com espaçamento e bordas arredondadas.
•	.intro: organiza o título e parágrafo principais.
•	.ctas: estiliza botões com bordas arredondadas e efeitos de hover.
•	Responsivo para telas menores (@media (max-width: 600px)) e compatível com modo escuro (@media (prefers-color-scheme: dark)).
# Estrutura HTML geral:
•	body: remove margens, define fonte padrão e cor de fundo cinza-claro (#f5f5f5).
•	header: cria um cabeçalho verde claro (#1bd39d), com título e navegação centralizados.
•	.header ul: organiza os links com Flexbox, centralizando e aplicando espaçamento.
•	.header a: links em negrito e pretos, que mudam para azul ao passar o mouse.
•	main: define a área principal com conteúdo centralizado e espaçamento entre seções.
•	.conteudo: caixa branca com bordas arredondadas e sombra suave para destacar o conteúdo.
•	ul.custom: remove marcadores e adiciona ícone de 📍 antes de cada item.
•	.footer: rodapé verde claro com texto centralizado e fonte menor.
•	Responsivo:
o	Até 900px: o conteúdo passa a ficar em coluna.
o	Até 500px: o menu do cabeçalho se adapta para uma coluna vertical.

# Vantagens Da Migração
A migração para o Next.js traz diversas melhorias para o projeto. Com a nova estrutura, o site ficou mais organizado e fácil de manter, já que cada parte foi dividida em componentes reutilizáveis. Além disso, a navegação se tornou mais rápida e fluida, sem a necessidade de recarregar a página a cada clique. Outro ponto positivo é a adaptação automática do layout para diferentes tamanhos de tela, garantindo uma boa experiência tanto no computador quanto no celular. Por fim, o Next.js contribui para um melhor desempenho e posicionamento nos buscadores, tornando o projeto mais moderno e eficiente.

Página Inicial (index.js / HomePage)
Essa é a parte mais interativa do seu site.
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
Cabeçalho:
- use client: indica que esse componente é interativo (renderizado no cliente, não no servidor).
- useState cria variáveis reativas (para armazenar o resultado do jogo).
- useRouter permite navegar entre páginas no Next.js.

Jogo de arrastar e soltar:
const handleDrop = (e, tipoLixeira) => {
  e.preventDefault()
  const item = e.dataTransfer.getData("tipo")

  if (item === tipoLixeira) {
    setMensagem("✅ Acertou! Bom descarte!")
  } else {
    setMensagem("❌ Lixeira errada! Tente de novo.")
  }
}
- handleDrop é chamado quando o usuário solta um item sobre a lixeira.
- Se o tipo do item combina com o tipo da lixeira, mostra a mensagem de acerto.
Outras funções:
const handleDragStart = (e, tipo) => {
  e.dataTransfer.setData("tipo", tipo)
}
const allowDrop = (e) => e.preventDefault()
- handleDragStart: define qual o tipo do item arrastado (“eletrônico” ou “plástico”).
- allowDrop: permite que algo seja solto sobre o elemento (necessário no HTML5 drag & drop).


Navegação entre páginas:
<button onClick={() => router.push("/descarte")}>Saiba Mais</button>
<button onClick={() => window.open("/contato", "_blank")} style={{ marginLeft: 10 }}>
  Entre em Contato
</button>
- O primeiro botão usa router.push → navega dentro do site (SPA).
- O segundo usa window.open → abre a página de contato em uma nova aba.

------------------------------------------------------------------------------------------------------------------------------

Página de Descarte (DescartePage)
export default function DescartePage() {
  return (
    <section className="conteudo">
      <h2>Descarte Correto do Lixo Eletrônico...</h2>
      <p>Você já parou para pensar...</p>
      <ul className="custom">
        <li>Celulares...</li>
        ...
      </ul>
      ...
    </section>
  )
}
O que faz:
- Outra página de conteúdo informativo, explicando o descarte correto do lixo eletrônico.
- Usa várias <h2>, <p>, <ul> e <li> para organizar as seções.
- A classe custom nos <ul> é estilizada para colocar emojis 📍 antes dos itens no CSS:
- ul.custom li::before {
-   content: "📍 ";
}
- Essa página é acessada por /descarte (graças ao Next.js, o nome do arquivo vira a rota).
------------------------------------------------------------------------------------------------------------------------------

Página de Contato (ContatoPage)
export default function ContatoPage() {
  return (
    <section className="conteudo">
      <h2>Entre em Contato</h2>
      <form>
        <label>Nome: </label>
        <input type="text" required />
        <br/>
        <br/>
        <label>Email: </label>
        <input type="email" required />
        <br/>
        <br/>
        <label>Mensagem: <br/></label>
        <textarea rows="4"></textarea>
        <br/>
        <br/>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
O que faz:
- É um componente React exportado como página (ContatoPage).
- Mostra um formulário simples com campos de nome, e-mail e mensagem.
- O section tem a classe conteudo, definida no CSS global, que dá fundo branco, sombra e bordas arredondadas.
- <br/> é usado para espaçar os campos (mas pode ser substituído por CSS, o que é mais moderno).
------------------------------------------------------------------------------------------------------------------------------

Layout Principal (layout.js)
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Descarte de Lixo Eletrônico',
  description: 'Aprenda a descartar seu lixo eletrônico corretamente.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header className="header">
          <h1>Descarte Consciente de Lixo Eletrônico</h1>
          <nav>
            <ul>
              <li><Link href="/">Página Inicial</Link></li>
              <li><Link href="/descarte">Como Descartar</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <p>Desenvolvido por Enzo Pagliarini, João Vitor, Alex Cardoso e Guilherme</p>
          <p className="slogan">Cuide do planeta, recicle hoje para viver amanhã.</p>
        </footer>
      </body>
    </html>
  )
}
O que faz:
- É o template principal de todas as páginas.
- Define o HTML comum (cabeçalho, navegação e rodapé).
- {children} → insere o conteúdo da página atual.
- metadata → define título e descrição para SEO.
------------------------------------------------------------------------------------------------------------------------------

Estilo Global (globals.css)
Define o visual geral de todo o site.
Exemplo de partes principais:
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}
header {
  background-color: #1bd39d;
  color: black;
  text-align: center;
  padding: 20px;
}
.conteudo {
  width: 65%;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}
Isso controla:
- Fonte, cores e espaçamento.
- Estilo do cabeçalho, conteúdo central e rodapé.
- Responsividade com @media (para telas menores).
------------------------------------------------------------------------------------------------------------------------------

. Header e Footer Separados
Esses arquivos servem para reutilizar o cabeçalho e rodapé em outros layouts ou páginas.
- Header.js → tem o título e os links de navegação.
- Footer.js → tem os créditos e o texto final.
Eles são equivalentes aos blocos de <header> e <footer> dentro do layout.js.
------------------------------------------------------------------------------------------------------------------------------
Pagina BeneficiosPage() e Pagina CategoriaPage()
1. Uso de "use client"

O comando abaixo indica que o componente será renderizado no lado do cliente, permitindo o uso de hooks como useState e useEffect:

"use client"

Isso é essencial para componentes interativos, como requisições API e eventos no navegador.

2. Estados e Efeitos (useState e useEffect)

O componente BeneficiosPage utiliza três estados:

const [ciLoading, setCiLoading] = useState(true)
const [ciError, setCiError] = useState(null)
const [ciData, setCiData] = useState(null)


Eles controlam:
carregamento,
erro,
dados da API.
O carregamento da API ocorre no useEffect:

useEffect(() => {
  fetchCarbonIntensity()
}, [])


O array vazio garante que a função será executada apenas uma vez, quando o componente montar.

3. Função fetchCarbonIntensity()

Essa função faz a requisição à API de intensidade de carbono do Reino Unido:

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


Essa função garante:

tratamento de erro,

loading,

salvamento do resultado no estado.

4. Renderização Condicional

Dependendo do estado, o componente mostra:

🔸 Carregando:
{ciLoading && <p>Carregando intensidade...</p>}

🔸 Erro:
{ciError && (
  <div style={{ color: "#c00" }}>
    <p>Erro: {ciError}</p>
  </div>
)}

🔸 Dados carregados:
{!ciLoading && !ciError && ciData && (
  <div>
    <p>{new Date(ciData.from).toLocaleString()} → {new Date(ciData.to).toLocaleString()}</p>
    <p>{ciData.intensity.actual ?? ciData.intensity.forecast} gCO₂/kWh</p>
    <p>Índice: {ciData.intensity.index}</p>
  </div>
)}


Esse é um padrão essencial ao trabalhar com APIs em React.

5. Página de Categorias (CategoriasPage)

Essa página lista todas as categorias de reciclagem usando dados importados:

import { categorias } from "./data"


Cada item é exibido como um card clicável com:

<Link key={categoria.id} href={`/categorias/${categoria.id}`}>
  <div> ... </div>
</Link>


O layout usa CSS inline e grid responsivo, criando cartões com efeitos de hover:

display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"

6. Rota Dinâmica de Categoria (CategoriaPage)

A página usa o hook useParams para ler o ID da categoria na URL:

const params = useParams()
const categoria = getCategoria(params.categoria)


Se a categoria não existir:

if (!categoria) {
  return <h2>Categoria não encontrada</h2>
}


Se existir, exibe:

nome,

descrição,

benefícios,

instruções de descarte.

Trecho principal:

<h2>{categoria.nome}</h2>
<p>{categoria.descricao}</p>

<h3>Benefícios</h3>
<ul>
  {categoria.beneficios.map((b, i) => (
    <li key={i}>{b}</li>
  ))}
</ul>

<h3>Como Descartar</h3>
<ul>
  {categoria.comoDescartar.map((c, i) => (
    <li key={i}>{c}</li>
  ))}
</ul>


Isso transforma /categorias/[id] em rotas dinâmicas, como:

/categorias/plastico  
/categorias/vidro  
/categorias/metais

7. Estilização Inline

O projeto utiliza estilos direto no JSX:

const boxStyle = {
  border: "1px solid #ddd",
  padding: 12,
  borderRadius: 8
}


Isso permite componentes independentes sem necessidade de CSS externo.

Nomes e Ra:  
João Vitor Gonçalves / 10737592 
Enzo Carvalho Pagliarini / 10425707 
Alex Cardoso Oliveira / 10736415 
Guilherme Gomes Ferransi / 10403372 
