import { createFileRoute } from "@tanstack/react-router";

import { AboutHero } from "@/components/about/AboutHero";
import { Certifications } from "@/components/about/Certifications";
import { Education } from "@/components/about/Education";
import { Experience } from "@/components/about/Experience";
import { Languages } from "@/components/about/Languages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Manoj Chaudhary, Data Analyst" },
      {
        name: "description",
        content:
          "Manoj Chaudhary's story from Dhangadhi, Nepal to Pune, India and Germany: BCA, MCA, Goethe B2, family business experience and languages.",
      },
      { property: "og:title", content: "About Me — Manoj Chaudhary" },
      {
        property: "og:description",
        content: "Education, experience and languages of Data Analyst Manoj Chaudhary, Ausbildung Class of 2028.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutHero />
      <Education />
      <Experience />
      <Certifications />
      <Languages />
    </>
  );
}
