import { useReveal } from '../hooks/useReveal'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    name: 'Veterinary Clinic API',
    emoji: '🐾',
    description:
      'API REST para gestão de clínica veterinária: clientes, pets, consultas e vacinas, construída com Java e Spring Boot.',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    url: 'https://github.com/VitorLopesV/veterinary-clinic-api',
  },
  {
    name: 'Silvinhos',
    emoji: '🍷',
    description:
      'App mobile em React Native para controle de estoque de uma vinícola, com cadastro e acompanhamento de produtos.',
    stack: ['React Native', 'JavaScript'],
    url: 'https://github.com/VitorLopesV/Silvinhos',
  },
  {
    name: 'ClipStash',
    emoji: '📷',
    description:
      'Projeto criado para resolver uma dor real: eu salvava referências de vídeos e conteúdos em vários lugares diferentes (notas, favoritos, mensagens) e no fim perdia o controle de quais eu já tinha usado e quais ainda estavam pendentes.',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    url: 'https://github.com/VitorLopesV/clip-stash',
  },
  {
    name: 'ContaJusta',
    emoji: '🧾',
    description:
      'Projeto final da matéria de Java da faculdade, focado em divisão de contas de forma simples e justa.',
    stack: ['Java'],
    url: 'https://github.com/VitorLopesV/ContaJusta',
  },
  {
    name: 'Folder Organizer',
    emoji: '🗂️',
    description:
      'Ferramenta que organiza automaticamente os arquivos de uma pasta, agrupando por tipo e categoria.',
    stack: ['Java'],
    url: 'https://github.com/VitorLopesV/folder-organizer',
  },
  {
    name: 'Simple-flow',
    emoji: '💸',
    description:
      'Sistema de controle financeiro pessoal criado para acabar com a bagunça das planilhas. Organiza entradas, saídas, cartões de crédito e faturas de forma simples e rápida',
    stack: ['HTML','CSS','Vue', 'Typescript'],
    url: 'https://github.com/VitorLopesV/simple-flow',
  },
]

function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projetos" className="section">
      <div ref={ref} className={`projects ${visible ? 'is-visible' : ''}`}>
        <div className="section__heading">
          <span className="section__tag">02. Projetos</span>
          <h2>Alguns dos meus projetos</h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
