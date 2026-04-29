export type ProjectStatus = "featured" | "coming-soon";

export interface ProjectTechStackGroup {
  label: string;
  items: string[];
}

export interface Project {
  title: string;
  summary: string;
  techStack: string[];
  techStackGroups?: ProjectTechStackGroup[];
  impact: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  detailsPath?: string;
  status?: ProjectStatus;
  isCurrentSite?: boolean;
  progressNote?: string;
}
