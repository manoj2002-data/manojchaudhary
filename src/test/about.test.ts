import { describe, expect, it } from "vitest";

import { aboutContent } from "@/data/about";

describe("About page language levels", () => {
  it.each(["en", "de"] as const)("%s shows Nepali 100, Hindi 95, English 90, German 70", (lang) => {
    expect(aboutContent[lang].languages.items.map((l) => [l.flag, l.percent])).toEqual([
      ["np", 100],
      ["in", 95],
      ["gb", 90],
      ["de", 70],
    ]);
  });

  it("lists exactly three education entries and four experience points in both languages", () => {
    for (const lang of ["en", "de"] as const) {
      expect(aboutContent[lang].education.items).toHaveLength(3);
      expect(aboutContent[lang].experience.bullets).toHaveLength(4);
    }
  });

  it("does not invent certificates", () => {
    expect(aboutContent.en.certifications.items).toEqual([]);
    expect(aboutContent.de.certifications.items).toEqual([]);
  });
});
