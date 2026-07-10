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
  avatar: "/profile.png",
  title: "AI Engineer · Research Scientist · PhD Applicant (Fall 2027)",
  scholarAffiliation:
    "AI & MLOps Engineer @ MagicMind · Graduate Research Assistant @ EWU",
  tagline:
    "I build AI that reads the body, explains its decisions, and ships at scale — from EEG stress datasets and medical imaging to multi-agent wellness platforms with formally verified safety.",
  location: "Gulshan-01, Dhaka-1216, Bangladesh",
  email: "tahsin30899@gmail.com",
  phone: "+880 1763-357810",
  age: 24,
  availability:
    "Applying for PhD programmes in the United States (Fall 2027) · open to research collaborations and impactful AI engineering roles",
  links: {
    scholar: "https://scholar.google.com/citations?user=6zm80xAAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/tahsin0o/",
    github: "https://github.com/T-biohazard",
    researchgate: "https://www.researchgate.net/profile/Md-Tahsin-4",
    email: "mailto:tahsin30899@gmail.com",
  },
  stats: [
    { value: "17+", label: "Peer-reviewed publications", sub: "Q1 Elsevier · IEEE · Springer" },
    { value: "50+", label: "Students mentored", sub: "GRA · research · publishing" },
    { value: "4", label: "1st-author Q1 journals", sub: "Elsevier Data in Brief & JAFR" },
    { value: "8", label: "Conference papers", sub: "IEEE · Springer Nature" },
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
    eyebrow: "Now · MagicMind Co. Ltd. · Silicon Valley",
    headline: "PEMS-aware wellness AI in real time",
    body: "Five AGNO agents adapt breathwork, meditation, and learning to live EEG, HRV, and SpO₂ — with PDDL-verified safety before anything executes.",
    cta: "See industry work",
    accent: "accent" as const,
  },
  {
    eyebrow: "Production · BingeBD · Robi Axiata",
    headline: "From App Store to recommendation ML",
    body: "Shipped Bangladesh's #1 streaming app in Swift/UIKit, built personalised recommendation pipelines, and deployed an LLM support chatbot at national scale.",
    cta: "See experience",
    accent: "mint" as const,
  },
  {
    eyebrow: "Research · ExamStressEEG · BCI",
    headline: "Stress, brainwaves, and adaptive AI",
    body: "26 participants, Muse 2, five EEG bands during live exams — plus BCI research including EEG-based wheelchair control for motor-disabled users.",
    cta: "Explore research",
    accent: "violet" as const,
  },
];

export const aboutIntro =
  "Hi — I'm Tahsin, 24, based in Dhaka. I grew up watching technology skip the communities that needed it most. That shaped everything I build: AI that is rigorous in research, honest in production, and meant for people historically last to benefit from it.";

export const aboutParagraphs = [
  "I'm an AI & MLOps Engineer at MagicMind (Silicon Valley, remote) and a Graduate Research Assistant at East West University — across agentic systems, physiological AI, medical imaging, agricultural AI, and explainable deep learning.",
  "My path started with rice authenticity for millions of Bangladeshis. That work reached BRRI and BINA, became nationally recognised Elsevier datasets, and showed me how careful AI can protect real lives.",
  "At Reddot Digital (Robi Axiata — top-5 company in Bangladesh), I learned engineering at scale: Swift/UIKit for BingeBD on the App Store, recommendation ML, LLM chatbots, and production server security. At MagicMind, those lessons meet open research questions about physiological state, multi-agent safety, and formal planning.",
  "I'm applying for PhD programmes in the United States for Fall 2027 to pursue adaptive physiological AI, uncertainty-aware agent systems, and formally safe human-facing AI.",
];

