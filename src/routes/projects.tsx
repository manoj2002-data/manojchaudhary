import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/ComingSoon";

// Placeholder page — replace ComingSoon with the real Projects page later.
export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "Data analysis projects by Manoj Chaudhary built with Excel, Python and SQL." },
      { property: "og:title", content: "Projects — Manoj Chaudhary" },
      { property: "og:description", content: "Data analysis projects by Manoj Chaudhary built with Excel, Python and SQL." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <ComingSoon page="projects" />,
});
