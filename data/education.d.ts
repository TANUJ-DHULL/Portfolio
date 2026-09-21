export type EducationCategory = "university" | "institute" | "school";

export interface EducationRecord {
  id: string;
  category: EducationCategory;
  institution: string;
  program: string;
  status: "Currently Pursuing" | "Completed";
  year: string;
  location: string;
  logo: string;
  logoShape: "square" | "wide";
  logoSource: string;
  website: string;
  initials: string;
  placeholder: boolean;
  focus: string[];
  note: string;
}

export const education: EducationRecord[];
export default education;