export const researchInterests = [
  {
    title: "Agentic & Generative AI",
    detail: "LLM agents, planning, reasoning, tool-use, AGNO, LangGraph, CrewAI",
    icon: "🤖",
  },
  {
    title: "Physiological AI & BCI",
    detail: "EEG, HRV, SpO₂, Muse 2, Apple Watch, Fitbit, Aura Ring, BCI systems",
    icon: "💓",
  },
  {
    title: "Medical AI",
    detail: "Diagnostics, clinical decision support, semi-supervised medical imaging",
    icon: "🏥",
  },
  {
    title: "Agricultural AI & Food Security",
    detail: "Crop disease, rice/paddy datasets — BRRI, BINA, BFRI collaborations",
    icon: "🌾",
  },
  {
    title: "Semi- & Self-Supervised Learning",
    detail: "FixMatch, few/zero-shot, transfer learning on low-label datasets",
    icon: "📊",
  },
  {
    title: "Explainable AI (XAI)",
    detail: "Grad-CAM, Grad-CAM++, ScoreCAM, SmoothGrad, saliency maps",
    icon: "🔍",
  },
  {
    title: "NLP & LLM Systems",
    detail: "RAG, fine-tuning, instruction tuning, prompt versioning",
    icon: "✨",
  },
  {
    title: "MLOps & Scalable AI",
    detail: "Docker, Kubernetes, Terraform, GCP/AWS, model serving, CI/CD",
    icon: "⚡",
  },
  {
    title: "Computer Vision",
    detail: "CNNs, Transformers, CBAM attention, Swin Transformer, video understanding",
    icon: "👁",
  },
  {
    title: "Cybersecurity AI",
    detail: "AI for security applications and resilient production systems",
    icon: "🛡",
  },
];

export const researchDomains = [
  {
    domain: "Agricultural & Food AI",
    summary:
      "Rice, paddy, betel, tea, medicinal plants — datasets recognised by BRRI, BINA, and BFRI.",
    projects: [
      "Betel leaf disease — 98% accuracy, J. Agric. Food Res. (Q1, IF 6.2) — 1st Author",
      "Rice kernel datasets — 19,000 images, 38 varieties (Data in Brief) — 1st Author",
      "Tea leaf classification — ICDMIS 2024, Springer LNNS — 1st Author",
      "PaddyVarietyBD & Grain by Grain microscopic datasets — 1st Author",
    ],
    color: "mint",
  },
  {
    domain: "Medical Imaging & Diagnostics",
    summary:
      "Semi-supervised and XAI pipelines where labelled clinical data is scarce.",
    projects: [
      "Cervical cancer — semi-supervised learning, IEEE ICCIT 2024 ★ Best Presenter — 1st Author",
      "Alzheimer's FixMatch — IEEE Access (Q1) — Co-author",
      "PCOS real-time XAI diagnosis — Springer ICIDA 2024 — Co-author",
      "Diabetic foot ulcer detection — DETR + YOLOv5, RAISA 2023 — Co-author",
      "Retinal OCT & cardiovascular risk forecasting — IEEE — Co-author",
    ],
    color: "accent",
  },
  {
    domain: "Physiological AI & BCI",
    summary: "Consumer sensors and biosignals feeding adaptive, safety-aware AI.",
    projects: [
      "ExamStressEEG — 26 participants, Muse 2, Mendeley DOI 10.17632/fyj9by2t22.1",
      "EEG-based wheelchair control for motor-disabled users",
      "Real-time HRV/EEG/SpO₂ fusion in MagicMind's 5-agent stack",
      "LLM-to-PDDL safety gates for breathwork (SpO₂ thresholds before retention)",
    ],
    color: "violet",
  },
  {
    domain: "Industry, Infra & Conservation",
    summary:
      "From endangered medicinal plants to Bangladesh's #1 OTT platform and production infra.",
    projects: [
      "REMP — Swin Transformer for rare medicinal plants (IEEE) — Co-author",
      "BFRI bamboo species classification partnership",
      "BingeBD iOS (Swift/UIKit/MVVM) + recommendation ML + LLM chatbot — Reddot / Axiata",
      "Datacenter & infra — Terraform, Headscale/Tailscale, AWS EC2, Hetzner",
    ],
    color: "amber",
  },
];

