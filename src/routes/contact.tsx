import { createFileRoute } from "@tanstack/react-router";

import { ContactPanel } from "@/components/sections/ContactPanel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "Contact Manoj Chaudhary, Data Analyst, by email, WhatsApp, GitHub or LinkedIn for Ausbildung and data analytics roles." },
      { property: "og:title", content: "Contact — Manoj Chaudhary" },
      { property: "og:description", content: "Contact Manoj Chaudhary, Data Analyst, by email, WhatsApp, GitHub or LinkedIn for Ausbildung and data analytics roles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPanel,
});
