import { useTypewriter } from '../hooks/useTypewriter'
import profilePhoto from '../assets/profile.jpg'

const ROLES = [
  'Desenvolvedor Back-end',
  'Java & Spring enthusiast',
  'Sempre aprendendo algo novo',
  'Café -> commit -> deploy',
]

const SKILLS = [
  { name: 'Java', emoji: '☕' },
  { name: 'Spring', emoji: '🍃' },
  { name: 'MySQL', emoji: '🗄️' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Git', emoji: '🔧' },
  { name: 'HTML & CSS', emoji: '🎨' },
  { name: 'React', emoji: '⚛️' },
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

        <div className="hero__skills">
          {SKILLS.map((skill) => (
            <span key={skill.name} className="chip">
              <span aria-hidden="true">{skill.emoji}</span> {skill.name}
            </span>
          ))}
        </div>

        <a className="btn btn--primary" href="#topo">
          Sobre mim
        </a>
      </div>
    </section>
  )
}

export default Hero
