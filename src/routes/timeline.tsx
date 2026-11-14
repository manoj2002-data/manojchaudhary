import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/ComingSoon";

// Placeholder page — replace ComingSoon with the real Timeline page later.
export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "The journey of Manoj Chaudhary from Dhangadhi, Nepal to Ausbildung in Germany, Class of 2028." },
      { property: "og:title", content: "Timeline — Manoj Chaudhary" },
      { property: "og:description", content: "The journey of Manoj Chaudhary from Dhangadhi, Nepal to Ausbildung in Germany, Class of 2028." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <ComingSoon page="timeline" />,
});
