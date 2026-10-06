

export const profile = {
  name: 'Soukaina Daali',
  role: 'Data Scientist and Machine Learning Engineer',
  institution: 'ISGA, Rabat, Morocco',
  abstract:
    "I'm a computer science engineering student specializing in big data and artificial intelligence in Morocco with a strong interest in reliable machine learning, especially uncertainty quantification and probabilistic ML. I've gained hands-on experience in MLOps on Azure ML through my internship work. Beyond the technical side, I enjoy building communities, whether through debate, mentoring teams at an international hackathon, or organizing cultural and career events. I'm currently looking for research opportunities in machine learning abroad.",
  keywords: ['Scientific Research', 'Quantitative Uncertainty', 'Machine Learning', 'Data Science', 'MLOps', 'Artificial Intelligence'],
  cvUrl: '',
}


export const links = {
  email: '[soukaina.daali@edu.isga.ma]',
  github: 'https://github.com/soukainadaali',
  linkedin: 'www.linkedin.com/in/soukainadaali',
}

// Messages are delivered by Formspree 
export const contactPage = {
  formspreeId: 'xdekdqbk',
  title: 'Get in touch',
  intro: "[One sentence, e.g. Questions about my work or an opportunity? Send me a message and I'll reply by email.]",
  success: "Thanks, your message was sent. I'll get back to you soon.",
  error: 'Sorry, the message could not be sent. You can email me directly instead:',
}

// Order here = order in the nav and on the page, after the introduction.
// `id` is the anchor (#contact).
export const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  // navLabel (optional): shorter text for the nav when the heading is long.
  { id: 'distinctions', label: 'Scholarships & Distinctions', navLabel: 'Distinctions' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'contact', label: 'Contact' },
]

export const projects = [
  {
    title: 'Satellite Telemetry Anomaly Detection: MLOps on Azure ML',
    description: 'Spacecraft send thousands of telemetry readings that operators cannot inspect by hand, and a missed anomaly can mean a lost mission. This project builds the full pipeline that trains, evaluates, registers and deploys anomaly detectors for NASA SMAP/MSL telemetry.',
    method: 'Per-channel LSTM forecaster on 100-step windows, flagging points whose prediction error exceeds mean + 3 std of training error. Built on Azure ML: versioned data assets, Docker training environment, train and evaluate pipeline, MLflow tracking, grid hyperparameter sweep, F1-gated model registry, and batch endpoints with blue/green deployments.',
    result: 'Automated retraining chain: new data triggers training, evaluation, registration only if F1 improves, and batch scoring, with no manual steps. Two channel models registered and deployed, with a blue/green switch on one endpoint. Baseline point-wise F1 of 0.11 on the best channel.',
    github: 'https://github.com/soukainadaali/satellite-anomaly-mlops',
  },
  {
    title: 'AeroRisk: Aviation Accident Severity Prediction',
    description: 'Predicts how severe an aviation accident is likely to be from aircraft, crew, flight and weather conditions, so safety analysts can spot high-risk situations before they turn fatal.',
    method: 'Cleaned ~29k NTSB accident records joined with NOAA weather data, then compared 6 classifiers (best: LightGBM). MAPIE conformal prediction gives each prediction a 90%-confidence set of possible outcomes, and SHAP explains which factors drive it. A Flask + React app shows the results, with Gemini-generated safety reports.',
    result: 'On the validation set, 87.7% recall on fatal accidents; the 90% confidence sets were correct 89.8% of the time, with 1.75 classes per set on average.',
    github: 'https://github.com/soukainadaali/AeroRisk_anomalyDetection',
  },
  {
    title: 'Bank Customer Churn Prediction',
    description: 'Losing a banking customer costs far more than keeping one. This project predicts which of 10,000 bank customers are likely to leave, so retention teams can act before they do.',
    method: 'EDA, feature engineering, and a comparison of 8 classifiers with class weighting for the 80/20 imbalance; top 3 tuned with RandomizedSearchCV, results presented in a Power BI dashboard.',
    result: 'Tuned LightGBM reached 0.87 AUC-ROC and caught 77% of churners on the held-out test set.',
    github: 'https://github.com/soukainadaali/churn-prediction',
  },
]

