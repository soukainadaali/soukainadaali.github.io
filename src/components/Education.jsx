import { education } from '../content'
import Entry from './ui/Entry'
import Section from './ui/Section'

function Education() {
  return (
    <Section id="education">
      <div className="space-y-8">
        {education.map((school, index) => (
          <Entry
            key={index}
            title={school.degree}
            subtitle={school.institution}
            dates={school.dates}
            meta={school.location}
            points={school.details}
          />
        ))}
      </div>
    </Section>
  )
}

export default Education
