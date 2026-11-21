import { projects } from '../content'
import Card from './ui/Card'
import ExternalLink from './ui/ExternalLink'
import MediaCarousel from './ui/MediaCarousel'
import Section from './ui/Section'
import Tag from './ui/Tag'

// Projects with the long optional fields get a scrolling text area.
function isLong(project) {
  return project.steps?.length > 0 || project.details?.length > 0
}

function Projects() {
  return (
    <Section id="projects">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} as="article" className="flex flex-col">
            <h3 className="font-bold">{project.title}</h3>

            {/* Cards with the long optional fields (steps/details) scroll inside this
                box so the card stays close to the size of the others. Focusable so
                keyboard users can scroll it with the arrow keys. */}
            <div
              {...(isLong(project) && {
                role: 'region',
                'aria-label': `${project.title}: details`,
                tabIndex: 0,
              })}
              className={
                isLong(project)
                  ? 'mt-2 max-h-56 overflow-y-auto rounded-md pr-3 [scrollbar-color:var(--color-sky)_transparent] [scrollbar-width:thin]'
                  : 'mt-2'
              }
            >
              {project.context && <p className="text-sm text-ink-muted italic">{project.context}</p>}
              {project.team && (
                <p className="mt-1 text-sm text-ink-muted">
                  <span className="font-bold text-ink">Team:</span> {project.team}
                </p>
              )}

              <p className={project.context || project.team ? 'mt-3 text-ink-muted' : 'text-ink-muted'}>
                {project.description}
              </p>

              {/* Method and Result are optional: each line only renders when set. */}
              {project.method && (
                <p className="mt-3 text-sm text-ink-muted">
                  <span className="font-bold text-ink">Method:</span> {project.method}
                </p>
              )}
              {project.result && (
                <p className={`${project.method ? 'mt-1' : 'mt-3'} text-sm text-ink-muted`}>
                  <span className="font-bold text-ink">Result:</span> {project.result}
                </p>
              )}

              {project.steps?.length > 0 && (
                <div className="mt-3 text-sm">
                  <p className="font-bold text-ink">How it works</p>
                  <ol className="mt-1 flex flex-wrap items-baseline gap-x-1.5 gap-y-1 text-ink-muted">
                    {project.steps.map((step, i) => (
                      <li key={i}>
                        {i > 0 && (
                          <span aria-hidden="true" className="mr-1.5 text-primary">
                            →
                          </span>
                        )}
                        <span className="font-bold text-primary">{i + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {project.details?.map((detail, i) => (
                <p key={i} className={`${i === 0 ? 'mt-3' : 'mt-1'} text-sm text-ink-muted`}>
                  <span className="font-bold text-ink">{detail.label}:</span> {detail.text}
                </p>
              ))}

              {project.tags?.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bottom block, pinned to the card bottom so it aligns across a row.
                Each part is optional: media carousel, extra link (e.g. a PDF), GitHub. */}
            <div className="mt-auto flex flex-col items-start">
              {project.media?.length > 0 && (
                <div className="w-full pt-4">
                  <MediaCarousel media={project.media} label={`${project.title}: photos and videos`} />
                </div>
              )}

              {project.link?.url && (
                <ExternalLink
                  href={project.link.url}
                  className="pt-4 font-bold text-primary hover:text-secondary"
                >
                  {project.link.label || project.link.url} <span aria-hidden="true">→</span>
                </ExternalLink>
              )}

              {/* Only rendered when the project has code to link to. */}
              {project.github && (
                <ExternalLink
                  href={project.github}
                  className="pt-4 font-bold text-primary hover:text-secondary"
                >
                  GitHub <span aria-hidden="true">→</span>
                  <span className="sr-only">: {project.title}</span>
                </ExternalLink>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Projects
