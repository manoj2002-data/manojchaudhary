/**
 * ============================================================
 *  SKILLS, PROJECTS, TIMELINE & CONTACT PAGE CONTENT
 *  Edit the texts for these four pages here (English + German).
 *  Contact details themselves (email, WhatsApp, GitHub, LinkedIn)
 *  live in `siteConfig` in src/data/portfolio.ts.
 * ============================================================
 */
import type { Lang, SkillId } from "@/data/portfolio";

/** Skill levels are shared by both languages so they never drift apart. */
export const skillLevels: Record<SkillId, number> = {
  python: 90,
  sql: 85,
  excel: 95,
  powerbi: 80,
  german: 70,
  analytics: 85,
};

export interface TimelineEntry {
  year: string;
  title: string;
  place?: string;
  detail: string;
  /** The highlighted (gold) goal row. */
  goal?: boolean;
}

export interface PagesContent {
  skills: {
    title: string;
    subtitle: string;
    items: { id: SkillId; title: string; tags: string[] }[];
  };
  timeline: { title: string; subtitle: string; items: TimelineEntry[] };
  contact: {
    title: string;
    subtitle: string;
    location: string;
    email: string;
    phone: string;
    whatsappText: string;
    github: string;
    linkedin: string;
    sendMessage: string;
    emailSubject: string;
    availability: string;
  };
}

export const pagesContent: Record<Lang, PagesContent> = {
  en: {
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technical & Language Proficiency",
      items: [
        { id: "python", title: "Python", tags: ["Data Analysis", "Automation", "Pandas"] },
        { id: "sql", title: "SQL", tags: ["Queries", "Joins", "Data Modeling"] },
        { id: "excel", title: "Excel", tags: ["Pivot Tables", "Dashboards", "VLOOKUP"] },
        { id: "powerbi", title: "Power BI", tags: ["Dashboards", "DAX", "Visualization"] },
        { id: "german", title: "German B2", tags: ["Goethe B2 Certified", "Business Ready"] },
        { id: "analytics", title: "Data Analytics", tags: ["Insights", "ETL", "Reporting"] },
      ],
    },
    timeline: {
      title: "My Journey",
      subtitle: "From Dhangadhi to Germany",
      items: [
        { year: "2024", title: "BCA Completed", place: "Dhangadhi, Nepal", detail: "Graduated with 70%" },
        {
          year: "2024–2025",
          title: "Gap — Family Business",
          place: "Dhangadhi",
          detail: "Excel Operations & Business Management",
        },
        {
          year: "2025",
          title: "German B2",
          place: "Goethe Institute, Pune",
          detail: "Certified • Business Ready",
        },
        { year: "2026", title: "MCA", place: "Sikkim Manipal", detail: "Pursuing • SGPA 7.0" },
        {
          year: "2028",
          title: "Ausbildung",
          place: "Fachinformatiker Daten- und Prozessanalyse",
          detail: "Germany • Starting 2028",
          goal: true,
        },
      ],
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's collaborate for Ausbildung & Data Analytics Roles",
      location: "Location",
      email: "Email",
      phone: "Phone / WhatsApp",
      whatsappText: "Available on WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
      sendMessage: "Send Message",
      emailSubject: "Ausbildung / Data Analytics opportunity",
      availability: "Available for Ausbildung Opportunities • Germany 2028",
    },
  },

  de: {
    skills: {
      title: "Fähigkeiten & Expertise",
      subtitle: "Technische & sprachliche Kompetenzen",
      items: [
        { id: "python", title: "Python", tags: ["Datenanalyse", "Automatisierung", "Pandas"] },
        { id: "sql", title: "SQL", tags: ["Abfragen", "Joins", "Datenmodellierung"] },
        { id: "excel", title: "Excel", tags: ["Pivot-Tabellen", "Dashboards", "SVERWEIS"] },
        { id: "powerbi", title: "Power BI", tags: ["Dashboards", "DAX", "Visualisierung"] },
        { id: "german", title: "Deutsch B2", tags: ["Goethe-Zertifikat B2", "Berufstauglich"] },
        { id: "analytics", title: "Datenanalyse", tags: ["Erkenntnisse", "ETL", "Reporting"] },
      ],
    },
    timeline: {
      title: "Mein Werdegang",
      subtitle: "Von Dhangadhi nach Deutschland",
      items: [
        { year: "2024", title: "BCA abgeschlossen", place: "Dhangadhi, Nepal", detail: "Abschluss mit 70 %" },
        {
          year: "2024–2025",
          title: "Lücke — Familienunternehmen",
          place: "Dhangadhi",
          detail: "Excel-Betrieb & Unternehmensführung",
        },
        {
          year: "2025",
          title: "Deutsch B2",
          place: "Goethe-Institut, Pune",
          detail: "Zertifiziert • Berufstauglich",
        },
        { year: "2026", title: "MCA", place: "Sikkim Manipal", detail: "Laufend • SGPA 7,0" },
        {
          year: "2028",
          title: "Ausbildung",
          place: "Fachinformatiker Daten- und Prozessanalyse",
          detail: "Deutschland • Beginn 2028",
          goal: true,
        },
      ],
    },
    contact: {
      title: "Kontakt",
      subtitle: "Lassen Sie uns für Ausbildung & Datenanalyse zusammenarbeiten",
      location: "Standort",
      email: "E-Mail",
      phone: "Telefon / WhatsApp",
      whatsappText: "Erreichbar über WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
      sendMessage: "Nachricht senden",
      emailSubject: "Ausbildung / Datenanalyse",
      availability: "Offen für Ausbildungsangebote • Deutschland 2028",
    },
  },
};

