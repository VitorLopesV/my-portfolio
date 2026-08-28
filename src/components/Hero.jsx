import { useTypewriter } from '../hooks/useTypewriter'
import profilePhoto from '../assets/profile.jpg'

const ROLES = [
  'Desenvolvedor Back-end',
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

        <p className="hero__about">
          Desenvolvedor de Software com mais de 3 anos de experiência no mercado de tecnologia. Atualmente, estou finalizando a graduação em Ciência da Computação na Universidade Estácio de Sá (UNESA) e totalmente mergulhado no universo do desenvolvimento back-end, com foco principal em Java e no ecossistema Spring. No meu dia a dia, coloco a mão na massa desenvolvendo, mantendo e otimizando desde softwares embarcados até arquiteturas de sistemas. Fora do ambiente de trabalho, levo essa paixão por tecnologia para a vida real: no meu tempo livre, procuro qualquer tarefa da minha rotina diária que eu possa automatizar. Além disso, curto bastante compartilhar conhecimento e tenho um perfil no Instagram/tiktok onde dou dicas de programação de forma leve e descontraída para ajudar quem está começando no mundo da tecnologia e faço alguns memes com situações diárias da vida de um desenvolvedor.
        </p>

        <div className="hero__skills">
          {SKILLS.map((skill) => (
            <span key={skill.name} className="chip">
              <span aria-hidden="true">{skill.emoji}</span> {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
