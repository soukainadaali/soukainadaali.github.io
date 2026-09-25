import { skills } from '../content'
import Section from './ui/Section'
import Tag from './ui/Tag'

function Skills() {
  return (
    <Section id="skills">
      <dl className="space-y-4">
        {skills.map(({ category, items }) => (
          <div key={category} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:items-start">
            <dt className="text-sm font-bold sm:pt-1">{category}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Skills
