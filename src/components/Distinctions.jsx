import { distinctions } from '../content'
import Card from './ui/Card'
import MediaGallery from './ui/MediaGallery'
import Section from './ui/Section'

// Never 3 per row: the media needs more room than project cards.
function Distinctions() {
  return (
    <Section id="distinctions">
      <div className="grid items-start gap-5 sm:grid-cols-2">
        {distinctions.map((item, index) => (
          <Card key={index} as="article">
            <h3 className="font-bold">{item.title}</h3>
            <p className="mt-2 text-ink-muted">{item.description}</p>
            <MediaGallery media={item.media} columns={2} />
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Distinctions
