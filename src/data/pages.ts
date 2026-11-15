/**
 * ============================================================
 *  SKILLS, PROJECTS, TIMELINE & CONTACT PAGE CONTENT
 *  Edit the texts for these four pages here (English + German).
 *  Contact details themselves (email, WhatsApp, GitHub, LinkedIn)
 *  live in `siteConfig` in src/data/portfolio.ts.
 * ============================================================
 */
import type { Lang, ProjectId, SkillId } from "@/data/portfolio";

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
  projects: {
    title: string;
    subtitle: string;
    featuredLabel: string;
    items: {
      id: ProjectId;
      title: string;
      description: string;
      highlight: string;
      tags: string[];
      featured?: boolean;
    }[];
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
    projects: {
      title: "Projects",
      subtitle: "Selected Work & Case Studies",
      featuredLabel: "Featured Project",
      items: [
        {
          id: "excel",
          title: "Sales Dashboard — Excel",
          description:
            "Interactive sales dashboard analyzing regional revenue trends, profit margins & top products using Excel Pivot & Charts.",
          highlight: "Delivered insights to improve 15% sales performance.",
          tags: ["Excel", "Pivot", "Analytics"],
          featured: true,
        },
        {
          id: "python",
          title: "Python Data Cleaning",
          description: "Automated data cleaning pipeline for messy customer data using Python Pandas.",
          highlight: "Handled missing values • duplicates • outliers.",
          tags: ["Python", "Pandas", "Data Cleaning"],
        },
        {
          id: "sql",
          title: "SQL Analysis",
          description:
            "Performed SQL analysis on sales database to identify customer segments, revenue by month & cohort insights.",
          highlight: "Wrote complex joins • window functions.",
          tags: ["SQL", "PostgreSQL", "Analytics"],
        },
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
    projects: {
      title: "Projekte",
      subtitle: "Ausgewählte Arbeiten & Fallstudien",
      featuredLabel: "Hauptprojekt",
      items: [
        {
          id: "excel",
          title: "Vertriebs-Dashboard — Excel",
          description:
            "Interaktives Vertriebs-Dashboard zur Analyse regionaler Umsatztrends, Gewinnmargen und Top-Produkte mit Excel-Pivot und Diagrammen.",
          highlight: "Erkenntnisse zur Steigerung der Verkaufsleistung um 15 %.",
          tags: ["Excel", "Pivot", "Analytics"],
          featured: true,
        },
        {
          id: "python",
          title: "Datenbereinigung mit Python",
          description: "Automatisierte Pipeline zur Bereinigung unstrukturierter Kundendaten mit Python Pandas.",
          highlight: "Fehlende Werte • Duplikate • Ausreißer behandelt.",
          tags: ["Python", "Pandas", "Data Cleaning"],
        },
        {
          id: "sql",
          title: "SQL-Analyse",
          description:
            "SQL-Analyse einer Vertriebsdatenbank zur Ermittlung von Kundensegmenten, Monatsumsätzen und Kohorten-Erkenntnissen.",
          highlight: "Komplexe Joins • Fensterfunktionen geschrieben.",
          tags: ["SQL", "PostgreSQL", "Analytics"],
        },
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
