import { experience } from '../content'
import Section from './ui/Section'

function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-8">
        {experience.map((job, index) => (
          <article key={index}>
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-bold">
                {job.role} <span className="font-normal text-ink-muted">· {job.organization}</span>
              </h3>
              <p className="shrink-0 text-sm text-ink-muted">{job.dates}</p>
            </header>
            <p className="mt-0.5 text-sm text-ink-muted">{job.location}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-muted marker:text-sky">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Experience
