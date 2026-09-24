// Paths (cv, media) have no leading slash so they work under any Vite `base`.

export const profile = {
  name: '[Firstname Lastname]',
  role: 'Engineering student, computer science',
  institution: '[University], Morocco',
  abstract:
    '[Two to three sentences: what you study, what you work on in machine learning / data science / MLOps, and what you are looking for next.]',
  keywords: ['[Research interest 1]', '[Research interest 2]', '[Research interest 3]'],
  cvUrl: 'cv.pdf',
}

// Shared by the intro buttons and the contact section.
export const links = {
  email: '[you@example.com]',
  github: 'https://github.com/[username]',
  linkedin: 'https://www.linkedin.com/in/[username]',
}

// Order here = order in the nav and on the page, after the introduction.
// `id` is the anchor (#contact).
export const sections = [
  { id: 'contact', label: 'Contact' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'volunteering', label: 'Volunteering' },
]

export const projects = [
  {
    title: '[Project title]',
    description: '[One or two sentences: the problem and why it matters.]',
    method: '[Technique / approach, e.g. model, pipeline, dataset]',
    result: '[Outcome, ideally with a number, e.g. +12% F1 over baseline]',
    github: 'https://github.com/[username]/[repo]',
  },
  {
    title: '[Project title]',
    description: '[One or two sentences: the problem and why it matters.]',
    method: '[Technique / approach]',
    result: '[Outcome with a number]',
    github: 'https://github.com/[username]/[repo]',
  },
  {
    title: '[Project title]',
    description: '[One or two sentences: the problem and why it matters.]',
    method: '[Technique / approach]',
    result: '[Outcome with a number]',
    github: 'https://github.com/[username]/[repo]',
  },
]

export const experience = [
  {
    role: '[Job title, e.g. Machine Learning Intern]',
    organization: '[Company]',
    location: '[City, Country]',
    dates: '[MMM YYYY – MMM YYYY]',
    points: [
      '[What you built or did, with the tools used]',
      '[Measurable impact, e.g. cut inference time by 30%]',
    ],
  },
  {
    role: '[Job title]',
    organization: '[Company]',
    location: '[City, Country]',
    dates: '[MMM YYYY – MMM YYYY]',
    points: ['[What you built or did]', '[Measurable impact]'],
  },
]

export const education = [
  {
    degree: '[Engineering degree, Computer Science]',
    institution: '[University]',
    location: '[City], Morocco',
    dates: '[YYYY – YYYY]',
    details: ['[Relevant coursework, GPA or ranking, thesis topic]'],
  },
  {
    degree: '[Preparatory classes / previous degree]',
    institution: '[School]',
    location: '[City], Morocco',
    dates: '[YYYY – YYYY]',
    details: [],
  },
]

export const certifications = [
  { name: '[Certification name]', issuer: '[Issuer]', date: '[YYYY]', url: '[https://credential-link]' },
  { name: '[Certification name]', issuer: '[Issuer]', date: '[YYYY]', url: '' },
]

// Array (not object) so the category order is fixed.
export const skills = [
  { category: 'ML / Data', items: ['[e.g. PyTorch]', '[scikit-learn]', '[pandas]'] },
  { category: 'Programming', items: ['[Python]', '[SQL]', '[Java]'] },
  { category: 'Cloud / MLOps', items: ['[Docker]', '[MLflow]', '[AWS / GCP]'] },
  { category: 'Tools', items: ['[Git]', '[Linux]', '[Jupyter]'] },
  { category: 'Languages', items: ['[Arabic, native]', '[French, fluent]', '[English, fluent]'] },
]

// media item types (files go in public/media/):
//   { type: 'image', src: 'media/photo.webp', alt: 'What the photo shows' }
//   { type: 'video', src: 'media/clip.mp4', poster: 'media/clip.webp', caption: '...' }
//   { type: 'embed', url: 'https://www.youtube-nocookie.com/embed/VIDEO_ID', title: '...' }
export const volunteering = [
  {
    role: '[Role, e.g. President]',
    organization: '[Club / association]',
    dates: '[YYYY – YYYY]',
    points: ['[What you organised or led]', '[Scale or impact, e.g. 200 participants]'],
    media: [],
  },
  {
    role: '[Role]',
    organization: '[Organization]',
    dates: '[YYYY – YYYY]',
    points: ['[What you did]'],
    media: [],
  },
]