export const experience = [
  {
    id: "magicmind",
    role: "AI & MLOps Engineer",
    org: "MagicMind Co. Ltd.",
    badge: "Silicon Valley",
    location: "California, USA · Remote",
    period: "July 2025 – Present",
    summary:
      "Next-generation gamified wellness platform — adaptive breathwork, meditation, and immersive journeys with live PEMS biofeedback and AI personalisation.",
    highlights: [
      {
        title: "5-Agent Personalisation Engine (AGNO)",
        text: "Student State Analyzer (EEG/HRV/SpO₂ fusion), Personalization Strategist (3-timescale planning + Safety Guardian), Chapter Composer, Evaluator Agent with persistent memory and feedback loop.",
      },
      {
        title: "LLM-to-PDDL Planning (L2P)",
        text: "Convert LLM wellness journeys into formally verified PDDL plans — SpO₂ gating, step ordering, Unity/FastAPI execution. Novel formal planning for consumer wellness AI.",
      },
      {
        title: "Health Biometrics R&D",
        text: "Full pipeline: Muse 2 EEG (5-band), HRV, SpO₂, Apple HealthKit, Fitbit, Aura Ring — real-time physiological state feeds agents and safety gates.",
      },
      {
        title: "RAG & LLM Systems",
        text: "Vedic Life Report RAG (VoyageAI embeddings, FAISS/pgvector, feedback-weighted re-ranking); PyJHora chart computation; LLM narrative synthesis.",
      },
      {
        title: "Microservices & Backend",
        text: "FastAPI, NATS JetStream, TimescaleDB, SQL LRS (xAPI/lrsql) via LRSPipe, Hasura GraphQL — API contracts, schema governance, security & scaling.",
      },
      {
        title: "MLOps & Infrastructure",
        text: "W&B experiment tracking, prompt versioning, Docker/Kubernetes, Terraform IaC, GCP CI/CD, Headscale/Tailscale VPN mesh, AWS EC2, Hetzner deployment.",
      },
    ],
  },
  {
    id: "reddot",
    role: "Software Engineer",
    org: "Reddot Digital Limited",
    orgParent: "Axiata Group (Robi Axiata)",
    location: "Dhaka, Bangladesh",
    period: "Nov 2024 – June 2025",
    summary:
      "Production engineering for BingeBD — Bangladesh's #1 streaming platform within one of Bangladesh's top-5 companies.",
    highlights: [
      {
        title: "iOS Development (BingeBD)",
        text: "Built and maintained the App Store-published app — Swift, UIKit, MVVM, AVFoundation, CoreData, REST APIs, push notifications.",
      },
      {
        title: "ML Recommendation Pipeline",
        text: "Designed and deployed personalised content recommendation engine improving discovery and user retention.",
      },
      {
        title: "LLM Chatbot & Web Platform",
        text: "Deployed real-time LLM user-support chatbot; contributed to BingeBD web streaming platform.",
      },
      {
        title: "Backend, Security & Scaling",
        text: "API security, rate limiting, server-side maintenance, scalability optimisations, and CI/CD pipeline management.",
      },
    ],
  },
  {
    id: "infra",
    role: "Infrastructure Engineer (Contract)",
    org: "Datacenter & Cloud Environments",
    location: "Remote / On-site",
    period: "2024 – 2025",
    summary:
      "Hands-on datacenter and infrastructure work between industry roles — deployments, networking, and production server operations.",
    highlights: [
      {
        title: "Server & Deployment Ops",
        text: "Managed servers, handled deployments, and maintained production infrastructure across cloud and bare-metal environments.",
      },
      {
        title: "Networking & IaC",
        text: "Headscale/Tailscale VPN mesh networking; Terraform for infrastructure-as-code; AWS EC2 and Hetzner server deployment.",
      },
    ],
  },
  {
    id: "ewu",
    role: "Graduate Research Assistant (GRA)",
    org: "East West University",
    location: "Dhaka, Bangladesh",
    period: "Aug 2023 – Present",
    supervisor: "Dr. Raihan Ul Islam, Associate Professor, CSE",
    summary:
      "Medical imaging, agricultural AI, biosignals — from nationally recognised datasets to peer-reviewed publications.",
    highlights: [
      {
        title: "Research & Model Development",
        text: "AI/ML across medical imaging, agricultural AI, and biosignal processing; datasets in collaboration with BRRI, BINA, and BFRI.",
      },
      {
        title: "BCI & EEG Research",
        text: "Co-developed ExamStressEEG (Mendeley DOI: 10.17632/fyj9by2t22.1); EEG-based wheelchair control for motor-disabled users.",
      },
      {
        title: "Semi/Self-Supervised Learning",
        text: "FixMatch and self-supervised pipelines on low-label medical and agricultural datasets; CBAM-augmented custom CNNs.",
      },
      {
        title: "Teaching & Mentoring",
        text: "Mentored ~50+ undergraduates through AI research, paper writing, and publication; conducted lab sessions and capstone guidance.",
      },
    ],
  },
];

