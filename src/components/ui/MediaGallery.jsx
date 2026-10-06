import ExternalLink from './ExternalLink'

const tile = 'aspect-[4/3] w-full rounded-[10px] border border-mist object-cover'

// Beside a taller item: from `sm` up the photo is taken out of flow and fills
// its cell, so the neighbour sets the row height and the photo is cropped to it.
const fillLink = 'block rounded-[10px] sm:relative sm:flex-1'
const fillImage = `${tile} sm:absolute sm:inset-0 sm:aspect-auto sm:h-full`

// Recognised by its link too, so a post entered as `embed` still works.
const isInstagram = (item) => item.type === 'instagram' || Boolean(item.url?.includes('instagram.com'))

// Accepts the plain post link as well: Instagram only allows framing of /embed/.
function instagramEmbedUrl(url) {
  const base = url.split('?')[0].replace(/\/embed\/?$/, '').replace(/\/$/, '')
  return `${base}/embed/`
}

function MediaItem({ item, fill }) {
  if (isInstagram(item)) {
    // Same approach as LinkedIn, but it sits in one column (see `pair` below).
    return (
      <iframe
        src={instagramEmbedUrl(item.url)}
        title={item.title}
        loading="lazy"
        allowFullScreen
        className="h-[560px] w-full rounded-[10px] border border-mist bg-card"
      />
    )
  }

  if (item.type === 'image') {
    // Opens the full-size file in a new tab (no lightbox for now).
    return (
      <ExternalLink href={item.src} className={fill ? fillLink : 'block rounded-[10px]'}>
        <img src={item.src} alt={item.alt} loading="lazy" className={fill ? fillImage : tile} />
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

  if (item.type === 'linkedin') {
    // LinkedIn posts have no fixed shape: fixed height, the post scrolls inside.
    return (
      <iframe
        src={item.url}
        title={item.title}
        loading="lazy"
        allowFullScreen
        className="h-[550px] w-full rounded-[10px] border border-mist bg-card"
      />
    )
  }

  return null
}

// Full class strings so Tailwind generates them. 2 = inside half-width cards.
// pair = two items side by side, stacked on mobile (Instagram needs ~326px).
const gridColumns = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 lg:grid-cols-3',
  pair: 'grid-cols-1 sm:grid-cols-2',
}

const fullRow = ['embed', 'linkedin']

// Images and videos are tiles; embeds take a full row (players need the width).
function MediaGallery({ media, columns = 3 }) {
  if (!media?.length) return null

  // One photo + one Instagram post is always a pair, even without `columns`.
  const hasInstagram = media.some(isInstagram)
  const layout = hasInstagram && media.length === 2 ? 'pair' : columns
  // Only when there is an Instagram post to give the row its height.
  const fill = layout === 'pair' && hasInstagram

  return (
    <div className={`mt-4 grid gap-3 ${gridColumns[layout]}`}>
      {media.map((item, i) => (
        <figure
          key={i}
          className={
            !isInstagram(item) && fullRow.includes(item.type)
              ? 'col-span-full'
              : fill
                ? 'flex flex-col'
                : ''
          }
        >
          <MediaItem item={item} fill={fill} />
          {item.caption && (
            <figcaption className="mt-1 text-sm text-ink-muted">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

export default MediaGallery
