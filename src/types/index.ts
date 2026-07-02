export type TimelineItemType = "work" | "milestone" | "project";

export interface TimelineItem {
  id: string;
  type: TimelineItemType;
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  logo?: string;
  link?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  course: string;
  period: string;
  status: "concluído" | "em andamento" | "previsto";
  description?: string;
  logo?: string;
}

export type ProjectCategory =
  | "App"
  | "E-commerce"
  | "Sistema"
  | "Portal"
  | "Site"
  | "Plataforma";

export interface Project {
  id: string;
  name: string;
  company?: string;
  description: string;
  solution?: string;
  features: string[];
  period?: string;
  link?: string;
  image?: string;
  imageFit?: "contain" | "cover";
  technologies?: string[];
  category?: ProjectCategory;
  country?: "BR" | "US";
  group: "featured" | "bredi";
}

export type TerminalLineType = "input" | "output" | "success" | "error" | "info";

export interface TerminalLine {
  type: TerminalLineType;
  text: string;
}

export interface TerminalScenario {
  id: string;
  title: string;
  lines: TerminalLine[];
}

export type NotificationIcon = "deploy" | "git" | "npm" | "bell" | "api";

export interface DevNotification {
  id: string;
  message: string;
  icon: NotificationIcon;
}
