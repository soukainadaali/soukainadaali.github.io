// Shared layout for Experience, Education and Volunteering entries.
// `children` renders below the bullets (used for the volunteering gallery).
function Entry({ title, subtitle, dates, meta, points = [], children }) {
  return (
    <article>
      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-bold">
          {title} <span className="font-normal text-ink-muted">· {subtitle}</span>
        </h3>
        <p className="shrink-0 text-sm text-ink-muted">{dates}</p>
      </header>
      {meta && <p className="mt-0.5 text-sm text-ink-muted">{meta}</p>}
      {points.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-muted marker:text-sky">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
      {children}
    </article>
  )
}

export default Entry
