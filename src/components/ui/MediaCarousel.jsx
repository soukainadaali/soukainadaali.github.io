import { useEffect, useRef, useState } from 'react'
import ExternalLink from './ExternalLink'

// Visible on hover / keyboard focus; at an end the arrow fades to 30% and uses
// aria-disabled (not `disabled`) so keyboard focus stays on it.
const arrowButton =
  'absolute top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-mist bg-card text-primary opacity-0 transition-opacity hover:text-secondary group-hover:opacity-100 group-focus-within:opacity-100 aria-disabled:cursor-default aria-disabled:hover:text-primary aria-disabled:group-hover:opacity-30 aria-disabled:group-focus-within:opacity-30'

const frame = 'aspect-[4/3] w-full rounded-md border border-mist'

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

// Dashed tile shown instead of a broken image/video when the file is missing.
function Placeholder({ kind }) {
  return (
    <div
      className={`${frame} flex items-center justify-center border-dashed text-sm text-ink-muted`}
    >
      [{kind}]
    </div>
  )
}

function Slide({ item, videoRef }) {
  const [failed, setFailed] = useState(false)

  if (item.type === 'video') {
    if (failed) return <Placeholder kind="Video" />
    return (
      <video
        ref={videoRef}
        src={item.src}
        muted
        controls
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
        className={`${frame} bg-paper object-contain`}
      />
    )
  }

  if (failed) return <Placeholder kind="Image" />
  return (
    <ExternalLink href={item.src} className="block rounded-md">
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`${frame} object-cover`}
      />
    </ExternalLink>
  )
}

// One slide at a time: native horizontal scroll with snap (swipe on touch/trackpad),
// arrow buttons, ← → keys when the track is focused, and dots below.
// A video pauses when it is scrolled away from.
function MediaCarousel({ media, label }) {
  const trackRef = useRef(null)
  const videoRefs = useRef([])
  const [index, setIndex] = useState(0)
  const count = media.length

  useEffect(() => {
    const track = trackRef.current
    function onScroll() {
      setIndex(Math.round(track.scrollLeft / track.clientWidth))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index && !video.paused) video.pause()
    })
  }, [index])

  function goTo(target) {
    if (target < 0 || target >= count) return
    const track = trackRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({
      left: target * track.clientWidth,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  function onKeyDown(event) {
    // Only when the track itself is focused, so video controls keep their keys.
    if (event.target !== trackRef.current) return
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    }
  }

  const caption = media[index]?.caption

  return (
    <div className="group">
      <div className="relative">
        {count > 1 && (
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-disabled={index === 0}
            aria-label="Previous slide"
            className={`${arrowButton} left-2`}
          >
            <Chevron direction="left" />
          </button>
        )}

        <div
          ref={trackRef}
          role="region"
          aria-label={label}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="flex snap-x snap-mandatory overflow-x-auto rounded-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {media.map((item, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              className="w-full flex-none snap-start"
            >
              <Slide item={item} videoRef={(el) => (videoRefs.current[i] = el)} />
            </div>
          ))}
        </div>

        {count > 1 && (
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-disabled={index === count - 1}
            aria-label="Next slide"
            className={`${arrowButton} right-2`}
          >
            <Chevron direction="right" />
          </button>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 flex justify-center gap-1">
          {media.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1} of ${count}`}
              aria-current={i === index ? 'true' : undefined}
              className="rounded-full p-1"
            >
              <span
                className={
                  i === index
                    ? 'block size-2.5 rounded-full bg-primary'
                    : 'block size-2.5 rounded-full border border-ink-muted/70'
                }
              />
            </button>
          ))}
        </div>
      )}

      {caption && (
        <p aria-live="polite" className="mt-1 text-center text-sm text-ink-muted">
          {caption}
        </p>
      )}
    </div>
  )
}

export default MediaCarousel
