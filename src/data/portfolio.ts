export type PublicationType = "journal" | "conference" | "dataset" | "thesis" | "pending" | "accepted";

export interface Publication {
  title: string;
  venue: string;
  role: string;
  year?: string;
  detail?: string;
  award?: string;
  tags: string[];
  type: PublicationType;
  doi?: string;
}

export const profile = {
  name: "Md Tahsin",
  brandShort: "Tahsin",
  brandFull: "Md Tahsin",
  initials: "MT",
  title: "AI Engineer & Researcher",
  scholarAffiliation: "AI Engineer @ MagicMind.me · Research Assistant (AI) @ EWU",
  tagline:
    "I design AI that listens to the body, explains its decisions, and ships reliably — from EEG stress datasets to multi-agent wellness platforms.",
  location: "Gulshan-01, Dhaka-1216, Bangladesh",
  email: "tahsin30899@gmail.com",
  phone: "+880 1763-357810",
  availability: "Open to Ph.D. collaborations, research partnerships, and impactful AI roles",
  links: {
    scholar: "https://scholar.google.com/citations?user=6zm80xAAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/tahsin0o/",
    github: "https://github.com/T-biohazard",
    researchgate: "https://www.researchgate.net/profile/Md-Tahsin-4",
    email: "mailto:tahsin30899@gmail.com",
  },
  stats: [
    { value: "17+", label: "Accepted publications", sub: "Q1 journals · IEEE · Springer" },
    { value: "60+", label: "Students mentored", sub: "AI · research · publishing" },
    { value: "6", label: "Journal papers", sub: "Elsevier · IEEE Access · Array" },
    { value: "9+", label: "Conference papers", sub: "IEEE · Springer Nature" },
  ],
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const heroSlides = [
  {
    eyebrow: "Now · Magic Mind Co Ltd. · Silicon Valley",
    headline: "Wellness AI grounded in your physiology",
    body: "Five collaborating agents adapt breathwork and learning to live EEG, HRV, and SpO2 — with PDDL-verified safety before anything runs.",
    cta: "See my industry work",
    accent: "accent" as const,
  },
  {
    eyebrow: "Research · Semi-supervised & XAI",
    headline: "High accuracy with fewer labels",
    body: "FixMatch + DenseNet on betel leaf disease: 98% accuracy using only 30% labeled data, with Grad-CAM++ and ScoreCAM clinicians can trust.",
    cta: "Browse publications",
    accent: "mint" as const,
  },
  {
    eyebrow: "Dataset · ExamStressEEG · Mendeley",
    headline: "What does stress look like in the brain?",
    body: "26 students, Muse 2 headband, five frequency bands captured during real exams — now public for mental-health and BCI research.",
    cta: "Explore research",
    accent: "violet" as const,
  },
];

export const aboutIntro =
  "Hi — I'm Tahsin. I grew up in Bangladesh watching technology skip the communities that needed it most. That shaped everything I build today: AI that is rigorous in the lab, honest in production, and kind to the people it serves.";

export const aboutParagraphs = [
  "I'm an AI Engineer at Magic Mind (Silicon Valley, remote) and a Research Assistant at East West University, working across agentic systems, health biometrics, computer vision, and explainable deep learning.",
  "My research journey started with something everyday — rice authenticity for millions of Bangladeshis. That work reached BRRI, became Elsevier datasets, and showed me how careful AI can protect real lives.",
  "Today I mentor 60+ students, publish in Q1 venues, and ship platforms like Binge BD while asking harder questions: How do we make agents creative and formally safe? How do we personalize from consumer-grade sensors people already wear?",
];

export const researchInterests = [
  {
    title: "Agentic AI & Multi-Agent Systems",
    detail: "Planning, reasoning, tool-use, AGNO, PDDL-based structured planning",
    icon: "🤖",
  },
  {
    title: "Microservices & MLOps",
    detail: "NATS JetStream, CI/CD, real-time deployment, event-driven architecture",
    icon: "⚡",
  },
  {
    title: "Health Biometrics & Physiological AI",
    detail: "EEG/BCI, HRV, SpO₂ — Muse 2, Apple Watch, Fitbit, Aura Ring",
    icon: "💓",
  },
  {
    title: "Semi- & Self-Supervised Learning",
    detail: "FixMatch, transfer learning, few-shot and zero-shot paradigms",
    icon: "📊",
  },
  {
    title: "Generative AI & LLM Systems",
    detail: "RAG pipelines, prompt tuning, instruction tuning, LLM agents",
    icon: "✨",
  },
  {
    title: "Explainable AI (XAI)",
    detail: "Grad-CAM, Grad-CAM++, ScoreCAM, SmoothGrad, saliency maps",
    icon: "🔍",
  },
  {
    title: "Deep Learning Architectures",
    detail: "Custom CNNs, CBAM attention, Transformers, Swin Transformer",
    icon: "🧠",
  },
  {
    title: "Multimodal & Edge AI",
    detail: "Vision–language, vision–audio, cross-modal fusion, edge deploy",
    icon: "🌐",
  },
];

export const researchDomains = [
  {
    domain: "Agricultural & Food AI",
    summary: "Rice, paddy, betel, tea — datasets recognized by BRRI, BINA, and local industry partners.",
    projects: [
      "Betel leaf disease — 98% accuracy, J. Agric. Food Res. (Q1, IF 6.2)",
      "Rice kernel datasets — 19,000 images, 38 varieties (Data in Brief)",
      "Tea leaf classification — ICDMIS 2024, Springer LNNS",
      "PaddyVarietyBD & Grain by Grain microscopic datasets",
    ],
    color: "mint",
  },
  {
    domain: "Medical Imaging & Diagnostics",
    summary: "Semi-supervised and XAI pipelines for conditions where labeled data is scarce.",
    projects: [
      "Cervical cancer — 94% accuracy, half the labels (IEEE ICCIT ★ Best Presenter)",
      "Alzheimer's FixMatch — IEEE Access (Q1)",
      "Appendicitis ultrasound thesis — 95.58% InceptionV3, CMPB under review",
      "PCOS, diabetic foot ulcer, retinal OCT, cardiovascular risk forecasting",
    ],
    color: "accent",
  },
  {
    domain: "Physiological AI & BCI",
    summary: "Consumer sensors feeding adaptive, safety-aware AI systems.",
    projects: [
      "ExamStressEEG — 26 participants, Muse 2, Mendeley DOI 10.17632/fyj9by2t22.1",
      "Real-time HRV/EEG/SpO₂ fusion in Magic Mind agent stack",
      "PDDL safety gates for breathwork (SpO₂ thresholds before retention)",
    ],
    color: "violet",
  },
  {
    domain: "Conservation & Industry",
    summary: "From endangered medicinal plants to Bangladesh's #1 OTT platform.",
    projects: [
      "REMP — Swin Transformer for rare medicinal plants (IEEE, accepted)",
      "BFRI bamboo species classification partnership",
      "Binge BD recommendation engine & LLM chatbot (Reddot / Axiata)",
    ],
    color: "amber",
  },
];

export const experience = [
  {
    id: "magicmind",
    role: "AI Engineer",
    org: "Magic Mind Co Ltd.",
    badge: "Silicon Valley",
    location: "California, USA · Remote",
    period: "July 2025 – Present",
    summary:
      "Building an AI-driven human wellness platform — agent systems, microservices, health biometrics, and formally verified planning.",
    highlights: [
      {
        title: "Multi-Agent Systems (AGNO)",
        text: "5-agent personalization engine: Student State Analyzer (HRV/EEG/O₂ fusion), Chapter Understanding, Personalization Strategist (3-timescale curriculum + Safety Guardian), Chapter Composer, Evaluator with memory loop.",
      },
      {
        title: "Microservices (E2E)",
        text: "NATS JetStream, FastAPI, TimescaleDB, SQL LRS (lrsql/xAPI) via LRSPipe, Hasura GraphQL — API contracts, schema governance, inter-service patterns.",
      },
      {
        title: "LLM-to-PDDL (L2P)",
        text: "Convert LLM wellness journeys into verified PDDL plans — SpO₂ thresholds, step ordering, Unity/FastAPI execution.",
      },
      {
        title: "Health Biometrics",
        text: "Muse 2 EEG bands, HRV, SpO₂, Apple HealthKit, Fitbit, Aura Ring — real-time state feeds agents and safety gates.",
      },
      {
        title: "MLOps & RAG",
        text: "W&B tracking, Docker/K8s/GCP CI/CD, Vedic Life Report RAG (VoyageAI/OpenAI + PyJHora), course creator with git-like versioning.",
      },
    ],
  },
  {
    id: "reddot",
    role: "Software Engineer",
    org: "Reddot Digital Limited",
    orgParent: "Axiata Group",
    location: "Dhaka, Bangladesh",
    period: "Nov 2024 – June 2025",
    summary: "Scaled AI products for Bangladesh's leading digital entertainment platform.",
    highlights: [
      {
        title: "Recommendation Engine",
        text: "Personalized content recommendation system driving engagement on Binge BD.",
      },
      {
        title: "Binge BD (OTT)",
        text: "Developed and published Bangladesh's leading OTT app on the Apple App Store.",
      },
      {
        title: "LLM Chatbot",
        text: "Deployed real-time LLM support for user queries and platform assistance.",
      },
    ],
  },
  {
    id: "ewu",
    role: "Research Assistant",
    org: "East West University",
    location: "Dhaka, Bangladesh",
    period: "Aug 2023 – Present",
    supervisor: "Dr. Raihan Ul Islam, Associate Professor, CSE",
    summary: "Medical imaging, agricultural AI, biosignals — from datasets to peer-reviewed papers.",
    highlights: [
      {
        title: "Applied AI Research",
        text: "Models for medical imaging, agricultural quality control, and biosignal processing.",
      },
      {
        title: "Public Datasets",
        text: "Co-developed ExamStressEEG (Mendeley DOI: 10.17632/fyj9by2t22.1); curated rice, paddy, and crop datasets.",
      },
      {
        title: "Mentorship",
        text: "Guided 60+ students through AI projects, research methodology, and the publication process.",
      },
    ],
  },
];

export const education = {
  school: "East West University",
  degree: "Bachelor of Computer Science & Engineering (CSE)",
  period: "2020 – 2024",
  gpa: "3.23",
  note: 'Featured as a "Successful Student" in the EWU newsletter for research and academic accomplishments',
};

export const publications: Publication[] = [
  {
    title:
      "Leveraging pre-trained models within a semi-supervised and explainable AI RealTime framework: A pioneering paradigm for betel leaf disease detection",
    venue: "Journal of Agriculture and Food Research, Elsevier",
    role: "1st Author",
    year: "2025",
    detail: "DenseNet201 + FixMatch — 98% accuracy, 30% labeled data; GradCAM++, ScoreCAM",
    tags: ["Q1", "IF 6.2", "XAI", "FixMatch"],
    type: "journal",
  },
  {
    title:
      "An extensive image dataset for deep learning-based classification of rice kernel varieties in Bangladesh",
    venue: "Data in Brief, Elsevier",
    role: "1st Author",
    year: "2024",
    detail: "19,000 images · 38 varieties · BINA & BRRI collaboration",
    tags: ["Dataset", "Agriculture"],
    type: "journal",
  },
  {
    title:
      "Grain by Grain: A Microscopic Image Dataset of Rice Varieties from Bangladeshi Rice Markets",
    venue: "Data in Brief, Elsevier",
    role: "1st Author",
    year: "2025",
    tags: ["Dataset"],
    type: "journal",
  },
  {
    title: "PaddyVarietyBD: Classifying paddy variations of Bangladesh with a novel image dataset",
    venue: "Data in Brief, Elsevier",
    role: "1st Author",
    year: "2025",
    tags: ["Dataset"],
    type: "journal",
  },
  {
    title:
      "A FixMatch Framework for Alzheimer's Disease Classification: Exploring the Trade-Off Between Supervision and Performance",
    venue: "IEEE Access (Q1, IF 3.4)",
    role: "3rd Author",
    year: "2025",
    tags: ["Healthcare", "Semi-Supervised"],
    type: "journal",
  },
  {
    title:
      "RiceKernelEngine: Benchmarking transfer learning models for microscopic images of rice kernel",
    venue: "Array, Elsevier (Q1, IF 4.5)",
    role: "3rd Author",
    year: "2025",
    tags: ["Benchmark"],
    type: "journal",
  },
  {
    title:
      "Enhancing Cervical Cancer Detection: Leveraging Semi-Supervised Learning for Improved Prognosis",
    venue: "27th ICCIT 2024, IEEE — Cox's Bazar, pp. 499–504",
    role: "1st Author",
    year: "2024",
    detail: "94% accuracy with half the labeled data",
    award: "★ Best Presenter Award",
    tags: ["Healthcare", "IEEE"],
    type: "conference",
  },
  {
    title: "Efficient tea leaf classification: Bridging supervised and semi-supervised learning",
    venue: "ICDMIS 2024, Springer LNNS Vol. 1389",
    role: "1st Author",
    year: "2024",
    tags: ["Agriculture", "Springer"],
    type: "conference",
  },
  {
    title:
      "Leveraging Explainable Artificial Intelligence for Real-Time Diagnosis of Polycystic Ovary Syndrome",
    venue: "ICIDA 2024, Springer LNNS Vol. 1410",
    role: "2nd Author",
    year: "2024",
    tags: ["XAI", "Healthcare"],
    type: "conference",
  },
  {
    title: "EnDFUD: Enhanced Diabetic Foot Ulcer Detection with DETR and YOLOv5",
    venue: "RAISA 2023, Springer ISTC",
    role: "3rd Author",
    year: "2023",
    tags: ["Detection"],
    type: "conference",
  },
  {
    title: "DeepCerviNet: Enhanced Cervical Cancer Classification Using Supervised Learning",
    venue: "IEEE RAAICON 2025, Dhaka",
    role: "3rd Author",
    year: "2025",
    tags: ["Healthcare", "IEEE"],
    type: "conference",
  },
  {
    title:
      "Not So Labeled Approach: FixMatch Outperforms Supervised Learning in Mango Leaf Disease Detection with XAI Insights",
    venue: "RAAISA 2024, Springer LNNS Vol. 1380",
    role: "3rd Author",
    year: "2024",
    tags: ["XAI", "Agriculture"],
    type: "conference",
  },
  {
    title:
      "Deep Learning for Automated Classification of Complicated Appendicitis in Ultrasound Imaging with Explainable AI",
    venue: "Under review — Computer Methods and Programs in Biomedicine, Elsevier (Q1)",
    role: "Thesis · 1st Author",
    year: "2024",
    detail: "InceptionV3 95.58% · 4,679 samples · Grad-CAM clinical web app",
    tags: ["Thesis", "Medical Imaging"],
    type: "thesis",
  },
  {
    title:
      "ExamStressEEG: Comprehensive EEG Dataset Capturing Student Stress During Exams",
    venue: "Mendeley Data",
    role: "Co-author",
    year: "2025",
    detail: "Muse 2 · 26 participants · 5-band brainwave capture",
    doi: "10.17632/fyj9by2t22.1",
    tags: ["EEG", "BCI", "Dataset"],
    type: "dataset",
  },
  {
    title:
      "Integrating Multiple Learning Techniques with Explainable AI for Accurate Monkeypox Classification",
    venue: "MDPI Journal (Q2)",
    role: "1st Author",
    tags: ["Under Review"],
    type: "pending",
  },
  {
    title:
      "An Ensemble Deep Learning Approach Surpassing Pretrained Models in Rice Kernel Classification",
    venue: "IEEE Access (Q1, IF 3.9)",
    role: "1st Author",
    tags: ["Under Review"],
    type: "pending",
  },
  {
    title: "Biodiversity Conservation in Bangladesh: Classifying Rare Medicinal Plants",
    venue: "J. Agriculture and Food Research, Elsevier (Q1, IF 6.2)",
    role: "1st Author",
    tags: ["Under Review"],
    type: "pending",
  },
  {
    title:
      "Attention-Guided Neural Networks for Explainable Retinal Disease Detection in OCT Images",
    venue: "IEEE Conference",
    role: "1st Author",
    tags: ["Accepted"],
    type: "accepted",
  },
  {
    title:
      "Harnessing Machine Learning to Forecast Cardiovascular Disease Risk with Explainable AI",
    venue: "IEEE Conference",
    role: "1st Author",
    tags: ["Accepted"],
    type: "accepted",
  },
  {
    title:
      "REMP: A Swin Transformer-Powered Approach to Classifying Rare and Endangered Medicinal Plants",
    venue: "IEEE Conference",
    role: "1st Author",
    tags: ["Accepted", "Swin Transformer"],
    type: "accepted",
  },
];

export const pubFilters: { id: PublicationType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "journal", label: "Journals" },
  { id: "conference", label: "Conferences" },
  { id: "dataset", label: "Datasets" },
  { id: "thesis", label: "Thesis" },
  { id: "accepted", label: "Accepted" },
  { id: "pending", label: "Under Review" },
];

