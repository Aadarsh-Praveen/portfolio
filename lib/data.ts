export const personalInfo = {
  name: "Aadarsh Praveen Selvaraj Ajithakumari",
  shortName: "Aadarsh Praveen",
  location: "Boston, MA",
  email: "praveen.aadarsh@gmail.com",
  linkedin: "https://www.linkedin.com/in/aadarsh-praveen/",
  github: "https://github.com/aadarsh-praveen",
  roles: ["AI/ML Engineer", "Data Scientist", "RAG Architect", "LLM Builder"],
  bio: "Results-driven AI/ML Engineer and Data Scientist with 3+ years of experience designing and deploying production-grade machine learning systems, RAG pipelines and data engineering solutions across enterprise domains including real estate, municipal government, and financial services.",
};

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 85, suffix: "%", label: "RAG Accuracy Achieved" },
  { value: 6.7, suffix: "M", label: "Reviews Processed" },
  { value: 100, suffix: "+", label: "Languages Supported" },
];

export const experience = [
  {
    title: "AI/ML Engineer",
    company: "IpserLab LLC",
    location: "Fort Worth, TX (Remote)",
    period: "Feb 2026 – Present",
    tag: "Current",
    bullets: [
      "Building Smart Pantry — LLM-powered meal recommendation engine with OCR grocery scanning",
      "Architecting Supabase + Neon PostgreSQL full-stack with OAuth (Google/Apple) auth",
      "Designing LLM prompt pipelines for personalized recipe generation with dietary constraints",
      "ML model evaluation with precision/recall/F1 metrics for recommendation quality",
    ],
  },
  {
    title: "AI Developer",
    company: "EasyBee AI",
    location: "Boston, MA",
    period: "Jan 2025 – Jun 2025",
    tag: null,
    bullets: [
      "Built production RAG workflows for real estate and municipal government on AWS",
      "Achieved 85% accuracy with 0.52s avg latency across thousands of QA pairs",
      "Engineered Pinecone vector search with namespace isolation and metadata enrichment",
      "Implemented automated RAG evaluation framework using Python asyncio pipelines",
    ],
  },
  {
    title: "Application Development Analyst",
    company: "Accenture",
    location: "Chennai, India",
    period: "Oct 2021 – Jul 2023",
    tag: null,
    bullets: [
      "Optimized ETL pipelines with Python + Apache Spark, improving throughput by 30%",
      "Applied KMeans and hierarchical clustering to improve engagement metrics by 15%",
      "Built Power BI and Tableau dashboards for financial services stakeholders",
      "Mentored junior developers through code reviews and pair programming",
    ],
  },
];

export const projects: Array<{
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string[];
  featured: boolean;
  live: string | null;
  github?: string | null;
  videoSrc?: string;
}> = [
  {
    id: 1,
    title: "VabGenRx — Clinical Drug Safety Platform",
    description:
      "Production-ready multi-agent clinical decision system using Microsoft Agent Framework on Azure AI Foundry. Five specialized agents for safety analysis, contraindication evaluation, dosing analysis, and multilingual patient counselling. Generates comprehensive medication safety reports in under 90 seconds. HIPAA-compliant with 100+ language support and 100% evaluation pass rate.",
    tags: [
      "Multi-Agent AI",
      "Azure AI Foundry",
      "GPT-4o",
      "FastAPI",
      "HIPAA",
      "OpenTelemetry",
      "React",
    ],
    category: ["Clinical AI", "RAG/LLM"],
    featured: true,
    live: "#",
    github: "https://github.com/Aadarsh-Praveen/VabGen-Rx",
  },
  {
    id: 2,
    title: "AI Semantic Recommendation Engine",
    description:
      "Production-grade recommendation system processing 6.7M Amazon reviews across 31,100 products. Achieves 85.4% NDCG@10 using hybrid retrieval — BM25 + dense BGE embeddings + cross-encoder reranker — with sub-1s latency. Deployed on GCP with Qdrant Cloud vector DB.",
    tags: [
      "Hybrid Search",
      "Qdrant",
      "BGE Embeddings",
      "AWS SageMaker",
      "Polars",
      "Streamlit",
    ],
    category: ["RAG/LLM", "Data Science"],
    featured: true,
    live: "#",
    github: "https://github.com/Aadarsh-Praveen/amazon-electronics-recommendation-system",
  },
  {
    id: 3,
    title: "RAG Financial Analysis Chatbot",
    description:
      "Production RAG system for financial Q&A over 6.7M historical stock prices and news articles using LlamaIndex, LangChain and Google Vertex AI embeddings. Full CI/CD with DVC versioning, Docker orchestration, and Slack alerting.",
    tags: [
      "LlamaIndex",
      "LangChain",
      "Vertex AI",
      "GCS",
      "Docker",
      "DVC",
      "GitHub Actions",
    ],
    category: ["RAG/LLM"],
    featured: true,
    live: null,
    github: "https://github.com/narayana-3005/RAG-based-Financial-Analysis-Chatbot",
  },
  {
    id: 5,
    title: "Food-101 Image Classifier",
    description:
      "End-to-end image classification pipeline on 101 food categories using EfficientNetV2B0 with multi-stage training strategy (feature extraction → fine-tuning). Mixed-precision compute, TensorBoard tracking, 90%+ validation accuracy.",
    tags: [
      "TensorFlow",
      "EfficientNetV2",
      "Transfer Learning",
      "Mixed Precision",
      "Computer Vision",
    ],
    category: ["Computer Vision"],
    featured: false,
    live: null,
    github: "https://github.com/Aadarsh-Praveen/Food101",
  },
  {
    id: 6,
    title: "EEG Signal Classification",
    description:
      "Deep learning pipeline on CHB-MIT dataset using CNN and LSTM architectures with Welch PSD and STFT spectral analysis for pediatric epilepsy detection. Comparative analysis across CNN, LSTM, and Decision Tree classifiers.",
    tags: ["CNN", "LSTM", "MNE", "Signal Processing", "TensorFlow", "SciPy"],
    category: ["Computer Vision", "Data Science"],
    featured: false,
    live: null,
    github: "https://github.com/Aadarsh-Praveen/ECGClassificationUsing_RNN_CNN_LSTM_GRU",
  },
  {
    id: 7,
    title: "Customer Segmentation — RFM Analysis",
    description:
      "End-to-end customer segmentation on 500K+ transactions across 37 countries using RFM methodology and KMeans clustering (k=3). Identified 35-hour repeat purchase cycle, 2.27% return rate, and geographic revenue patterns.",
    tags: [
      "KMeans",
      "RFM",
      "Pandas",
      "Plotly",
      "Seaborn",
      "Data Analytics",
    ],
    category: ["Data Science"],
    featured: false,
    live: null,
    github: "https://github.com/Aadarsh-Praveen/CustomerSegmentationUsingRFMAnalysis",
  },
];

