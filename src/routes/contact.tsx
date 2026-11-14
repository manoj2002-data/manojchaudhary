import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/ComingSoon";

// Placeholder page — replace ComingSoon with the real Contact page later.
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Manoj Chaudhary, Data Analyst" },
      { name: "description", content: "Get in touch with Manoj Chaudhary, Data Analyst, by email, WhatsApp, GitHub or LinkedIn." },
      { property: "og:title", content: "Contact — Manoj Chaudhary" },
      { property: "og:description", content: "Get in touch with Manoj Chaudhary, Data Analyst, by email, WhatsApp, GitHub or LinkedIn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <ComingSoon page="contact" />,
});
