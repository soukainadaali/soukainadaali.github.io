import { sections } from '../../content'

// Heading text and number come from `sections` in content.js, so reordering
// there renumbers everything. The sun bar echoes the one under the name.
// scroll-mt keeps the heading visible below the sticky nav after a jump.
function Section({ id, children }) {
  const index = sections.findIndex((section) => section.id === id)
  const label = sections[index]?.label

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20 py-10">
      <h2 id={`${id}-heading`} className="text-2xl font-bold text-ink">
        <span className="text-primary">{index + 1}.</span> {label}
      </h2>
      <div aria-hidden="true" className="mt-2 mb-6 h-[3px] w-10 bg-sun" />
      {children}
    </section>
  )
}

export default Section
