import { links } from '../content'
import Card from './ui/Card'
import CopyEmail from './ui/CopyEmail'
import Section from './ui/Section'


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
