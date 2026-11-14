/**
 * ============================================================
 *  ABOUT PAGE CONTENT — edit education, experience,
 *  certifications and languages here (English + German).
 *  The profile photo comes from `siteConfig.portraitUrl`
 *  in src/data/portfolio.ts.
 * ============================================================
 */
import type { Lang } from "@/data/portfolio";

export type EducationIcon = "graduation" | "document" | "certificate";
export type FlagCode = "np" | "in" | "gb" | "de";

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  /** Optional link to a certificate image or verification page. */
  url?: string;
}

export interface AboutContent {
  pageTitle: string;
  name: string;
  route: string;
  intro: string;
  badges: { icon: "location" | "passport" | "target"; text: string }[];
  education: {
    title: string;
    items: { icon: EducationIcon; strip: string; heading: string; lines: string[] }[];
  };
  experience: {
    title: string;
    role: string;
    place: string;
    badge: string;
    bullets: string[];
  };
  certifications: { title: string; items: Certification[] };
  languages: {
    title: string;
    items: { flag: FlagCode; name: string; level: string; percent: number }[];
  };
  quote: { text: string; attribution: string };
  footerLine: string[];
}

/** Proficiency percentages are shared by both languages so they never drift apart. */
export const languageLevels: Record<FlagCode, number> = { np: 100, in: 95, gb: 90, de: 70 };

