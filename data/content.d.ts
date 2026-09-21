export interface LinkItem {
  label: string;
  href: string;
}
export interface Profile {
  name: string;
  discipline: string;
  statement: string;
  status: string;
  second: string;
  email: string;
  links: LinkItem[];
}
export interface FocusItem {
  id: string;
  index: string;
  title: string;
  detail: string;
  tools: string[];
}
export interface Project {
  id: string;
  index: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
}
export interface LearningOrg {
  id: string;
  name: string;
  group: string;
  relation: string;
  logo: string;
  logoShape: "square" | "wide";
  logoSource: string;
  website: string;
  initials: string;
}
export interface Certification {
  id: string;
  name: string;
  organization: string;
  orgId: string;
  type: string;
  year: string;
  credentialUrl: string;
  placeholder: boolean;
}

export const profile: Profile;
export const focus: FocusItem[];
export const projects: Project[];
export const learningOrgs: LearningOrg[];
export const certifications: Certification[];
export const sections: { index: string; id: string; label: string }[];
