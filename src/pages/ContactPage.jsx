import { useState } from 'react'
import Card from '../components/ui/Card'
import CopyEmail from '../components/ui/CopyEmail'
import { contactPage, links } from '../content'

const field =
  'mt-1 block w-full rounded-lg border border-mist bg-card px-3 py-2 text-ink placeholder:text-ink-muted/60'
const label = 'text-sm font-bold'

// status: idle -> sending -> sent | error
function ContactPage() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    try {
      const response = await fetch(`https://formspree.io/f/${contactPage.formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Relative link back to the portfolio, works under any Vite `base` */}
      <a href="../" className="text-sm font-bold text-primary hover:text-secondary">
        <span aria-hidden="true">←</span> Back to portfolio
      </a>

      <h1 className="mt-8 text-3xl font-bold">{contactPage.title}</h1>
      <div aria-hidden="true" className="mt-2 h-[3px] w-10 bg-sun" />
      <p className="mt-4 text-ink-muted">{contactPage.intro}</p>

      <Card className="mt-8">
        {status === 'sent' ? (
          <div role="status">
            <p className="font-bold">{contactPage.success}</p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-bold text-primary hover:text-secondary"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className={label}>Name</span>
              <input name="name" type="text" required autoComplete="name" className={field} />
            </label>

            {/* Formspree uses the "email" field as the reply-to address */}
            <label className="block">
              <span className={label}>Your email</span>
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>

            <label className="block">
              <span className={label}>Message</span>
              <textarea name="message" required rows={6} maxLength={5000} className={field} />
            </label>

            <input type="hidden" name="_subject" value="New message from your portfolio" />
            {/* Honeypot: hidden from people, bots fill it, Formspree drops those */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-lg bg-sun px-5 py-2 font-bold text-ink hover:bg-sun/80 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>

            {status === 'error' && (
              <div role="alert" className="space-y-2 text-sm">
                <p>{contactPage.error}</p>
                <CopyEmail email={links.email} />
              </div>
            )}
          </form>
        )}
      </Card>
    </main>
  )
}

export default ContactPage