export const experience = [
  {
    role: 'MLOps Engineer Intern',
    organization: 'Smartovate',
    location: 'London, United Kingdom, Remote',
    dates: '07/2026 – 08/2026',
    points: [
      'Designed and deployed an end-to-end MLOps pipeline on Azure ML (SDK v2, MLflow, Docker) for LSTM anomaly detection on NASA SMAP/MSL telemetry: data versioning, hyperparameter sweeps, F1-gated model registration, and blue/green batch endpoints.',
      'Chose F1 over validation loss as the promotion criterion after the best-validation-loss sweep configuration scored worse on F1. Registered models from job outputs to keep lineage.',
      'Automated retraining and scoring through an event-driven orchestrator, and adapted the architecture to a restricted Contributor role and quota limits.'
    ],
  },
  {
    role: 'Web Development Intern',
    organization: 'Aditya International',
    location: 'Casablanca, Morocco, Hybrid',
    dates: '08/2024 – 09/2024',
    points: [
      'Participated in the testing phases of a full-stack application (React.js / Laravel / MySQL) and wrote bug reports',
      'Used Git and GitHub for version control and change management',
      'Contributed to the integration and handling of databases within the application architecture'],
  },
]

export const education = [
  {
    degree: 'State Engineer, Artificial Intelligence & Big Data',
    institution: 'ISGA',
    location: 'Rabat, Morocco',
    dates: '2022 – 2027',
    details: ['Ranked 1st of my class for three consecutive years', 'EUR-ACE Accredited'
    ],
  },
  {
    degree: 'Baccalaureate in Physics and Chemistry',
    institution: 'Imam Al Bokhari High School',
    location: 'Temara, Morocco',
    dates: '2021 – 2022',
    details: ['Graduated with honors - (Mention très bien)'],
  },
]

//   While '' the card shows a dashed "[Certificate image]" placeholder frame.
export const certifications = [
  {
    name: 'TOEFL iBT',
    issuer: 'ETS',
    date: '02/2026 - 02/2028',
    url: '[https://credential-link]',
    image: 'public/media/certifications/ets_toefl.png',
  },
  {
    name: 'OCI AI Foundations Associate',
    issuer: 'Oracle',
    date: '10/2025 - 10/2027',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=97EB0771178FFE64C3D053415FF338976363F82E404752615AAE8C5B00EE709D',
    image: 'public/media/certifications/oracle_oci.png',
  },
  {
    name: 'Analyze Data in Azure ML Studio',
    issuer: 'Coursera',
    date: '08/2025',
    url: 'https://coursera.org/share/ada744c75ba33deecaa579b61ed65389',
    image: 'public/media/certifications/coursera_azure.png',
  },
  {
    name: 'Pneumonia Classification using PyTorch',
    issuer: 'Coursera',
    date: '07/2025',
    url: 'https://coursera.org/share/0afccdf87e7df0f84c36150de9fd059b',
    image: 'public/media/certifications/coursera_pytorch.png',
  },
  {
    name: 'Basic Image Classification with TensorFlow',
    issuer: 'Coursera',
    date: '07/2025',
    url: 'https://coursera.org/share/1c62c4cbdd0a2508ee5d2bf3bc8efb6e',
    image: 'public/media/certifications/coursera_tensorflow.png',
  },
  {
    name: 'Data Analysis Using Pyspark',
    issuer: 'Coursera',
    date: '07/2025',
    url: 'https://coursera.org/share/896c67c17fbe2321d901fc27048b3b01',
    image: 'public/media/certifications/coursera_pyspark.png',
  },
  {
    name: 'Excel for Beginners: Pivot Tables',
    issuer: 'Coursera',
    date: '07/2025',
    url: 'https://coursera.org/share/77472aff700e83a74642bcb640749e64',
    image: 'public/media/certifications/coursera_excel.png',
  },
  {
    name: 'Introduction to Java Programming: Java Fundamental Concepts',
    issuer: 'Coursera',
    date: '12/2024',
    url: 'https://coursera.org/share/a2798d1a14469435d5df3b23bc9510a1',
    image: 'public/media/certifications/coursera_java.png',
  },
  {
    name: 'Intermediate Relational Database and SQL',
    issuer: 'Coursera',
    date: '10/2024',
    url: 'https://coursera.org/share/f6b858ba656fdf57dbbf3956045e3a55',
    image: 'public/media/certifications/coursera_sql.png',
  },
]


