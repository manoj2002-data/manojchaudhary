import { createFileRoute } from "@tanstack/react-router";

import { ProjectCards } from "@/components/sections/ProjectCards";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "Data analysis case studies by Manoj Chaudhary: an Excel sales dashboard, Python data cleaning and SQL sales analysis." },
      { property: "og:title", content: "Projects — Manoj Chaudhary" },
      { property: "og:description", content: "Data analysis case studies by Manoj Chaudhary: an Excel sales dashboard, Python data cleaning and SQL sales analysis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProjectCards,
});
