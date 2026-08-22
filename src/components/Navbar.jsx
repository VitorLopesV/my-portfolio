import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#topo" className="navbar__brand">
        <span className="navbar__prompt">~/</span>vitor.lopes
      </a>

      <button
        className={`navbar__toggle ${open ? 'is-open' : ''}`}
        aria-label="Abrir menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          className="navbar__cta"
          href="https://github.com/VitorLopesV"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}

export default Navbar