export const distinctions = [
  {
    title: 'Jadara Foundation',
    description:
      'I am a recipient of a merit-based scholarship from Jadara Foundation (NGO), awarded for my outstanding baccalaureate results, which allows me to pursue my engineering studies at ISGA for five years (2022 - 2027).',
    link: { label: 'Link', url: 'https://jadara.ngo/en/' },
    media: [{ type: 'image', src: 'public/media/attestationBourse.png', alt: 'attestation de bourse' }],
  },


]


export const skills = [
  { category: 'Data Analysis', items: ['panda', 'numpy', 'scikit-learn', 'tensorflow', ] },
  { category: 'Programming', items: ['Python', 'SQL', 'Java'] },
  { category: 'Cloud', items: ['Azure'] },
  { category: 'Visualisation & BI', items: ['matplotlib', 'seaborn', 'Power BI'] },
  { category: 'Big Data', items: ['Hadoop (HDFS, MapReduce)', 'ApacheSpark', 'Docker'] },
  { category: 'Languages', items: ['Arabic, native', 'French, C1', 'English, C1'] },
  
]

// media item types (files go in public/media/):
//   { type: 'image', src: 'media/photo.webp', alt: 'What the photo shows' }
//   { type: 'video', src: 'media/clip.mp4', poster: 'media/clip.webp', caption: '...' }
//   { type: 'embed', url: 'https://www.youtube-nocookie.com/embed/VIDEO_ID', title: '...' }
//   { type: 'linkedin', url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:ID', title: '...' }
//     (LinkedIn post: ⋯ menu → "Embed this post" → copy the src="..." URL)
export const volunteering = [
  {
    role: 'Mentor',
    organization: 'Réseau Méditerranée Nouvelle Chance (MedNC)',
    dates: '04/2026',
    points: ['I took part as a mentor in an environment-themed hackathon that brought together teams from four countries: Spain, Portugal, Tunisia, and Morocco. Drawing on my background in computer science, I gave feedback and guided the teams, helping them improve their chances of persuading the judging committee and winning funding for their projects.'],
    media: [{ type: 'image', src: 'media/mednc_certificate.jpeg', alt: 'Certificate of Attendance' }
    ],
  },
  {
    role: 'President and Founder of Agora Circle - Debate Club',
    organization: 'ISGA',
    dates: '10/2024 – 06/2025',
    points: ["I founded and presided over a debate club, where we organized workshops and roundtable discussions on topics relevant to young people, such as the reform of the Family Code and women's leadership. Attendees included both students and professors recognized in the fields under discussion."],
    media: [{ type: 'image', src: 'public/media/agora1.jpg', alt: 'firstWorkshop' },
      { type: 'image', src: 'public/media/agora2.jpg', alt: 'secondWorkshop' },
      { type: 'image', src: 'public/media/agora3.jpg', alt: 'thirdWorkshop' }
    ],
  },
  {
    role: 'Organisation Committee Member for Employability Day',
    organization: 'ISGA',
    dates: '12/2024',
    points: ['I helped organize an employability day, making sure the interview process ran smoothly for students. My role involved directing recruiting teams to their assigned stands and organizing students into groups, so that everyone had a fair chance to be interviewed without overcrowding.'],
    media: [],
  },
  {
    role: "Organizing committee member, Integration Day",
    organization: 'Jadara Foundation',
    dates: '11/2024',
    points: ['I helped organize an integration day for new scholarship holders.'],
    media: [{ type: 'image', src: 'public/media/attestation_journeeIntegration.png', alt: 'attestation de remerciement' }],
  },
  {
    role: "Delegate and Organizing Committee Member, African Cultural Day of Morocco",
    organization: 'ISGA',
    dates: '05/2024',
    points: ["I helped organize African Cultural Day, an event held every May that brings together students from across Africa to celebrate the continent's diverse cultures."],
    media: [{ type: 'linkedin', url: 'https://www.instagram.com/reel/C7C7A2fNwPY/?utm_source=ig_embed&amp;utm_campaign=loading', title: 'vidéo de la journée culturelle des pays : MAroc et Mauritanie' }
    ],
  },
]