export const education = {
  school: "East West University, Dhaka, Bangladesh",
  degree: "B.Sc. Computer Science & Engineering (CSE)",
  period: "2020 – 2024",
  gpa: "3.23",
  thesisSupervisor: "Prof. Nawab Yousuf Ali, Professor, CSE",
  researchSupervisor: "Dr. Raihan Ul Islam, Associate Professor, CSE",
  note: 'Recognised as "Successful Student" in the EWU newsletter for outstanding research and academic contributions',
};

export const publications: Publication[] = [
  {
    title:
      "Leveraging pre-trained models within a semi-supervised and explainable AI framework for betel leaf disease detection",
    venue: "Journal of Agriculture & Food Research, Elsevier (Q1, IF 6.2)",
    role: "1st Author",
    year: "2025",
    detail: "DenseNet201 + FixMatch — 98% accuracy, 30% labeled data; GradCAM++, ScoreCAM",
    tags: ["Q1", "XAI", "FixMatch", "Agriculture"],
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
      "Grain by Grain: Microscopic image dataset of rice varieties from Bangladeshi markets",
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
    title: "A FixMatch Framework for Alzheimer's Disease Classification",
    venue: "IEEE Access (Q1, IF 3.4)",
    role: "Co-author",
    year: "2025",
    tags: ["Healthcare", "Semi-Supervised"],
    type: "journal",
  },
  {
    title: "RiceKernelEngine: Benchmarking transfer learning models for rice kernel images",
    venue: "Array, Elsevier (Q1, IF 4.5)",
    role: "Co-author",
    year: "2025",
    tags: ["Benchmark"],
    type: "journal",
  },
  {
    title: "Enhancing Cervical Cancer Detection: Leveraging Semi-Supervised Learning",
    venue: "IEEE ICCIT 2024, Cox's Bazar",
    role: "1st Author",
    year: "2024",
    detail: "Semi-supervised prognosis with reduced labelled data",
    award: "★ Best Presenter Award",
    tags: ["Healthcare", "IEEE"],
    type: "conference",
  },
  {
    title: "Efficient tea leaf classification: Bridging supervised and semi-supervised learning",
    venue: "Springer LNNS, ICDMIS 2024",
    role: "1st Author",
    year: "2024",
    tags: ["Agriculture", "Springer"],
    type: "conference",
  },
  {
    title: "XAI for Real-Time Diagnosis of Polycystic Ovary Syndrome",
    venue: "Springer LNNS, ICIDA 2024",
    role: "Co-author",
    year: "2024",
    tags: ["XAI", "Healthcare"],
    type: "conference",
  },
  {
    title: "EnDFUD: Enhanced Diabetic Foot Ulcer Detection with DETR and YOLOv5",
    venue: "Springer ISTC, RAISA 2023",
    role: "Co-author",
    year: "2023",
    tags: ["Detection"],
    type: "conference",
  },
  {
    title: "DeepCerviNet: Enhanced Cervical Cancer Classification",
    venue: "IEEE RAAICON 2025, Dhaka",
    role: "Co-author",
    year: "2025",
    tags: ["Healthcare", "IEEE"],
    type: "conference",
  },
  {
    title: "Attention-Guided Neural Networks for Retinal Disease Detection in OCT Images",
    venue: "IEEE Conference",
    role: "Co-author",
    year: "2025",
    tags: ["Medical Imaging", "XAI"],
    type: "conference",
  },
  {
    title: "Harnessing ML to Forecast Cardiovascular Disease Risk with XAI",
    venue: "IEEE Conference",
    role: "Co-author",
    year: "2025",
    tags: ["Healthcare", "XAI"],
    type: "conference",
  },
  {
    title: "REMP: Swin Transformer for Rare & Endangered Medicinal Plant Classification",
    venue: "IEEE Conference",
    role: "Co-author",
    year: "2025",
    tags: ["Conservation", "Swin Transformer"],
    type: "conference",
  },
  {
    title: "ExamStressEEG: Comprehensive EEG Dataset Capturing Student Stress During Exams",
    venue: "Mendeley Data",
    role: "Co-author",
    year: "2025",
    detail: "Muse 2 · 26 participants · 5-band EEG during live exam stress",
    doi: "10.17632/fyj9by2t22.1",
    tags: ["EEG", "BCI", "Dataset"],
    type: "dataset",
  },
];

