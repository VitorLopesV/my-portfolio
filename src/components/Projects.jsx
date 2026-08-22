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
    name: 'Pensionato',
    emoji: '🏠',
    description:
      'Desafio de faculdade: sistema para gerenciar o aluguel de quartos de um pensionato entre grupos de alunos.',
    stack: ['Java'],
    url: 'https://github.com/VitorLopesV/Pensionato',
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
    name: 'FinanceFlow',
    emoji: '💸',
    description:
      'Projeto voltado para gestão financeira pessoal, ainda em evolução.',
    stack: ['Java'],
    url: 'https://github.com/VitorLopesV/FinanceFlow',
  },
]

function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projetos" className="section">
      <div ref={ref} className={`projects ${visible ? 'is-visible' : ''}`}>
        <div className="section__heading">
          <span className="section__tag">02. Projetos</span>
          <h2>Coisas que eu construí (e dos que tenho orgulho)</h2>
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
