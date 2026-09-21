/**
 * data/education.js
 * ---------------------------------------------------------------------------
 * Single source of truth for Tanuj Dhull's academic & institutional record.
 *
 * Add a new school / institution by simply pushing another object into this
 * array — the timeline, the record table and the logo wall all read from here
 * and adapt automatically. No UI changes required.
 *
 * Field reference
 *   id            stable slug
 *   category      "university" | "institute" | "school"  (drives grouping)
 *   institution   official institution name
 *   program       degree / programme / class level
 *   status        "Currently Pursuing" | "Completed"
 *   year          year or range shown in the record
 *   location      city, state
 *   logo          OFFICIAL logo only (see logoSource). Leave "" to render the
 *                 designed initials-monogram / text record instead.
 *   logoShape     "square" (crest/seal) or "wide" (wordmark) — keeps every
 *                 mark visually balanced via object-fit: contain.
 *   logoSource    internal provenance note (not rendered in the main UI)
 *   website       official institution website
 *   focus         focus areas / coursework themes
 *   initials      2–4 letters used by the fallback mark
 *   placeholder   true = entry awaits a name / official logo from the owner
 */

export const education = [
  {
    id: "iitm",
    category: "university",
    institution: "IIT Madras",
    program: "BS Data Science",
    status: "Currently Pursuing",
    year: "Present",
    location: "Chennai, Tamil Nadu",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/IIT_Madras_Logo_(Black_and_White).svg",
    logoShape: "square",
    logoSource: "Official institution mark, monochrome edition — Wikimedia Commons, sourced from IIT Madras (CC BY-SA 4.0)",
    website: "https://www.iitm.ac.in/",
    initials: "IM",
    placeholder: false,
    focus: [
      "Machine Learning",
      "Statistics & Probability",
      "Data Science",
      "Programming & Algorithms",
    ],
    note: "The academic backbone of the work on this page — mathematics and statistics first, then models built on top of them.",
  },
  {
    id: "jiet",
    category: "institute",
    institution: "Jind Institute of Engineering & Technology",
    program: "BCA — Bachelor of Computer Applications",
    status: "Currently Pursuing",
    year: "Present",
    location: "Jind, Haryana",
    logo: "",
    logoShape: "square",
    logoSource:
      "No verified official mark retrieved from the institution's own brand assets — rendering the designed text record instead of an unverified image.",
    website: "https://www.jietjind.ac.in/",
    initials: "JIET",
    placeholder: false,
    focus: ["Computer Applications", "Software Development", "Databases"],
    note: "Software practice: application architecture, databases and the engineering discipline behind shipping things that work.",
  },
  {
    id: "school-xii",
    category: "school",
    institution: "Senior Secondary School",
    program: "Senior Secondary — Class XII",
    status: "Completed",
    year: "2023",
    location: "India",
    logo: "",
    logoShape: "square",
    logoSource: "",
    website: "",
    initials: "XII",
    placeholder: true,
    focus: ["Science", "Mathematics"],
    note: "",
  },
  {
    id: "school-x",
    category: "school",
    institution: "Secondary School",
    program: "Secondary — Class X",
    status: "Completed",
    year: "2021",
    location: "India",
    logo: "",
    logoShape: "square",
    logoSource: "",
    website: "",
    initials: "X",
    placeholder: true,
    focus: ["General Studies"],
    note: "",
  },
];

export default education;
