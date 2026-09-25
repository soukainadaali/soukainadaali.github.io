import { experience } from '../content'
import Entry from './ui/Entry'
import Section from './ui/Section'

function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-8">
        {experience.map((job, index) => (
          <Entry
            key={index}
            title={job.role}
            subtitle={job.organization}
            dates={job.dates}
            meta={job.location}
            points={job.points}
          />
        ))}
      </div>
    </Section>
  )
}

export default Experience
