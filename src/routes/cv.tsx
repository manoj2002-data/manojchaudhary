import { createFileRoute } from "@tanstack/react-router";

import { EuropassCV } from "@/components/cv/EuropassCV";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "Europass CV — Manoj Chaudhary, Data Analyst" },
      {
        name: "description",
        content:
          "Europass CV of Manoj Chaudhary, Data Analyst: BCA, MCA, Goethe B2, work experience, languages and digital skills — in English and German.",
      },
      { property: "og:title", content: "Europass CV — Manoj Chaudhary" },
      {
        property: "og:description",
        content: "Curriculum vitae of Data Analyst Manoj Chaudhary, applicant for Ausbildung in Germany, Class of 2028.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EuropassCV,
});
