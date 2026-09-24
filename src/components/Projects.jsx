import { projects } from '../content'
import Card from './ui/Card'
import ExternalLink from './ui/ExternalLink'
import Section from './ui/Section'

function Projects() {
  return (
    <Section id="projects">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} as="article" className="flex flex-col">
            <h3 className="font-bold">{project.title}</h3>
            <p className="mt-2 text-ink-muted">{project.description}</p>
            <p className="mt-3 text-sm text-ink-muted">
              <span className="font-bold text-ink">Method:</span> {project.method}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              <span className="font-bold text-ink">Result:</span> {project.result}
            </p>
            {/* mt-auto pins the link to the bottom so links line up across a row */}
            <ExternalLink
              href={project.github}
              className="mt-auto self-start pt-4 font-bold text-primary hover:text-secondary"
            >
              GitHub <span aria-hidden="true">→</span>
              <span className="sr-only">: {project.title}</span>
            </ExternalLink>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Projects
