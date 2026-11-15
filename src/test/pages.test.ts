import { describe, expect, it } from "vitest";

import { pagesContent, skillLevels } from "@/data/pages";

describe("Skills page levels", () => {
  it("shows Python 90, SQL 85, Excel 95, Power BI 80, German 70, Data Analytics 85", () => {
    expect(skillLevels).toEqual({ python: 90, sql: 85, excel: 95, powerbi: 80, german: 70, analytics: 85 });
  });

  it("lists the same six skills in German and English", () => {
    expect(pagesContent.de.skills.items.map((s) => s.id)).toEqual(pagesContent.en.skills.items.map((s) => s.id));
    expect(pagesContent.en.skills.items).toHaveLength(6);
  });
});

describe("Projects page", () => {
  it("has exactly the three real projects, with the Excel dashboard featured", () => {
    for (const lang of ["en", "de"] as const) {
      const items = pagesContent[lang].projects.items;
      expect(items.map((p) => p.id)).toEqual(["excel", "python", "sql"]);
      expect(items.filter((p) => p.featured).map((p) => p.id)).toEqual(["excel"]);
    }
  });
});

describe("Timeline page", () => {
  it("ends with the Ausbildung 2028 goal in both languages", () => {
    for (const lang of ["en", "de"] as const) {
      const items = pagesContent[lang].timeline.items;
      expect(items.map((i) => i.year)).toEqual(["2024", "2024–2025", "2025", "2026", "2028"]);
      expect(items.at(-1)?.goal).toBe(true);
    }
  });
});
