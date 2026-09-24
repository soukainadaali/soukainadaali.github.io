// Opens in a new tab; the hidden text tells screen reader users that it does.
function ExternalLink({ href, className = '', children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default ExternalLink