export const skillGroups = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "C", "C++", "Swift"],
    level: "core",
  },
  {
    category: "ML & Deep Learning",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "TensorFlow",
      "JAX",
      "scikit-learn",
      "PyTorch Geometric",
      "OpenCV",
      "DeepSpeed",
      "Weights & Biases",
    ],
    level: "core",
  },
  {
    category: "Agent Systems & Planning",
    items: [
      "AGNO Framework",
      "LLM-to-PDDL (L2P)",
      "LangChain",
      "RAG Pipelines",
      "FAISS",
      "pgvector",
      "NATS JetStream",
    ],
    level: "core",
  },
  {
    category: "Web, Mobile & APIs",
    items: [
      "FastAPI",
      "Flask",
      "Django",
      "React",
      "Next.js",
      "MERN Stack",
      "Tailwind CSS",
      "SwiftUI",
      "UIKit",
    ],
    level: "strong",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Git", "Linux CLI"],
    level: "strong",
  },
  {
    category: "Biometric & Sensor SDKs",
    items: [
      "Muse 2 EEG SDK",
      "Apple HealthKit",
      "Fitbit API",
      "Aura Ring API",
      "HRV / SpO₂ Interfaces",
    ],
    level: "specialty",
  },
  {
    category: "Databases & Data Layer",
    items: [
      "TimescaleDB",
      "PostgreSQL",
      "Redis",
      "SQL LRS (xAPI)",
      "Hasura GraphQL",
      "FAISS",
      "pgvector",
    ],
    level: "strong",
  },
  {
    category: "Design & Collaboration",
    items: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Jira",
      "Trello",
      "LaTeX",
      "Jupyter / Colab",
    ],
    level: "tools",
  },
];

