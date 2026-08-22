import { useReveal } from '../hooks/useReveal'

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

function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="sobre" className="section">
      <div ref={ref} className={`about ${visible ? 'is-visible' : ''}`}>
        <div className="section__heading">
          <span className="section__tag">01. Sobre mim</span>
          <h2>Quem escreve esse código sou eu</h2>
        </div>

        <div className="about__grid">
          <p className="about__text">
            Sou desenvolvedor de software com experiência em back-end usando
            <strong> Java</strong> e o ecossistema <strong>Spring</strong>.
            Atualmente curso Ciência da Computação e adoro aprender coisas
            novas — desde uma anotação nova do Spring até, aparentemente,
            React e efeitozinhos de front-end. 😄
            <br />
            <br />
            Gosto de resolver problemas reais com código organizado, e curto
            projetos que misturam lógica com um pouco de criatividade — seja
            uma API pra clínica veterinária ou um app pra controlar estoque de
            vinho.
          </p>

          <div className="about__skills">
            {SKILLS.map((skill) => (
              <span key={skill.name} className="chip">
                <span aria-hidden="true">{skill.emoji}</span> {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
