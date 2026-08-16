import {
  Blocks,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Network,
  Server,
  TerminalSquare,
  TestTube2,
  Workflow
} from "lucide-react";

export const profile = {
  name: "Ratish Kapoor",
  role: "Software Engineer",
  school: "Computer Science undergraduate at VIT Chennai",
  headline: "Building software systems across AI, infrastructure, and developer tooling.",
  email: "ratishkapoor5@gmail.com",
  github: "https://github.com/Ironpatriot06",
  leetcode: "https://leetcode.com/u/ratishkapoor5/",
  linkedin: "https://www.linkedin.com/in/ratishkapoor/",
  resume: "https://drive.google.com/file/d/1dsjVSB8W9hlCOiFf-m3qCXgB7l_q5Jp7/view?usp=sharing"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const buildAreas = [
  {
    title: "Backend & Systems",
    icon: Server,
    text: "APIs, backend services, databases, authentication, performance, and distributed execution.",
    items: ["FastAPI services", "SQL persistence", "Auth workflows", "Performance tuning"]
  },
  {
    title: "AI Engineering",
    icon: BrainCircuit,
    text: "LLM applications, RAG, semantic search, conversational systems, and AI-assisted workflows.",
    items: ["LangChain", "Vector search", "Gemini API", "Document intelligence"]
  },
  {
    title: "Full-Stack Products",
    icon: Blocks,
    text: "Next.js, React, TypeScript, dashboards, SaaS-style applications, and modular UI systems.",
    items: ["Next.js", "React", "Tailwind CSS", "Dashboards"]
  },
  {
    title: "Developer Infrastructure",
    icon: TerminalSquare,
    text: "Observability, debugging, tracing, testing, automation, analytics, and developer tooling.",
    items: ["Tracing", "Regression tests", "Cron automation", "Debug tooling"]
  }
];

export const experiences = [
  {
    company: "Info Edge",
    role: "Software Engineering Intern",
    period: "May 2026 - Jun 2026",
    summary:
      "Engineering work on ITSensei, an enterprise platform involving identity, streaming, analytics, automation, and validation workflows.",
    highlights: [
      "Integrated Microsoft Graph APIs and Microsoft Entra ID / Azure AD authentication.",
      "Worked with real-time streaming, performance optimization, and Streamlit + SQL analytics.",
      "Applied SBERT, HDBSCAN, TF-IDF, and LLM-based classification in enterprise workflows.",
      "Built with MCP tools, cron automation, API testing, functional testing, and workflow validation."
    ],
    tags: ["Microsoft Graph", "Entra ID", "SBERT", "HDBSCAN", "MCP", "Testing"]
  },
  {
    company: "EY",
    role: "AI Engineering Intern",
    period: "May 2025 - Jun 2025",
    summary:
      "Built backend and AI workflow pieces for an AI-powered travel platform with retrieval and document intelligence capabilities.",
    highlights: [
      "Developed scalable backend services using LangChain and vector search.",
      "Worked on backend optimization, including a 50% response-time improvement.",
      "Implemented document intelligence with PDF parsing, semantic search, and retrieval workflows."
    ],
    tags: ["LangChain", "Vector Search", "PDF Parsing", "RAG", "Backend"]
  },
  {
    company: "Samsung PRISM",
    role: "Project Intern",
    period: "Jul 2025 - May 2026",
    summary:
      "Contributed to emotion-aware conversational AI with NLP, speech processing, dataset analysis, and model development.",
    highlights: [
      "Worked on context-aware voice interaction systems.",
      "Analyzed datasets and contributed to model development for emotion-aware conversational behavior."
    ],
    tags: ["NLP", "Speech Processing", "Conversational AI", "Model Development"]
  },
  {
    company: "MonoSpace",
    role: "React Developer Intern",
    period: "Jan 2025 - Mar 2025",
    summary:
      "Built modular frontend architecture with reusable React components, Tailwind CSS, Git workflows, and testing.",
    highlights: [
      "Improved load time by 15%.",
      "Developed reusable UI components with React.js and Tailwind CSS."
    ],
    tags: ["React", "Tailwind CSS", "Testing", "Git"]
  }
];

export const projects = [
  {
    slug: "apollo",
    title: "Apollo",
    subtitle: "Application Observability & Debugging Platform",
    priority: "Flagship",
    description:
      "A request-centric observability and debugging platform that instruments applications and correlates HTTP requests with SQL queries, outbound HTTP calls, exceptions, and distributed execution events.",
    problem:
      "Application debugging often requires stitching together logs, database activity, dependency calls, exceptions, and request context after the fact.",
    solution:
      "Apollo uses request IDs and span IDs to connect execution events into end-to-end request traces, enabling root-cause investigation, dependency analysis, and performance debugging.",
    architecture:
      "Instrumented Python SDK, asynchronous FastAPI services, PostgreSQL persistence, scalable event ingestion, and a Next.js observability console.",
    engineering: [
      "Request/span correlation across SQL queries, HTTP calls, exceptions, and distributed execution events.",
      "Real-time event updates, request exploration, advanced filtering/search, summaries, execution timelines, and span/waterfall visualization.",
      "AI-assisted debugging and root-cause analysis for request-level investigation.",
      "Pytest, Vitest, API regression testing, UI regression testing, mutation testing, authentication, and performance-focused observability pipelines."
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Next.js", "TypeScript", "React", "Docker", "Pytest", "Vitest"],
    flow: ["Instrumented Python Application", "Request / Span IDs", "Event Collection", "FastAPI Services", "PostgreSQL", "Next.js Observability UI"],
    eventTypes: ["HTTP Request", "SQL Query", "Outbound HTTP Call", "Exception", "Distributed Event"],
    githubUrl: "https://github.com/Ironpatriot06/Apollo",
    githubCta: "View Apollo on GitHub"
  },
  {
    slug: "smartcv",
    title: "SmartCV",
    subtitle: "AI Resume Tailoring Tool",
    priority: "Full-stack AI product",
    description:
      "A SaaS-style application for resume PDF parsing, job description analysis, semantic matching, and Gemini-powered ATS-oriented recommendations tailored to job descriptions and suggestions.",
    problem:
      "Candidates need a structured way to compare resumes against job descriptions and identify relevant improvements.",
    solution:
      "SmartCV processes resumes, analyzes job descriptions, and generates AI-assisted recommendations through a modular backend and full-stack interface.",
    architecture:
      "FastAPI backend, Next.js frontend, resume PDF parsing with PyMuPDF, Gemini API recommendations, and Supabase persistence.",
    engineering: [
      "Efficient resume processing pipeline.",
      "Semantic matching between resume content and job descriptions.",
      "FastAPI backend, Next.js frontend, Gemini-powered analysis, modular backend architecture, and Supabase persistence."
    ],
    stack: ["Python", "Gemini API", "FastAPI", "Next.js", "Tailwind CSS", "PyMuPDF", "Supabase"],
    flow: ["Resume PDF", "PyMuPDF Parsing", "Resume + Job Description Analysis", "Semantic / AI Analysis", "Gemini", "ATS-Oriented Recommendations"],
    githubUrl: "https://github.com/Ironpatriot06/SmartCV",
    githubCta: "View SmartCV on GitHub"
  },
  {
    slug: "travel-assistant",
    title: "AI Travel Planning Assistant",
    subtitle: "RAG-powered travel agent",
    priority: "AI workflow",
    description:
      "An AI travel planning agent with retrieval-augmented generation, vector search, conversational memory, external API integration, and personalized itinerary generation.",
    problem:
      "Travel planning requires combining user preferences, retrieved context, and external travel data into a coherent itinerary.",
    solution:
      "The assistant connects an agent workflow with retrieval, ChromaDB, external APIs, and itinerary generation.",
    architecture:
      "LangChain and Streamlit application using Gemini API, ChromaDB, RAG, conversational memory, and Amadeus API integration.",
    engineering: [
      "Modular backend architecture for retrieval and generation.",
      "Conversational memory and personalized itinerary construction.",
      "LangChain orchestration, ChromaDB vector database, Retrieval-Augmented Generation, Streamlit interface, and external API integration through Amadeus API."
    ],
    stack: ["LangChain", "Streamlit", "Gemini API", "ChromaDB", "RAG", "Amadeus API"],
    flow: ["User Preferences", "LangChain Agent", "Context / Retrieval", "ChromaDB", "External Travel APIs", "Personalized Itinerary"],
    githubUrl: "https://github.com/Ironpatriot06/Travel_AgentAI",
    githubCta: "View Travel Agent on GitHub"
  },
  {
    slug: "ayush-herbal-garden",
    title: "Ayush: Herbal Garden",
    subtitle: "Full-stack knowledge platform",
    priority: "Knowledge system",
    description:
      "A full-stack knowledge platform with authentication, semantic document retrieval, RAG, and intelligent search/summarization.",
    problem:
      "Domain knowledge platforms need search and summarization that can work across document content instead of only metadata.",
    solution:
      "Ayush combines authentication, semantic retrieval, and generative summarization in a full-stack product.",
    architecture:
      "Next.js and TypeScript frontend with LangChain, Gemini API, Pandas, Supabase, MongoDB, Google Authentication, and Vercel deployment.",
    engineering: [
      "Semantic document retrieval and RAG workflows.",
      "Google Authentication and Supabase-backed platform capabilities.",
      "Next.js and TypeScript frontend, MongoDB, LangChain, Gemini API, intelligent search and summarization, and Vercel deployment."
    ],
    stack: ["Next.js", "TypeScript", "LangChain", "Gemini API", "Pandas", "Supabase", "MongoDB"],
    flow: ["Next.js Application", "Authentication", "Knowledge / Documents", "Semantic Retrieval", "LangChain + Gemini", "Search / Summarization"],
    githubUrl: "https://github.com/Ironpatriot06/AYUSH-HealthBot",
    githubCta: "View Ayush on GitHub"
  },
  {
    slug: "briefly",
    title: "Briefly",
    subtitle: "PDF Answering Chatbot",
    priority: "Document AI",
    description:
      "A PDF answering chatbot for parsing documents, semantic retrieval, question answering, and document storage.",
    problem:
      "Users need to ask targeted questions over PDF content without manually scanning the entire document.",
    solution:
      "Briefly parses PDFs, stores document context, retrieves relevant content, and answers questions with an LLM workflow.",
    architecture:
      "Streamlit interface with Langflow, Gemini API, LangChain, and MongoDB for document storage.",
    engineering: [
      "PDF parsing and semantic retrieval.",
      "Question answering over uploaded documents.",
      "MongoDB document storage, LangChain, Langflow, Gemini API, and modular backend architecture for document workflows."
    ],
    stack: ["Streamlit", "Langflow", "Gemini API", "LangChain", "MongoDB"],
    flow: ["PDF", "Document Parsing", "Semantic Retrieval", "LangChain / Langflow", "Gemini", "Answer"],
    githubUrl: "https://github.com/Ironpatriot06/Breifly",
    githubCta: "View Briefly on GitHub"
  }
];

export const skillGroups = [
  { title: "Languages", icon: Code2, skills: ["Python", "C++", "Java", "Go", "SQL", "TypeScript", "JavaScript"] },
  { title: "Software Engineering", icon: Workflow, skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "REST APIs", "DBMS", "System Design"] },
  { title: "Systems", icon: Gauge, skills: ["Linux", "Operating Systems", "Computer Networks", "API Testing", "Performance Optimization", "Troubleshooting"] },
  { title: "Frameworks", icon: GitBranch, skills: ["React.js", "Next.js", "FastAPI", "Node.js", "Express.js", "Tailwind CSS"] },
  { title: "Databases", icon: Database, skills: ["MySQL", "MongoDB", "PostgreSQL / Supabase", "ChromaDB"] },
  { title: "AI / ML", icon: Bot, skills: ["OpenAI API", "Claude API", "Gemini API", "Prompt Engineering", "LangChain", "RAG", "Vector Databases", "SBERT", "HDBSCAN"] },
  { title: "Cloud / Tools", icon: Network, skills: ["Git", "GitHub", "AWS", "Microsoft Graph API", "MCP", "Vercel", "Postman", "Streamlit", "Plotly", "Cron Jobs", "Docker"] },
  { title: "Testing", icon: TestTube2, skills: ["Pytest", "Vitest", "API Regression Testing", "UI Regression Testing", "Functional Testing", "Mutation Testing"] }
];
