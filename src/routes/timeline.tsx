import { createFileRoute } from "@tanstack/react-router";

import { JourneyTimeline } from "@/components/sections/JourneyTimeline";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "My Journey — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "Manoj Chaudhary's journey: BCA 2024, family business, German B2, MCA and Ausbildung in Germany from 2028." },
      { property: "og:title", content: "My Journey — Manoj Chaudhary" },
      { property: "og:description", content: "Manoj Chaudhary's journey: BCA 2024, family business, German B2, MCA and Ausbildung in Germany from 2028." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: JourneyTimeline,
});
