import { useReveal } from '../hooks/useReveal'

const HOBBIES = [
  {
    name: 'Assistir anime/série',
    emoji: '🎬',
    description:
      'Sempre tenho um anime ou uma série rodando. É meu jeito favorito de desligar a cabeça depois de um dia inteiro de código.',
  },
  {
    name: 'Tempo de qualidade com a família',
    emoji: '🏡',
    description:
      'É o que mais me recarrega de verdade. Um papo, uma risada, estar perto de quem eu amo já é suficiente.',
  },
  {
    name: 'Jogar',
    emoji: '🎮',
    description:
      'De vez em quando troco o teclado do código pelo controle. Não sou nenhum pro, mas tenho meus momentos de gloria.',
  },
]

function Hobbies() {
  const [ref, visible] = useReveal()

  return (
    <section id="hobbies" className="section">
      <div ref={ref} className={`hobbies ${visible ? 'is-visible' : ''}`}>
        <div className="section__heading">
          <span className="section__tag">03. Hobbies</span>
          <h2>Oque gosto de fazer fora do código</h2>
        </div>

        <div className="hobbies__grid">
          {HOBBIES.map((hobby) => (
            <article key={hobby.name} className="hobby-card">
              <div className="hobby-card__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="hobby-card__emoji">{hobby.emoji}</span>
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
