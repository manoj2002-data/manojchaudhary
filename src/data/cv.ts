/**
 * ============================================================
 *  EUROPASS CV CONTENT — edit the CV texts here (English + German).
 *  Work bullets come from src/data/about.ts and projects from
 *  src/data/pages.ts, so the CV always matches the rest of the site.
 *  Contact details come from `siteConfig` in src/data/portfolio.ts.
 * ============================================================
 */
import type { Lang } from "@/data/portfolio";

export interface CvEntry {
  period: string;
  title: string;
  place: string;
  details: string[];
}

export interface CvContent {
  docLabel: string;
  back: string;
  download: string;
  downloadHint: string;
  headline: string;
  labels: { address: string; phone: string; email: string; nationality: string; github: string };
  address: string;
  nationality: string;
  sections: {
    about: string;
    work: string;
    education: string;
    languages: string;
    digital: string;
    projects: string;
  };
  about: string;
  work: Omit<CvEntry, "details">;
  education: CvEntry[];
  languages: {
    motherTongueLabel: string;
    motherTongue: string;
    otherLabel: string;
    items: { name: string; level: string; note?: string }[];
  };
  digital: { group: string; items: string }[];
  projectsNote: string;
}

export const cvContent: Record<Lang, CvContent> = {
  en: {
    docLabel: "Europass Curriculum Vitae",
    back: "Back to home",
    download: "Download PDF",
    downloadHint: "Opens the print window — choose “Save as PDF”.",
    headline: "Data Analyst • Applicant for Ausbildung Fachinformatiker Daten- und Prozessanalyse (Class of 2028)",
    labels: { address: "Address", phone: "Phone / WhatsApp", email: "Email", nationality: "Nationality", github: "GitHub" },
    address: "Pune, India",
    nationality: "Nepali",
    sections: {
      about: "About me",
      work: "Work experience",
      education: "Education and training",
      languages: "Language skills",
      digital: "Digital skills",
      projects: "Projects",
    },
    about:
      "Data Analyst from Dhangadhi, Nepal, now based in Pune, India. BCA graduate currently studying for an MCA, with German at B2 level (Goethe-Zertifikat). Preparing for the Ausbildung Fachinformatiker für Daten- und Prozessanalyse in Germany, Class of 2028, with hands-on experience in Excel reporting from my family's retail business.",
    work: {
      period: "2024 – 2025",
      title: "Family Business Operations — Operations & Data Support",
      place: "Family retail business · Dhangadhi, Nepal",
    },
    education: [
      {
        period: "2026 – 2028 (ongoing)",
        title: "Master of Computer Applications (MCA)",
        place: "Sikkim Manipal University",
        details: ["SGPA 7.0", "Focus: Data Science, Analytics, Machine Learning"],
      },
      {
        period: "2025",
        title: "Goethe-Zertifikat B2 (German)",
        place: "Goethe-Institut · Pune, India",
        details: ["Certified German language proficiency at B2 level"],
      },
      {
        period: "2024",
        title: "Bachelor of Computer Applications (BCA)",
        place: "Dhangadhi, Nepal",
        details: ["Final grade: 70%", "Focus: Computer Science, Database, Programming"],
      },
    ],
    languages: {
      motherTongueLabel: "Mother tongue",
      motherTongue: "Nepali",
      otherLabel: "Other languages",
      items: [
        { name: "German", level: "B2", note: "Goethe-Zertifikat B2 (2025)" },
        { name: "English", level: "Fluent" },
        { name: "Hindi", level: "Fluent" },
      ],
    },
    digital: [
      { group: "Data analysis", items: "Python (Pandas, automation) • SQL (queries, joins, data modeling)" },
      { group: "Reporting & visualization", items: "Excel (pivot tables, dashboards, VLOOKUP) • Power BI (dashboards, DAX)" },
      { group: "Analytics", items: "Data cleaning, ETL, insights and reporting" },
    ],
    projectsNote: "Upcoming portfolio projects — code at",
  },

  de: {
    docLabel: "Europass-Lebenslauf",
    back: "Zur Startseite",
    download: "Als PDF herunterladen",
    downloadHint: "Öffnet das Druckfenster — „Als PDF speichern“ wählen.",
    headline: "Datenanalyst • Bewerber für die Ausbildung Fachinformatiker Daten- und Prozessanalyse (Jahrgang 2028)",
    labels: { address: "Adresse", phone: "Telefon / WhatsApp", email: "E-Mail", nationality: "Staatsangehörigkeit", github: "GitHub" },
    address: "Pune, Indien",
    nationality: "Nepalesisch",
    sections: {
      about: "Über mich",
      work: "Berufserfahrung",
      education: "Schul- und Berufsbildung",
      languages: "Sprachkenntnisse",
      digital: "Digitale Kompetenzen",
      projects: "Projekte",
    },
    about:
      "Datenanalyst aus Dhangadhi, Nepal, derzeit wohnhaft in Pune, Indien. BCA-Absolvent, aktuell im MCA-Studium, mit Deutschkenntnissen auf B2-Niveau (Goethe-Zertifikat). Ich bereite mich auf die Ausbildung zum Fachinformatiker für Daten- und Prozessanalyse in Deutschland (Jahrgang 2028) vor und bringe praktische Erfahrung mit Excel-Berichten aus dem Einzelhandel meiner Familie mit.",
    work: {
      period: "2024 – 2025",
      title: "Mitarbeit im Familienunternehmen — Betrieb & Datenunterstützung",
      place: "Familiärer Einzelhandel · Dhangadhi, Nepal",
    },
    education: [
      {
        period: "2026 – 2028 (laufend)",
        title: "Master of Computer Applications (MCA)",
        place: "Sikkim Manipal University",
        details: ["SGPA 7,0", "Schwerpunkt: Data Science, Analytics, Machine Learning"],
      },
      {
        period: "2025",
        title: "Goethe-Zertifikat B2 (Deutsch)",
        place: "Goethe-Institut · Pune, Indien",
        details: ["Zertifizierte Deutschkenntnisse auf Niveau B2"],
      },
      {
        period: "2024",
        title: "Bachelor of Computer Applications (BCA)",
        place: "Dhangadhi, Nepal",
        details: ["Abschlussnote: 70 %", "Schwerpunkt: Informatik, Datenbanken, Programmierung"],
      },
    ],
    languages: {
      motherTongueLabel: "Muttersprache",
      motherTongue: "Nepali",
      otherLabel: "Weitere Sprachen",
      items: [
        { name: "Deutsch", level: "B2", note: "Goethe-Zertifikat B2 (2025)" },
        { name: "Englisch", level: "Fließend" },
        { name: "Hindi", level: "Fließend" },
      ],
    },
    digital: [
      { group: "Datenanalyse", items: "Python (Pandas, Automatisierung) • SQL (Abfragen, Joins, Datenmodellierung)" },
      { group: "Reporting & Visualisierung", items: "Excel (Pivot-Tabellen, Dashboards, SVERWEIS) • Power BI (Dashboards, DAX)" },
      { group: "Analytik", items: "Datenbereinigung, ETL, Erkenntnisse und Reporting" },
    ],
    projectsNote: "Geplante Portfolio-Projekte — Code auf",
  },
};