/**
 * Projects page — copied word-for-word from Manoj's brief.
 * Shown the same in both languages (the brief asked not to change any text).
 */
export interface BoardProject {
  date: string;
  title: string;
  tech: string;
  description: string;
}

export const projectsBoard = {
  name: "Manoj Chaudhary",
  tagline: "Data Analyst • Munich, Germany • Applicant",
  menu: [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Skills", to: "/skills" },
    { label: "Contact", to: "/contact" },
  ] as const,
  title: "Projects",
  subtitle: "6 projects • Coming Soon • Building new data solutions for Munich & beyond",
  githubButton: "View on GitHub",
  demoButton: "Live Demo • Coming Soon",
  githubUrl: "https://github.com/manojchaudharydata",
  githubLabel: "github.com/manojchaudharydata",
  footerBefore: "View full code on GitHub",
  footerAfter: ["Open to Data Analyst roles", "Available Aug 2028"],
  items: [
    {
      date: "Dec 2026",
      title: "Pune Rent Prediction",
      tech: "Python • ML",
      description:
        "Regression model to predict Pune PG rent using features like location, amenities, distance to campus, room type.",
    },
    {
      date: "Jan 2027",
      title: "Nepal Tourism Dashboard",
      tech: "Power BI",
      description:
        "Interactive dashboard for Nepal tourism trends. Visitor arrivals, season, top destinations, revenue insights.",
    },
    {
      date: "Feb 2027",
      title: "DAAD Scholarship Analysis",
      tech: "Excel",
      description:
        "Analysis of DAAD scholarship trends. Success rates by country, field of study, year-on-year comparison.",
    },
    {
      date: "March 2027",
      title: "Germany Blocked Account Cost Calculator",
      tech: "Python",
      description: "Cost estimation tool for blocked account expenses. Monthly living costs, savings planning.",
    },
    {
      date: "March 2027",
      title: "Public Transport Analysis of Germany",
      tech: "Python",
      description:
        "Analysis of Germany public transport ridership. Route usage, peak hours, efficiency metrics, delay patterns.",
    },
    {
      date: "March 2027",
      title: "Nepali Students in Germany Sentiment",
      tech: "Python",
      description: "NLP sentiment analysis on student feedback. Text preprocessing, sentiment scoring, insights.",
    },
  ] satisfies BoardProject[],
};
