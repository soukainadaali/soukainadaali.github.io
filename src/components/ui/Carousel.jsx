import { Children, useCallback, useEffect, useRef, useState } from 'react'

const arrowButton =
  'absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-mist bg-card text-primary hover:text-secondary aria-disabled:cursor-default aria-disabled:opacity-30 aria-disabled:hover:text-primary'

function Chevron({ direction }) {
  return (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M12.5 4 6.5 10l6 6' : 'M7.5 4l6 6-6 6'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Native horizontal scroll with snap: swipe/trackpad/arrow keys work without JS.
// The buttons scroll one "page" (the visible width); each fades at its end.
// aria-disabled (not `disabled`) keeps keyboard focus on the button at the end.
function Carousel({ label, children }) {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateButtons = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanPrev(track.scrollLeft > 1)
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    updateButtons()
    track.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      track.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [updateButtons])

  function scrollPage(direction) {
    if ((direction < 0 && !canPrev) || (direction > 0 && !canNext)) return
    const track = trackRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollPage(-1)}
        aria-disabled={!canPrev}
        aria-label={`Previous ${label}`}
        className={`${arrowButton} left-0 lg:-left-5`}
      >
        <Chevron direction="left" />
      </button>

      <div
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto rounded-[10px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div className="w-4/5 flex-none snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]">
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollPage(1)}
        aria-disabled={!canNext}
        aria-label={`Next ${label}`}
        className={`${arrowButton} right-0 lg:-right-5`}
      >
        <Chevron direction="right" />
      </button>
    </div>
  )
}

export default Carousel
