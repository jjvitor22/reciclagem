import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <h1>Descarte Consciente de Lixo Eletrônico</h1>
      <nav>
        <ul>
          <li><Link href="/">Página Inicial</Link></li>
          <li><Link href="/descarte">Como Descartar</Link></li>
          <li><Link href="/contato">Contato</Link></li>
          <li><Link href="/beneficios">Benefícios</Link></li>
        </ul>
      </nav>
    </header>
  )
}