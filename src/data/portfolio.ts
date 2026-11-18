/**
 * ============================================================
 *  EDIT YOUR DETAILS HERE
 *  Everything personal on the site (contact links, WhatsApp,
 *  photo, texts in English and German) lives in this one file.
 * ============================================================
 */
import portraitAsset from "@/assets/manoj-portrait.jpg.asset.json";

export type Lang = "en" | "de";

export const siteConfig = {
  name: "Manoj Chaudhary",
  initials: "MC",

  /** Profile photo shown at the top of the homepage. Replace with your own image URL or import. */
  portraitUrl: portraitAsset.url,

  /** Real WhatsApp number (confirmed by Manoj), international format, digits only. */
  whatsappNumber: "918956496988",
  /** How the number is shown on the CV. */
  whatsappDisplay: "+91 89564 96988",
  whatsappMessage: "Hello Manoj, I saw your portfolio and would like to get in touch.",

  /** Real email (confirmed by Manoj). Contact form messages go here. */
  email: "manojchaudhary2.data@gmail.com",

  /** Current city (confirmed by Manoj). */
  location: "Pune, India",
  /** Real GitHub (confirmed by Manoj). */
  github: { label: "github.com/manoj2002-data", url: "https://github.com/manoj2002-data" },
  /** LinkedIn profile — set to { label, url } to show it on the site; null hides it. */
  linkedin: null as { label: string; url: string } | null,

  copyrightYear: 2026,
} as const;

