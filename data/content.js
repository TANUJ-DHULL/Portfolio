/**
 * data/content.js
 * ---------------------------------------------------------------------------
 * Everything on the page that is not an academic record: profile, focus areas,
 * selected work, the learning logo wall and credentials.
 *
 * LEARNING LOGO RULE
 * Only organisations with a real, documented learning connection are listed
 * (course, certification, workshop, lab, program). Every tile carries an
 * explicit relationship label — never implying employment, partnership,
 * sponsorship or official representation.
 *
 * logo:  an OFFICIAL / verified mark only. Leave "" to render the designed
 *        text record instead of an unverified image.
 */

export const profile = {
  name: "Tanuj Dhull",
  discipline: "AI · Data Science · Software · Technology",
  statement:
    "I build with data — models, analysis and the software that puts them in front of people.",
  status: "BS Data Science, IIT Madras — currently pursuing",
  second: "BCA, Jind Institute of Engineering & Technology",
  email: "tanuj.dhull@example.com",
  links: [
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Kaggle", href: "" },
  ],
};

export const focus = [
  {
    id: "ml",
    index: "01",
    title: "Machine Learning & AI",
    detail:
      "Supervised learning, model evaluation, retrieval systems and LLM tooling — with the maths underneath kept honest.",
    tools: ["Python", "scikit-learn", "Vertex AI"],
  },
  {
    id: "ds",
    index: "02",
    title: "Data Science & Analytics",
    detail:
      "Statistics, experimentation and turning a messy dataset into an argument someone else can check.",
    tools: ["pandas", "NumPy", "SQL"],
  },
  {
    id: "se",
    index: "03",
    title: "Software Engineering",
    detail:
      "Typed, tested, maintainable systems — APIs, services and interfaces that survive contact with real users.",
    tools: ["TypeScript", "React", "FastAPI"],
  },
  {
    id: "cloud",
    index: "04",
    title: "Cloud & Applied Systems",
    detail:
      "Taking a notebook to a deployed artifact: pipelines, model serving and monitoring on Google Cloud.",
    tools: ["Google Cloud", "Docker", "BigQuery"],
  },
];

export const projects = [
  {
    id: "vector-notes",
    index: "01",
    title: "Vector Notes",
    kind: "Personal build",
    year: "2025",
    summary:
      "A retrieval assistant over my own course notes — embeddings, a small reranker and an answer layer that cites the paragraph it came from.",
    stack: ["Python", "Vertex AI", "FastAPI"],
  },
  {
    id: "churn-signals",
    index: "02",
    title: "Churn Signals",
    kind: "Data study",
    year: "2025",
    summary:
      "A classification study on subscription data: feature leakage, calibration and a cost curve that made the accuracy metric look irrelevant.",
    stack: ["pandas", "scikit-learn", "Matplotlib"],
  },
  {
    id: "ledger",
    index: "03",
    title: "Ledger",
    kind: "Software",
    year: "2024",
    summary:
      "A personal analytics dashboard with tabular reports and a typed API — built because spreadsheets stopped keeping up.",
    stack: ["TypeScript", "React", "PostgreSQL"],
  },
];

/**
 * Learning logo wall. group = the heading it sits under.
 * relation must state the actual relationship: Learning / Workshop /
 * Certification / Lab / Coursework. Never "partner", "employer", "ambassador".
 */
export const learningOrgs = [
  {
    id: "google-cloud",
    name: "Google Cloud",
    group: "Technology & Learning",
    relation: "Learning · Coursework",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Google_Cloud_full_color_logo.svg",
    logoShape: "wide",
    logoSource: "Google Cloud brand asset, uploaded by Google Cloud — Wikimedia Commons",
    website: "https://cloud.google.com/",
    initials: "GC",
  },
  {
    id: "google",
    name: "Google",
    group: "Technology & Learning",
    relation: "Learning Resources",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Google_2015_logo.svg",
    logoShape: "wide",
    logoSource: "Official Google wordmark — Wikimedia Commons",
    website: "https://www.google.com/",
    initials: "G",
  },
  {
    id: "vertex-ai",
    name: "Vertex AI",
    group: "AI & Cloud Learning",
    relation: "Lab · Workshop",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Vertex_AI_Logo.svg",
    logoShape: "square",
    logoSource: "Official Google Cloud icon (cloud.google.com/icons) — Wikimedia Commons",
    website: "https://cloud.google.com/vertex-ai",
    initials: "VA",
  },
  {
    id: "google-ai",
    name: "Google AI",
    group: "AI & Cloud Learning",
    relation: "Learning",
    logo: "",
    logoShape: "square",
    logoSource: "No verified official mark retrieved — text record rendered instead",
    website: "https://ai.google/",
    initials: "GA",
  },
];

export const certifications = [
  {
    id: "genai-path",
    name: "Generative AI Learning Path",
    organization: "Google Cloud",
    orgId: "google-cloud",
    type: "Learning path — completion",
    year: "2025",
    credentialUrl: "",
    placeholder: true,
  },
  {
    id: "ml-foundations",
    name: "Machine Learning Foundations",
    organization: "Google",
    orgId: "google",
    type: "Course completion",
    year: "2024",
    credentialUrl: "",
    placeholder: true,
  },
  {
    id: "vertex-lab",
    name: "Vertex AI — Hands-on Lab",
    organization: "Google Cloud",
    orgId: "google-cloud",
    type: "Lab · Workshop",
    year: "2025",
    credentialUrl: "",
    placeholder: true,
  },
];

export const sections = [
  { index: "01", id: "practice", label: "Practice" },
  { index: "02", id: "work", label: "Selected Work" },
  { index: "03", id: "education", label: "Education" },
  { index: "04", id: "timeline", label: "Timeline" },
  { index: "05", id: "institutions", label: "Institutions" },
  { index: "06", id: "credentials", label: "Credentials" },
];
