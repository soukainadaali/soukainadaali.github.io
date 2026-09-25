import { certifications } from '../content'
import Card from './ui/Card'
import Carousel from './ui/Carousel'
import ExternalLink from './ui/ExternalLink'
import Section from './ui/Section'

const linkClass = 'text-primary hover:text-secondary'

function Certifications() {
  return (
    <Section id="certifications">
      <Carousel label="certifications">
        {certifications.map((cert, index) => (
          <Card key={index} as="article" className="h-full">
            {/* A4-landscape frame; object-contain so certificate text is never cropped.
                Without an image, a dashed frame of the same size marks the empty slot. */}
            {cert.image ? (
              <ExternalLink href={cert.image} className="mb-4 block rounded-md">
                <img
                  src={cert.image}
                  alt={`Certificate: ${cert.name}`}
                  loading="lazy"
                  className="aspect-[297/210] w-full rounded-md border border-mist bg-card object-contain"
                />
              </ExternalLink>
            ) : (
              <div className="mb-4 flex aspect-[297/210] w-full items-center justify-center rounded-md border border-dashed border-mist text-sm text-ink-muted">
                [Certificate image]
              </div>
            )}
            <h3 className="font-bold">
              {cert.url ? (
                <ExternalLink href={cert.url} className={linkClass}>
                  {cert.name}
                </ExternalLink>
              ) : (
                cert.name
              )}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              {cert.issuer} · {cert.date}
            </p>
          </Card>
        ))}
      </Carousel>
    </Section>
  )
}

export default Certifications
