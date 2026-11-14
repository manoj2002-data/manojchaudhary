import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/ComingSoon";

// Placeholder page — replace ComingSoon with the real Skills page later.
export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "Technical and language skills of Manoj Chaudhary: Python, SQL, Excel, Power BI, data analytics and German B2." },
      { property: "og:title", content: "Skills — Manoj Chaudhary" },
      { property: "og:description", content: "Technical and language skills of Manoj Chaudhary: Python, SQL, Excel, Power BI, data analytics and German B2." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <ComingSoon page="skills" />,
});