export const skills = [
  {
    group: "Generative AI & LLM",
    tags: [
      "GPT-4o",
      "LangChain",
      "LlamaIndex",
      "RAG Architectures",
      "Agentic AI",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "RAGAS",
      "Vertex AI Embeddings",
    ],
  },
  {
    group: "ML & Deep Learning",
    tags: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "HuggingFace Transformers",
      "Deep Learning",
      "NLP",
      "Transfer Learning",
      "Clustering",
    ],
  },
  {
    group: "Search & Retrieval",
    tags: [
      "Pinecone",
      "FAISS",
      "Qdrant",
      "BM25",
      "Dense Retrieval",
      "Hybrid Search",
      "Reranking",
      "Semantic Search",
    ],
  },
  {
    group: "Cloud & MLOps",
    tags: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "FastAPI",
      "MLflow",
      "Apache Airflow",
      "SageMaker",
      "CI/CD",
      "OpenTelemetry",
    ],
  },
  {
    group: "Data Engineering",
    tags: [
      "Apache Spark",
      "Polars",
      "Pandas",
      "PostgreSQL",
      "MongoDB",
      "DVC",
      "ETL Pipelines",
    ],
  },
  {
    group: "Languages & Tools",
    tags: [
      "Python",
      "SQL",
      "Pydantic",
      "PyTest",
      "Git",
      "Power BI",
      "Tableau",
      "Streamlit",
    ],
  },
];

export const achievements: Array<{
  title: string;
  subtitle: string;
  tags: string[];
  quote: string;
  team: string[];
  badgeUrl?: string;
  badgeImageUrl?: string;
}> = [
  {
    title: "🏆 2nd Place — InterSystems Challenge, HSIL Hackathon 2026",
    subtitle:
      "Secured 2nd place in the InterSystems Challenge at the HSIL Hackathon 2026 — a global health innovation event hosted at Harvard T.H. Chan School of Public Health — by building VabGenRx, an intelligent multi-agent AI solution for clinical drug safety.",
    tags: ["HSIL Hackathon", "Harvard", "InterSystems Challenge", "Healthcare AI", "AgenticAI"],
    quote:
      "Innovation rarely starts in a boardroom — it starts with a small team, a complex problem, and the audacity to believe there's a better way. At the HSIL Hackathon 2026 hosted at Harvard, we competed in the InterSystems Challenge and secured 2nd place by building VabGenRx. The challenge pushed us to go beyond code — to understand the deep operational and ethical challenges healthcare providers face daily. This milestone validated our vision: AI as a reliable partner in healthcare decision-making. The garage doors are open. Now it's time to scale.",
    team: ["Vignesh Kangeyan", "Bharathi Kishna", "Gokul Ravi"],
    badgeUrl: "https://www.credly.com/badges/1c989f18-25cb-4b9c-b1a0-a6aa1b2fc60e/public_url",
    badgeImageUrl: "/intersystems-badge.png",
  },
];

export const certifications: Array<{
  title: string;
  issuer: string;
  period: string;
  score: string | null;
  color: "blue" | "cyan";
}> = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    period: "Oct 2025 – Oct 2028",
    score: "857/1000",
    color: "blue",
  },
  {
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    period: "Oct 2025 – Oct 2027",
    score: null,
    color: "cyan",
  },
  {
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    period: "Oct 2025",
    score: null,
    color: "blue",
  },
];
