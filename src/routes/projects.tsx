import { createFileRoute } from "@tanstack/react-router";

import { ProjectCards } from "@/components/sections/ProjectCards";

const description =
  "Six upcoming data projects by Manoj Chaudhary: Pune rent prediction, Nepal tourism dashboard, DAAD scholarship analysis and more.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: description },
      { property: "og:title", content: "Projects — Manoj Chaudhary" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProjectCards,
});
