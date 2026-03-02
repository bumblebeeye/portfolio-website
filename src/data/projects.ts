import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    summary:
      "A modern portfolio website built with Next.js App Router to showcase projects, skills, and professional profile.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify"],
    impact:
      "Created a recruiter-friendly personal brand site with reusable components and clear content structure for fast updates.",
    githubUrl: "https://github.com/your-username/peter-portfolio",
    liveDemoUrl: "https://your-portfolio.netlify.app",
    status: "featured"
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
