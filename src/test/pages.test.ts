import { describe, expect, it } from "vitest";

import { pagesContent, projectsGithub, skillLevels } from "@/data/pages";

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
  it("has exactly the six projects from the brief, in order, with their dates", () => {
    expect(pagesContent.en.projects.items.map((p) => [p.date, p.title])).toEqual([
      ["Dec 2026", "Pune Rent Prediction"],
      ["Jan 2027", "Nepal Tourism Dashboard"],
      ["Feb 2027", "DAAD Scholarship Analysis"],
      ["March 2027", "Germany Blocked Account Cost Calculator"],
      ["March 2027", "Public Transport Analysis of Germany"],
      ["March 2027", "Nepali Students in Germany Sentiment"],
    ]);
  });

  it("shows the same six projects in German", () => {
    expect(pagesContent.de.projects.items.map((p) => p.id)).toEqual(pagesContent.en.projects.items.map((p) => p.id));
  });

  it("links GitHub to github.com/manoj2002-data", () => {
    expect(projectsGithub.url).toBe("https://github.com/manoj2002-data");
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
