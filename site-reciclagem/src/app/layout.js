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
              <li><Link href="/beneficios">Benefícios</Link></li>
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