export const accomplishments = [
  {
    title: "Best Presenter Award",
    detail: "IEEE ICCIT 2024 — cervical cancer semi-supervised learning",
  },
  {
    title: "Capstone Showcase Runner-up",
    detail: "East West University, 2024",
  },
  {
    title: "Programming Contest — 4th Place",
    detail: "Intra-university, EWU 2022",
  },
  {
    title: "Institutional Recognition",
    detail: "Datasets endorsed by BRRI, BINA, and BFRI",
  },
  {
    title: "17+ Publications",
    detail: "Achieved as undergraduate and early-career researcher",
  },
];

export const mentors = [
  "Prof. Md. Sawkat Ali — East West University",
  "Dr. Md. Raihan Ul Islam — East West University (RA Supervisor)",
  "Prof. Mohammad Shahadat Hossain — University of Chittagong",
  "Prof. Karl Andersson — Luleå University of Technology",
];

export const extracurricular = [
  "Team Lead & Volunteer — university research clubs and coding events",
  "Instructor — AI, mathematics, and programming for 60+ students",
  "Active researcher — agentic AI, biometrics, CV, NLP, semi-supervised learning",
];

export const socialLinks = [
  {
    label: "Google Scholar",
    href: profile.links.scholar,
    description: "Full publication list & citations",
    primary: true,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    description: "Professional network",
    primary: true,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    description: "Code & projects (@T-biohazard)",
    primary: false,
  },
  {
    label: "ResearchGate",
    href: profile.links.researchgate,
    description: "Research profile",
    primary: false,
  },
];
