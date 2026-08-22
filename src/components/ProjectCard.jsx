import { useRef } from 'react'

function ProjectCard({ project }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y / rect.height) - 0.5) * -10
    const rotateY = ((x / rect.width) - 0.5) * 10
    card.style.setProperty('--rx', `${rotateX}deg`)
    card.style.setProperty('--ry', `${rotateY}deg`)
    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  return (
    <article
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card__glow" aria-hidden="true" />
      <span className="project-card__emoji">{project.emoji}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <ul className="project-card__stack">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <a
        className="project-card__link"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        Ver no GitHub <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}

export default ProjectCard
