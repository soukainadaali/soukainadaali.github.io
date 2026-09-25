import { useEffect, useRef, useState } from 'react'

// Email address plus a Copy button. With `href`, the address is also a link.
function CopyEmail({ email, href }) {
  const emailRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      // Clipboard unavailable or blocked: select the address so Ctrl+C works.
      const range = document.createRange()
      range.selectNodeContents(emailRef.current)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
    }
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      {href ? (
        <a
          ref={emailRef}
          href={href}
          className="break-all text-primary underline decoration-mist underline-offset-4 hover:text-secondary hover:decoration-secondary"
        >
          {email}
        </a>
      ) : (
        <span ref={emailRef} className="break-all select-all">
          {email}
        </span>
      )}
      <button
        type="button"
        onClick={copyEmail}
        className="min-w-24 rounded-lg border border-primary px-3 py-1 text-sm font-bold text-primary hover:border-secondary hover:text-secondary"
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </button>
      <span role="status" className="sr-only">
        {copied ? 'Email address copied' : ''}
      </span>
    </span>
  )
}

export default CopyEmail
