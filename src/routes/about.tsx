import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/ComingSoon";

// Placeholder page — replace ComingSoon with the real About page later.
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "Learn more about Manoj Chaudhary, Data Analyst from Dhangadhi, Nepal, on his way to Ausbildung in Germany." },
      { property: "og:title", content: "About — Manoj Chaudhary" },
      { property: "og:description", content: "Learn more about Manoj Chaudhary, Data Analyst from Dhangadhi, Nepal, on his way to Ausbildung in Germany." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <ComingSoon page="about" />,
});