export const pubFilters: { id: PublicationType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "journal", label: "Journals" },
  { id: "conference", label: "Conferences" },
  { id: "dataset", label: "Datasets" },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "Swift"],
    level: "core",
  },
  {
    category: "AI / ML",
    items: [
      "PyTorch",
      "HuggingFace Transformers",
      "TensorFlow",
      "JAX",
      "scikit-learn",
      "PyG",
      "DeepSpeed",
      "W&B",
      "OpenCV",
      "NLTK",
      "spaCy",
    ],
    level: "core",
  },
  {
    category: "Agents & Planning",
    items: [
      "AGNO",
      "LangGraph",
      "LangChain",
      "CrewAI",
      "LLM-to-PDDL (L2P)",
      "RAG Pipelines",
      "FAISS",
      "pgvector",
      "NATS JetStream",
    ],
    level: "core",
  },
  {
    category: "MLOps & Infra",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform (IaC)",
      "Headscale",
      "Tailscale",
      "AWS EC2",
      "Hetzner",
      "GCP CI/CD",
      "FastAPI async serving",
      "Prompt versioning",
    ],
    level: "core",
  },
  {
    category: "iOS / Mobile",
    items: [
      "Swift",
      "UIKit",
      "SwiftUI",
      "MVVM",
      "AVFoundation",
      "CoreData",
      "REST integration",
      "App Store deployment",
    ],
    level: "strong",
  },
  {
    category: "Web & Backend",
    items: [
      "System Design",
      "FastAPI",
      "Flask",
      "Django",
      "React",
      "Next.js",
      "MERN Stack",
      "Node.js",
      "GraphQL (Hasura)",
      "API security",
      "Rate limiting",
    ],
    level: "strong",
  },
  {
    category: "Databases",
    items: [
      "TimescaleDB",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQL LRS (xAPI/lrsql)",
      "Hasura",
      "FAISS",
      "pgvector",
    ],
    level: "strong",
  },
  {
    category: "Biometric SDKs",
    items: [
      "Muse 2 EEG SDK",
      "Apple HealthKit",
      "Fitbit API",
      "Aura Ring API",
      "HRV/SpO₂ interfaces",
      "BCI systems",
    ],
    level: "specialty",
  },
  {
    category: "Tools & IDEs",
    items: [
      "Cursor",
      "GitHub Copilot",
      "Jupyter",
      "VS Code",
      "Xcode",
      "Postman",
      "Figma",
      "LaTeX",
      "Jira",
      "Trello",
    ],
    level: "tools",
  },
];

export const accomplishments = [
  {
    title: "17+ Peer-Reviewed Publications",
    detail:
      "Among the highest research outputs for an undergraduate researcher in Bangladesh — Q1 Elsevier, IEEE, Springer",
  },
  {
    title: "Best Presenter Certificate",
    detail: "IEEE ICCIT 2024, Cox's Bazar, Bangladesh",
  },
  {
    title: "Successful Student — EWU Newsletter",
    detail: "Recognised for outstanding research and academic contributions, 2024",
  },
  {
    title: "Leadership & Mentoring",
    detail: "~50+ undergraduates mentored through AI research, paper writing, and publication",
  },
  {
    title: "Capstone Showcase Runner-up",
    detail: "East West University, 2024",
  },
  {
    title: "Programming Contest — 5th Place",
    detail: "Intra-university, EWU 2022",
  },
  {
    title: "National Dataset Recognition",
    detail: "Datasets endorsed by BRRI, BINA, and BFRI",
  },
  {
    title: "Multinational Industry Experience",
    detail: "Robi Axiata Group, MagicMind (Silicon Valley), datacenter & infrastructure environments",
  },
];

export const mentors = [
  "Prof. Nawab Yousuf Ali — East West University (Thesis Supervisor)",
  "Dr. Raihan Ul Islam — East West University (GRA Research Supervisor)",
  "Dr. Md Sawkat Ali — East West University (Research Collaborator)",
  "Prof. Mohammad Shahadat Hossain — University of Chittagong / UT Dallas & Luleå Univ.",
  "Prof. Karl Andersson — Luleå University of Technology, Sweden",
];

export const extracurricular = [
  "Teaching — lab sessions, capstone guidance, and research methodology training at EWU",
  "Mentorship — ~50+ students through AI/ML research and peer-reviewed publication",
  "Active researcher — agentic AI, biometrics, medical & agricultural AI, semi-supervised learning",
  "Infrastructure — datacenter ops, VPN mesh networking, and production server deployment",
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
