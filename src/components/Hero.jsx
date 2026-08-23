import { useTypewriter } from '../hooks/useTypewriter'
import profilePhoto from '../assets/profile.jpg'

const ROLES = [
  'Desenvolvedor Back-end',
  'Java & Spring enthusiast',
  'Sempre aprendendo algo novo',
  'Café -> commit -> deploy',
]

function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="topo" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__portrait">
        <div className="hero__portrait-ring">
          <img src={profilePhoto} alt="Foto de Vitor Lopes" />
        </div>
        <span className="hero__badge">RJ 🌴</span>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Olá, tudo bem? 👋</p>
        <h1>
          Eu sou <span className="hero__name">Vitor Lopes</span>
        </h1>
        <p className="hero__role">
          <span className="hero__caret">{'>'}</span> {typed}
          <span className="hero__cursor">|</span>
        </p>
        <p className="hero__lead">
          Estudante de Ciência da Computação no Rio de Janeiro, construindo APIs
          sólidas com Java e Spring — e aos poucos me aventurando pelo front-end
          por aqui mesmo, nesse portfólio. 🚀
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projetos">
            Ver projetos
          </a>
          <a className="btn btn--ghost" href="#contato">
            Bora conversar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
