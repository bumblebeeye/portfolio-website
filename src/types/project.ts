export type ProjectStatus = "featured" | "coming-soon";

export interface Project {
  title: string;
  summary: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  detailsPath?: string;
  status?: ProjectStatus;
  isCurrentSite?: boolean;
  progressNote?: string;
}
