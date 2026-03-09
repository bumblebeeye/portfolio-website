import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "AI-Powered Resume–Job Match Analyzer",
    summary:
      "A full-stack Resume-Job Match Analyzer that compares resumes against job descriptions, scores fit, highlights skill gaps, and generates AI-assisted improvement suggestions.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Gemini API",
      "Vercel",
      "Render",
      "Railway"
    ],
    impact:
      "Built and deployed an end-to-end product (Vercel + Render + Railway) with explainable scoring, history tracking, and Gemini-powered suggestions with reliable fallback logic.",
    githubUrl: "https://github.com/bumblebeeye/Resume-Job-Match-Analyzer",
    liveDemoUrl: "https://resume-job-match-analyzer-rosy.vercel.app/",
    caseStudies: [
      {
        label: "Case Study (Vercel + Render + Railway)",
        href: "/projects/resume-job-match-analyzer-vrr"
      },
      {
        label: "Case Study (AWS Deployed)",
        disabled: true
      }
    ],
    status: "featured"
  },
  {
    title: "Personal Portfolio Website",
    summary:
      "A production-ready portfolio website designed for job applications, with a recruiter-friendly structure for presenting projects, experience, and contact details clearly.",
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
  },
  {
    title: "Coming Soon: Data Analytics Dashboard",
    summary:
      "An interactive dashboard for exploring KPIs and trends with clean visual summaries and filtering.",
    techStack: ["React", "TypeScript", "Chart.js", "SQL"],
    impact: "Designed to turn raw metrics into actionable insights for non-technical stakeholders.",
    githubUrl: "https://github.com/your-username",
    liveDemoUrl: "https://example.com",
    status: "coming-soon"
  },
  {
    title: "Coming Soon: AI-Powered Study Assistant",
    summary:
      "A productivity web app concept to help students organize notes and generate revision prompts.",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI API"],
    impact: "Planned to improve study efficiency with personalized feedback and task tracking.",
    githubUrl: "https://github.com/your-username",
    liveDemoUrl: "https://example.com",
    status: "coming-soon"
  }
];
