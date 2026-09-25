import { useEffect, useRef, useState } from 'react'
import { profile, sections } from '../content'

// Inline links from lg up; below that, a Menu button toggles a dropdown list.
// Escape closes the list and returns focus to the button.
// z-20: above in-page layers such as the carousel arrows (z-10).
function Nav() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!open) return
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-20 border-b border-mist bg-paper">
      <nav
        aria-label="Sections"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a href="#top" className="font-bold text-ink hover:text-secondary">
          {profile.name}
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="rounded-md border border-mist px-3 py-1 text-sm font-bold text-primary hover:text-secondary lg:hidden"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul
          id="nav-links"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b border-mist bg-paper px-4 py-2 sm:px-6 lg:static lg:flex lg:flex-row lg:gap-6 lg:border-0 lg:p-0`}
        >
          {sections.map(({ id, label, navLabel }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-primary hover:text-secondary lg:py-0"
              >
                {navLabel ?? label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
