import { useEffect, useRef, useState } from 'react'
import { links } from '../content'
import Card from './ui/Card'
import Section from './ui/Section'

function Contact() {
  const emailRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email)
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
    <Section id="contact">
      <Card className="flex max-w-xl flex-wrap items-center gap-3">
        <span className="font-bold">Email</span>
        <span ref={emailRef} className="break-all select-all">
          {links.email}
        </span>
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
      </Card>
    </Section>
  )
}

export default Contact
