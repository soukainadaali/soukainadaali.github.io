import { links, profile } from '../content'
import ExternalLink from './ui/ExternalLink'

const outlineButton =
  'rounded-lg border border-primary px-5 py-2 font-bold text-primary hover:border-secondary hover:text-secondary'

// "Paper title block": name, accent bar, affiliation, abstract, keywords, links.
function Intro() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="scroll-mt-20 border-b border-mist pt-14 pb-12 text-center sm:pt-20"
    >
      <h1 className="font-script text-6xl leading-normal text-ink sm:text-7xl">{profile.name}</h1>
      <div aria-hidden="true" className="mx-auto h-[3px] w-16 bg-sun" />

      <p className="mt-5 text-primary">
        {profile.role} · {profile.institution}
      </p>

      <div className="mx-auto mt-10 max-w-[470px] text-left">
        <p className="text-xs font-bold tracking-[0.15em] text-primary uppercase">Abstract</p>
        <p className="mt-2 leading-relaxed">{profile.abstract}</p>
        <p className="mt-4 leading-relaxed">
          <span className="font-bold text-primary">Keywords:</span>{' '}
          <span className="italic">{profile.keywords.join(' · ')}</span>
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href={profile.cvUrl}
          download
          className="rounded-lg bg-sun px-5 py-2 font-bold text-ink hover:bg-sun/80"
        >
          Download CV
        </a>
        <ExternalLink href={links.github} className={outlineButton}>
          GitHub
        </ExternalLink>
        <ExternalLink href={links.linkedin} className={outlineButton}>
          LinkedIn
        </ExternalLink>
      </div>
    </section>
  )
}

export default Intro