export const aboutContent: Record<Lang, AboutContent> = {
  en: {
    pageTitle: "About Me — Detailed",
    name: "Manoj Chaudhary — Data Analyst",
    route: "Dhangadhi, Nepal → Pune, India → Germany (Class of 2028)",
    intro:
      "I am Manoj Chaudhary, a dedicated Data Analyst from Dhangadhi, Nepal, now based in Pune, India, preparing for Ausbildung in Germany. My journey began in the hills of Dhangadhi, where curiosity for technology and data started early. After completing my BCA, I moved to Pune to pursue MCA while strengthening my German language skills to B2 level. Now I am preparing for the Ausbildung Fachinformatiker in Daten- und Prozessanalyse, class of 2028, to contribute to Germany's data-driven industry with passion, cross-cultural perspective, and analytical mindset.",
    badges: [
      { icon: "location", text: "Based in: Pune, India" },
      { icon: "passport", text: "Nepali Passport Holder" },
      { icon: "target", text: "Target: Ausbildung 2028 • Germany" },
    ],
    education: {
      title: "Education — Detailed",
      items: [
        {
          icon: "graduation",
          strip: "BCA — 70% | 2024",
          heading: "Bachelor of Computer Applications",
          lines: ["Dhangadhi, Nepal · 2024", "Focus: Computer Science, Database, Programming"],
        },
        {
          icon: "document",
          strip: "MCA — SGPA 7.0 | 2026–2028",
          heading: "Master of Computer Applications",
          lines: [
            "Sikkim Manipal University · 2026–2028 (Ongoing)",
            "Focus: Data Science, Analytics, Machine Learning",
          ],
        },
        {
          icon: "certificate",
          strip: "German B2",
          heading: "Goethe Institut | 2025",
          lines: ["Goethe-Zertifikat B2 · Pune, India", "Certified German Language Proficiency · B2 Level"],
        },
      ],
    },
    experience: {
      title: "Experience / Gap — 1.5 Years",
      role: "Family Business Operations",
      place: "Dhangadhi, Nepal | 2024–2025",
      badge: "Operations & Data Support — 1.5 Years",
      bullets: [
        "Helped manage family retail business operations, inventory, and sales reporting using Excel & spreadsheets.",
        "Built automated spreadsheets to track revenue, expenses, and monthly profit analysis for better decision making.",
        "Optimized stock tracking and sales reports, improving efficiency and reducing manual errors by 30%.",
        "Supported daily operations, customer records, and logistics management while learning business analytics practically.",
      ],
    },
    // Add real certificates here later; the section shows cards automatically when this list is not empty.
    certifications: { title: "Certifications", items: [] },
    languages: {
      title: "Languages",
      items: [
        { flag: "np", name: "Nepali", level: "Native", percent: languageLevels.np },
        { flag: "in", name: "Hindi", level: "Fluent", percent: languageLevels.in },
        { flag: "gb", name: "English", level: "Fluent", percent: languageLevels.gb },
        { flag: "de", name: "German", level: "B2", percent: languageLevels.de },
      ],
    },
    quote: {
      text: "Proudly Nepali — from Dhangadhi to Germany. My goal is to become a skilled Fachinformatiker in Data & Process Analysis, bringing Nepali diligence, cultural diversity, and data expertise to contribute to Germany's industry. I am committed to learning, working professionally, and building my future in Germany as part of the Ausbildung Class of 2028.",
      attribution:
        "— Manoj Chaudhary, Applicant for Daten- und Prozessanalyse · Germany · Class of 2028",
    },
    footerLine: [
      "Ausbildung Germany 2028",
      "Ready to Learn. Ready to Contribute. Ready for Germany.",
    ],
  },

  de: {
    pageTitle: "Über mich — Ausführlich",
    name: "Manoj Chaudhary — Datenanalyst",
    route: "Dhangadhi, Nepal → Pune, Indien → Deutschland (Jahrgang 2028)",
    intro:
      "Ich bin Manoj Chaudhary, ein engagierter Datenanalyst aus Dhangadhi, Nepal, derzeit in Pune, Indien, und bereite mich auf eine Ausbildung in Deutschland vor. Mein Weg begann in den Hügeln von Dhangadhi, wo meine Neugier für Technologie und Daten früh geweckt wurde. Nach meinem BCA-Abschluss zog ich nach Pune, um meinen MCA zu absolvieren, und habe dabei meine Deutschkenntnisse auf B2-Niveau ausgebaut. Jetzt bereite ich mich auf die Ausbildung zum Fachinformatiker für Daten- und Prozessanalyse, Jahrgang 2028, vor, um mit Leidenschaft, interkultureller Perspektive und analytischem Denken zur datengetriebenen Wirtschaft Deutschlands beizutragen.",
    badges: [
      { icon: "location", text: "Wohnort: Pune, Indien" },
      { icon: "passport", text: "Nepalesischer Reisepass" },
      { icon: "target", text: "Ziel: Ausbildung 2028 • Deutschland" },
    ],
    education: {
      title: "Ausbildung — Ausführlich",
      items: [
        {
          icon: "graduation",
          strip: "BCA — 70 % | 2024",
          heading: "Bachelor of Computer Applications",
          lines: ["Dhangadhi, Nepal · 2024", "Schwerpunkt: Informatik, Datenbanken, Programmierung"],
        },
        {
          icon: "document",
          strip: "MCA — SGPA 7,0 | 2026–2028",
          heading: "Master of Computer Applications",
          lines: [
            "Sikkim Manipal University · 2026–2028 (laufend)",
            "Schwerpunkt: Data Science, Analytics, Machine Learning",
          ],
        },
        {
          icon: "certificate",
          strip: "Deutsch B2",
          heading: "Goethe-Institut | 2025",
          lines: ["Goethe-Zertifikat B2 · Pune, Indien", "Zertifizierte Deutschkenntnisse · Niveau B2"],
        },
      ],
    },
    experience: {
      title: "Berufserfahrung / Lücke — 1,5 Jahre",
      role: "Mitarbeit im Familienunternehmen",
      place: "Dhangadhi, Nepal | 2024–2025",
      badge: "Betrieb & Datenunterstützung — 1,5 Jahre",
      bullets: [
        "Unterstützung bei Betrieb, Lagerbestand und Verkaufsberichten des familiären Einzelhandels mit Excel und Tabellenkalkulationen.",
        "Automatisierte Tabellen zur Erfassung von Umsatz, Ausgaben und monatlicher Gewinnanalyse für bessere Entscheidungen erstellt.",
        "Bestandsverfolgung und Verkaufsberichte optimiert, Effizienz gesteigert und manuelle Fehler um 30 % reduziert.",
        "Tägliche Abläufe, Kundendaten und Logistik unterstützt und dabei Geschäftsanalyse praxisnah gelernt.",
      ],
    },
    certifications: { title: "Zertifikate", items: [] },
    languages: {
      title: "Sprachen",
      items: [
        { flag: "np", name: "Nepali", level: "Muttersprache", percent: languageLevels.np },
        { flag: "in", name: "Hindi", level: "Fließend", percent: languageLevels.in },
        { flag: "gb", name: "Englisch", level: "Fließend", percent: languageLevels.gb },
        { flag: "de", name: "Deutsch", level: "B2", percent: languageLevels.de },
      ],
    },
    quote: {
      text: "Stolz auf Nepal — von Dhangadhi nach Deutschland. Mein Ziel ist es, ein qualifizierter Fachinformatiker für Daten- und Prozessanalyse zu werden und nepalesischen Fleiß, kulturelle Vielfalt und Datenkompetenz in die deutsche Wirtschaft einzubringen. Ich bin entschlossen zu lernen, professionell zu arbeiten und meine Zukunft in Deutschland als Teil des Ausbildungsjahrgangs 2028 aufzubauen.",
      attribution:
        "— Manoj Chaudhary, Bewerber für Daten- und Prozessanalyse · Deutschland · Jahrgang 2028",
    },
    footerLine: [
      "Ausbildung Deutschland 2028",
      "Bereit zu lernen. Bereit beizutragen. Bereit für Deutschland.",
    ],
  },
};
