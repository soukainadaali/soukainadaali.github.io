import { sections } from '../../content'

// Heading text comes from `sections` in content.js, so labels live in one place.
// scroll-mt keeps the heading visible below the sticky nav after a jump.
function Section({ id, children }) {
  const label = sections.find((section) => section.id === id)?.label

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20 py-10">
      <h2
        id={`${id}-heading`}
        className="mb-6 text-sm font-bold tracking-[0.15em] text-primary uppercase"
      >
        {label}
      </h2>
      {children}
    </section>
  )
}

export default Section
