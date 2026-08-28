import { useReveal } from '../hooks/useReveal'

const CONTACTS = [
  {
    label: 'E-mail',
    value: 'vitorvtlopes@gmail.com',
    href: 'mailto:vitorvtlopes@gmail.com',
    emoji: '📧',
  },
  {
    label: 'LinkedIn',
    value: 'vitorlopesvieira',
    href: 'https://www.linkedin.com/in/vitorlopesvieira',
    emoji: '💼',
  },
  {
    label: 'GitHub',
    value: 'VitorLopesV',
    href: 'https://github.com/VitorLopesV',
    emoji: '💻',
  },
  {
    label: 'Instagram',
    value: '@vetelopes_',
    href: 'https://instagram.com/vetelopes_',
    emoji: '📸',
  },
]

function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section id="contato" className="section">
      <div ref={ref} className={`contact ${visible ? 'is-visible' : ''}`}>
        <div className="section__heading">
          <span className="section__tag">04. Contato</span>
          <h2>Bora trocar uma ideia?</h2>
          <p className="contact__lead">
            Aberto a oportunidades, colaborações ou só um papo sobre código.
            Escolha seu canal favorito 👇
          </p>
        </div>

        <div className="contact__grid">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              className="contact__card"
              href={c.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__emoji">{c.emoji}</span>
              <span>
                <strong>{c.label}</strong>
                <span className="contact__value">{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
