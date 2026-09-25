import { links } from '../content'
import Card from './ui/Card'
import CopyEmail from './ui/CopyEmail'
import Section from './ui/Section'

// The address links to the contact form page; Copy stays for people who
// prefer their own email app. Relative href works under any Vite `base`.
function Contact() {
  return (
    <Section id="contact">
      <Card className="flex max-w-xl flex-wrap items-center gap-3">
        <span className="font-bold">Email</span>
        <CopyEmail email={links.email} href="contact/" />
      </Card>
    </Section>
  )
}

export default Contact
