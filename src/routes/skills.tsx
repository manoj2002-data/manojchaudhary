import { createFileRoute } from "@tanstack/react-router";

import { SkillsGrid } from "@/components/sections/SkillsGrid";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Expertise — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "Skills of Manoj Chaudhary: Python 90%, SQL 85%, Excel 95%, Power BI 80%, Data Analytics 85% and German B2." },
      { property: "og:title", content: "Skills & Expertise — Manoj Chaudhary" },
      { property: "og:description", content: "Skills of Manoj Chaudhary: Python 90%, SQL 85%, Excel 95%, Power BI 80%, Data Analytics 85% and German B2." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SkillsGrid,
});
