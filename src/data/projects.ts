import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Resume–Job Match Analyzer",
    summary:
      "A full-stack Resume-Job Match Analyzer with AI-assisted analysis and cloud deployment",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Gemini API",
      "Vercel",
      "Render",
      "Railway",
      "AWS Amplify",
      "AWS App Runner",
      "AWS RDS",
      "AWS S3",
      "AWS Secrets Manager"
    ],
    techStackGroups: [
      {
        label: "Core Product Stack",
        items: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Gemini API"]
      },
      {
        label: "Deployment Stacks",
        items: [
          "Vercel",
          "Render",
          "Railway",
          "AWS Amplify",
          "AWS App Runner",
          "AWS RDS",
          "AWS S3",
          "AWS Secrets Manager"
        ]
      }
    ],
    impact:
      "Built and deployed an end-to-end product with explainable scoring, history tracking, and Gemini-powered suggestions with reliable fallback logic.",
    githubUrl: "https://github.com/bumblebeeye/Resume-Job-Match-Analyzer",
    liveDemoUrl: "https://codex-aws-phase6.d7aj7hvvxk2xv.amplifyapp.com/",
    caseStudies: [
      {
        label: "Phase 1: Full-stack MVP and initial production deployment",
        href: "/projects/resume-job-match-analyzer-vrr"
      },
      {
        label: "Phase 2: AWS deployment and cloud architecture extension",
        href: "/projects/resume-job-match-analyzer-aws"
      },
      {
        label: "Phase 3 — Security Hardening and Operational Maturity",
        href: "/projects/resume-job-match-analyzer-phase3"
      }
    ],
    status: "featured"
  },
  {
    title: "Personal Portfolio Website",
    summary:
      "A production-ready portfolio website designed for job applications",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Docker", "Netlify"],
    impact:
      "Built a maintainable personal brand site with reusable components, typed content data, responsive layouts, and a deployment workflow that makes future updates fast and low-risk.",
    githubUrl: "https://github.com/bumblebeeye/portfolio-website",
    liveDemoUrl: "https://xinpei.netlify.app/",
    status: "featured",
    isCurrentSite: true
  },
  {
    title: "Victoria Energy Demand, Pricing, and Emissions Dashboard",
    summary:
      "An interactive Tableau dashboard analyzing how electricity demand, regional reference prices, and greenhouse gas emissions evolve in Victoria over time.",
    techStack: ["Tableau", "Data preparation", "Data Visualization", "Storytelling"],
    impact:
      "Designed a decision-support dashboard that surfaces pricing and demand patterns across seasons, weather, and holidays while highlighting emissions-heavy sectors.",
    detailsPath: "/projects/victoria-energy-dashboard",
    liveDemoUrl: "https://public.tableau.com/views/assignment1_17249770904430/Dashboard1?:showVizHome=no"
  }
];
