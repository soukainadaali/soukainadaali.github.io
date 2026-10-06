import { volunteering } from '../content'
import Entry from './ui/Entry'
import MediaGallery from './ui/MediaGallery'
import Section from './ui/Section'

function Volunteering() {
  return (
    <Section id="volunteering">
      <div className="space-y-10">
        {volunteering.map((activity, index) => (
          <Entry
            key={index}
            title={activity.role}
            subtitle={activity.organization}
            dates={activity.dates}
            points={activity.points}
          >
            <MediaGallery media={activity.media} columns={activity.mediaColumns} />
          </Entry>
        ))}
      </div>
    </Section>
  )
}

export default Volunteering