/** Builds a wa.me link: keeps only digits from the number and URL-encodes the message. */
export function buildWhatsAppLink(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Site pages. Each one has its own route file under src/routes. */
export const navItems = [
  { key: "about", to: "/about" },
  { key: "skills", to: "/skills" },
  { key: "projects", to: "/projects" },
  { key: "timeline", to: "/timeline" },
  { key: "contact", to: "/contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
export type SkillId = "python" | "sql" | "excel" | "powerbi" | "german" | "analytics";
export type ProjectId = "excel" | "python" | "sql";

export interface SiteContent {
  nav: Record<NavKey, string>;
  langHint: string;
  menu: string;
  hero: {
    subtitleRole: string;
    subtitlePlace: string;
    description: string;
    location: string;
    viewCv: string;
    hireMe: string;
    skillTag: string;
    portraitAlt: string;
  };
  intro: { title: string; body: string }[];
  skills: { title: string; items: { id: SkillId; title: string; description: string }[] };
  projects: {
    title: string;
    items: { id: ProjectId; title: string; badge: string; description: string; tags: string[] }[];
  };
  contact: {
    title: string;
    location: string;
    email: string;
    connect: string;
  };
  footer: { heading: string; line: string[] };
}

export const content: Record<Lang, SiteContent> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      timeline: "Timeline",
      contact: "Contact",
    },
    langHint: "German to English | English to German",
    menu: "Menu",
    hero: {
      subtitleRole: "Data Analyst",
      subtitlePlace: "Dhangadhi to Germany",
      description: "Nepali Passport Holder • Ausbildung Fachinformatiker Daten- und Prozessanalyse",
      location: "Germany • Class of 2028",
      viewCv: "View CV",
      hireMe: "Hire Me",
      skillTag: "Data Analyst • Python • Power BI • SQL",
      portraitAlt: "Portrait of Manoj Chaudhary",
    },
    intro: [
      {
        title: "Who I Am",
        body: "I am Manoj Chaudhary from Dhangadhi, Nepal. Passionate Data Analyst bridging culture, technology, and learning. Moving from Dhangadhi to Germany to pursue Ausbildung in Data & Process Analysis to build data-driven solutions.",
      },
      {
        title: "My Journey",
        body: "From Nepal to Germany — now preparing for Ausbildung Class of 2028. Combining academic background in Computer Applications with real-world business experience and bilingual growth in German (B2).",
      },
      {
        title: "My Goal",
        body: "To contribute as a skilled Fachinformatiker for data and process analysis, delivering insights that help businesses grow in Germany while embracing German work culture and precision.",
      },
    ],
    skills: {
      title: "Skills & Expertise",
      items: [
        { id: "python", title: "Python", description: "Data Analysis, Automation, Pandas" },
        { id: "sql", title: "SQL", description: "Queries, Joins, Data Modeling" },
        { id: "excel", title: "Excel", description: "Pivot Tables, Dashboards, VLOOKUP" },
        { id: "powerbi", title: "Power BI", description: "Dashboards, DAX, Visualization" },
        { id: "german", title: "German B2", description: "Goethe B2 Certified, Business Ready" },
        { id: "analytics", title: "Data Analytics", description: "Insights, ETL, Reporting" },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          id: "excel",
          title: "Sales Dashboard Excel",
          badge: "Excel",
          description:
            "Interactive sales dashboard analyzing regional revenue trends, profit margins and top products using Excel Pivot & Charts. Delivered insights to improve 15% sales performance.",
          tags: ["Excel", "Pivot", "Analytics"],
        },
        {
          id: "python",
          title: "Python Data Cleaning",
          badge: "Python",
          description:
            "Automated data cleaning pipeline for messy customer data using Python Pandas. Handled missing values, duplicates, and outliers to prepare analysis-ready datasets.",
          tags: ["Python", "Pandas", "Data Cleaning"],
        },
        {
          id: "sql",
          title: "SQL Analysis",
          badge: "SQL",
          description:
            "Performed SQL analysis on sales database to identify customer segments, revenue by month, and cohort insights. Wrote complex joins and window functions for reporting.",
          tags: ["SQL", "PostgreSQL", "Analytics"],
        },
      ],
    },
    contact: {
      title: "Contact Me",
      location: "Location",
      email: "Email",
      connect: "Connect",
    },
    footer: {
      heading: "Proudly Nepali — Dhangadhi to Germany",
      line: ["Built for Ausbildung Germany 2028", "Available for Ausbildung Opportunities"],
    },
  },

  de: {
    nav: {
      about: "Über mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
      timeline: "Werdegang",
      contact: "Kontakt",
    },
    langHint: "Deutsch zu Englisch | Englisch zu Deutsch",
    menu: "Menü",
    hero: {
      subtitleRole: "Datenanalyst",
      subtitlePlace: "Von Dhangadhi nach Deutschland",
      description: "Nepalesischer Staatsbürger • Ausbildung Fachinformatiker Daten- und Prozessanalyse",
      location: "Deutschland • Jahrgang 2028",
      viewCv: "Lebenslauf ansehen",
      hireMe: "Stellen Sie mich ein",
      skillTag: "Datenanalyst • Python • Power BI • SQL",
      portraitAlt: "Porträt von Manoj Chaudhary",
    },
    intro: [
      {
        title: "Wer ich bin",
        body: "Ich bin Manoj Chaudhary aus Dhangadhi, Nepal. Leidenschaftlicher Datenanalyst, der Kultur, Technologie und Lernen verbindet. Ich gehe von Dhangadhi nach Deutschland, um eine Ausbildung in Daten- und Prozessanalyse zu absolvieren und datengetriebene Lösungen zu entwickeln.",
      },
      {
        title: "Mein Weg",
        body: "Von Nepal nach Deutschland — derzeit in Vorbereitung auf die Ausbildung, Jahrgang 2028. Ich verbinde meinen akademischen Hintergrund in Computer Applications mit praktischer Geschäftserfahrung und zweisprachigem Wachstum auf Deutsch (B2).",
      },
      {
        title: "Mein Ziel",
        body: "Als qualifizierter Fachinformatiker für Daten- und Prozessanalyse Erkenntnisse liefern, die Unternehmen in Deutschland beim Wachsen helfen — mit Begeisterung für deutsche Arbeitskultur und Präzision.",
      },
    ],
    skills: {
      title: "Fähigkeiten & Expertise",
      items: [
        { id: "python", title: "Python", description: "Datenanalyse, Automatisierung, Pandas" },
        { id: "sql", title: "SQL", description: "Abfragen, Joins, Datenmodellierung" },
        { id: "excel", title: "Excel", description: "Pivot-Tabellen, Dashboards, SVERWEIS" },
        { id: "powerbi", title: "Power BI", description: "Dashboards, DAX, Visualisierung" },
        { id: "german", title: "Deutsch B2", description: "Goethe-Zertifikat B2, berufstauglich" },
        { id: "analytics", title: "Datenanalyse", description: "Erkenntnisse, ETL, Reporting" },
      ],
    },
    projects: {
      title: "Projekte",
      items: [
        {
          id: "excel",
          title: "Vertriebs-Dashboard in Excel",
          badge: "Excel",
          description:
            "Interaktives Vertriebs-Dashboard zur Analyse regionaler Umsatztrends, Gewinnmargen und Top-Produkte mit Excel-Pivot und Diagrammen. Erkenntnisse zur Steigerung der Verkaufsleistung um 15 %.",
          tags: ["Excel", "Pivot", "Analytics"],
        },
        {
          id: "python",
          title: "Datenbereinigung mit Python",
          badge: "Python",
          description:
            "Automatisierte Pipeline zur Bereinigung unstrukturierter Kundendaten mit Python Pandas. Fehlende Werte, Duplikate und Ausreißer behandelt, um analysebereite Datensätze zu erstellen.",
          tags: ["Python", "Pandas", "Data Cleaning"],
        },
        {
          id: "sql",
          title: "SQL-Analyse",
          badge: "SQL",
          description:
            "SQL-Analyse einer Vertriebsdatenbank zur Ermittlung von Kundensegmenten, Monatsumsätzen und Kohorten-Erkenntnissen. Komplexe Joins und Fensterfunktionen für das Reporting geschrieben.",
          tags: ["SQL", "PostgreSQL", "Analytics"],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      location: "Standort",
      email: "E-Mail",
      connect: "Vernetzen",
    },
    footer: {
      heading: "Stolz auf Nepal — Von Dhangadhi nach Deutschland",
      line: ["Für die Ausbildung in Deutschland 2028", "Offen für Ausbildungsangebote"],
    },
  },
};
