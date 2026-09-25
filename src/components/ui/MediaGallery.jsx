import ExternalLink from './ExternalLink'

const tile = 'aspect-[4/3] w-full rounded-[10px] border border-mist object-cover'

function MediaItem({ item }) {
  if (item.type === 'image') {
    // Opens the full-size file in a new tab (no lightbox for now).
    return (
      <ExternalLink href={item.src} className="block rounded-[10px]">
        <img src={item.src} alt={item.alt} loading="lazy" className={tile} />
      </ExternalLink>
    )
  }

  if (item.type === 'video') {
    // preload="none": only the poster loads until the visitor presses play.
    return (
      <video
        controls
        preload="none"
        poster={item.poster}
        aria-label={item.caption}
        className={`${tile} bg-ink`}
      >
        <source src={item.src} type="video/mp4" />
      </video>
    )
  }

  if (item.type === 'embed') {
    return (
      <iframe
        src={item.url}
        title={item.title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="aspect-video w-full rounded-[10px] border border-mist"
      />
    )
  }

  return null
}

// Images and videos are tiles; embeds take a full row (players need the width).
function MediaGallery({ media }) {
  if (!media?.length) return null

  return (
    <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
      {media.map((item, i) => (
        <figure key={i} className={item.type === 'embed' ? 'col-span-full' : ''}>
          <MediaItem item={item} />
          {item.caption && (
            <figcaption className="mt-1 text-sm text-ink-muted">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

export default MediaGallery
