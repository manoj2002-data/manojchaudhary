/**
 * ============================================================
 *  SKILLS, PROJECTS, TIMELINE & CONTACT PAGE CONTENT
 *  Edit the texts for these four pages here (English + German).
 *  Contact details themselves (email, WhatsApp, GitHub, LinkedIn)
 *  live in `siteConfig` in src/data/portfolio.ts.
 * ============================================================
 */
import { siteConfig, type Lang, type SkillId } from "@/data/portfolio";

/** Skill levels are shared by both languages so they never drift apart. */
export const skillLevels: Record<SkillId, number> = {
  python: 90,
  sql: 85,
  excel: 95,
  powerbi: 80,
  german: 70,
  analytics: 85,
};

/** The six upcoming projects shown on the Projects page (same order in both languages). */
export type ProjectBoardId = "rent" | "tourism" | "daad" | "blocked" | "transport" | "sentiment";

/** Manoj's GitHub, linked from every project card. */
export const projectsGithub = siteConfig.github;

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
    githubButton: string;
    demoButton: string;
    /** Line under the cards: text before the GitHub link, then the parts after it. */
    noteBefore: string;
    noteAfter: string[];
    items: { id: ProjectBoardId; date: string; title: string; tech: string; description: string }[];
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
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sendHint: string;
      emailApp: string;
      copyEmail: string;
      copied: string;
      errors: { name: string; email: string; message: string };
    };
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
      subtitle: "6 projects • Coming Soon • Building new data solutions for Munich & beyond",
      githubButton: "View on GitHub",
      demoButton: "Live Demo • Coming Soon",
      noteBefore: "View full code on GitHub",
      noteAfter: ["Open to Data Analyst roles", "Available Aug 2028"],
      items: [
        {
          id: "rent",
          date: "Dec 2026",
          title: "Pune Rent Prediction",
          tech: "Python • ML",
          description:
            "Regression model to predict Pune PG rent using features like location, amenities, distance to campus, room type.",
        },
        {
          id: "tourism",
          date: "Jan 2027",
          title: "Nepal Tourism Dashboard",
          tech: "Power BI",
          description:
            "Interactive dashboard for Nepal tourism trends. Visitor arrivals, season, top destinations, revenue insights.",
        },
        {
          id: "daad",
          date: "Feb 2027",
          title: "DAAD Scholarship Analysis",
          tech: "Excel",
          description:
            "Analysis of DAAD scholarship trends. Success rates by country, field of study, year-on-year comparison.",
        },
        {
          id: "blocked",
          date: "March 2027",
          title: "Germany Blocked Account Cost Calculator",
          tech: "Python",
          description: "Cost estimation tool for blocked account expenses. Monthly living costs, savings planning.",
        },
        {
          id: "transport",
          date: "March 2027",
          title: "Public Transport Analysis of Germany",
          tech: "Python",
          description:
            "Analysis of Germany public transport ridership. Route usage, peak hours, efficiency metrics, delay patterns.",
        },
        {
          id: "sentiment",
          date: "March 2027",
          title: "Nepali Students in Germany Sentiment",
          tech: "Python",
          description: "NLP sentiment analysis on student feedback. Text preprocessing, sentiment scoring, insights.",
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
      whatsappText: "Chat on WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
      sendMessage: "Send Message",
      emailSubject: "Ausbildung / Data Analytics opportunity",
      availability: "Available for Ausbildung Opportunities • Germany 2028",
      form: {
        title: "Write to me",
        name: "Your name",
        namePlaceholder: "e.g. Anna Müller",
        email: "Your email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Hello Manoj, …",
        sendHint: "Opens Gmail in a new tab with your message ready to send.",
        emailApp: "Or open in your email app",
        copyEmail: "Copy email",
        copied: "Copied!",
        errors: {
          name: "Please enter your name.",
          email: "Please enter a valid email address.",
          message: "Please write a message (max. 2000 characters).",
        },
      },
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
      subtitle: "6 Projekte • Demnächst • Neue Datenlösungen für München & darüber hinaus",
      githubButton: "Auf GitHub ansehen",
      demoButton: "Live-Demo • Demnächst",
      noteBefore: "Vollständiger Code auf GitHub",
      noteAfter: ["Offen für Data-Analyst-Stellen", "Verfügbar ab Aug. 2028"],
      items: [
        {
          id: "rent",
          date: "Dez. 2026",
          title: "Mietpreisvorhersage Pune",
          tech: "Python • ML",
          description:
            "Regressionsmodell zur Vorhersage von PG-Mieten in Pune anhand von Merkmalen wie Lage, Ausstattung, Entfernung zum Campus und Zimmertyp.",
        },
        {
          id: "tourism",
          date: "Jan. 2027",
          title: "Nepal-Tourismus-Dashboard",
          tech: "Power BI",
          description:
            "Interaktives Dashboard zu Tourismustrends in Nepal. Besucherankünfte, Saison, beliebteste Reiseziele, Umsatzeinblicke.",
        },
        {
          id: "daad",
          date: "Feb. 2027",
          title: "DAAD-Stipendienanalyse",
          tech: "Excel",
          description:
            "Analyse von DAAD-Stipendientrends. Erfolgsquoten nach Land und Studienfach, Vergleich mit dem Vorjahr.",
        },
        {
          id: "blocked",
          date: "März 2027",
          title: "Sperrkonto-Kostenrechner für Deutschland",
          tech: "Python",
          description: "Tool zur Kostenschätzung für Sperrkonto-Ausgaben. Monatliche Lebenshaltungskosten, Sparplanung.",
        },
        {
          id: "transport",
          date: "März 2027",
          title: "Analyse des öffentlichen Nahverkehrs in Deutschland",
          tech: "Python",
          description:
            "Analyse der Fahrgastzahlen im deutschen Nahverkehr. Streckennutzung, Stoßzeiten, Effizienzkennzahlen, Verspätungsmuster.",
        },
        {
          id: "sentiment",
          date: "März 2027",
          title: "Stimmungsanalyse: Nepalesische Studierende in Deutschland",
          tech: "Python",
          description:
            "NLP-Stimmungsanalyse von Studierenden-Feedback. Textvorverarbeitung, Sentiment-Bewertung, Erkenntnisse.",
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
      whatsappText: "Auf WhatsApp schreiben",
      github: "GitHub",
      linkedin: "LinkedIn",
      sendMessage: "Nachricht senden",
      emailSubject: "Ausbildung / Datenanalyse",
      availability: "Offen für Ausbildungsangebote • Deutschland 2028",
      form: {
        title: "Schreiben Sie mir",
        name: "Ihr Name",
        namePlaceholder: "z. B. Anna Müller",
        email: "Ihre E-Mail",
        emailPlaceholder: "sie@beispiel.de",
        message: "Nachricht",
        messagePlaceholder: "Hallo Manoj, …",
        sendHint: "Öffnet Gmail in einem neuen Tab – Ihre Nachricht ist bereits ausgefüllt.",
        emailApp: "Oder im E-Mail-Programm öffnen",
        copyEmail: "E-Mail kopieren",
        copied: "Kopiert!",
        errors: {
          name: "Bitte geben Sie Ihren Namen ein.",
          email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
          message: "Bitte schreiben Sie eine Nachricht (max. 2000 Zeichen).",
        },
      },
    },
  },
};

