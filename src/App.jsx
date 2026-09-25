import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Distinctions from './components/Distinctions'
import Education from './components/Education'
import Experience from './components/Experience'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Volunteering from './components/Volunteering'
import { sections } from './content'

// Maps each id in content.js `sections` to its component, so the page
// renders in whatever order content.js lists them.
const sectionComponents = {
  contact: Contact,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  education: Education,
  distinctions: Distinctions,
  certifications: Certifications,
  volunteering: Volunteering,
}

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md bg-card px-3 py-2 font-bold text-primary focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-30"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <Intro />
        {sections.map(({ id }) => {
          const SectionComponent = sectionComponents[id]
          return <SectionComponent key={id} />
        })}
      </main>
    </>
  )
}

export default App
