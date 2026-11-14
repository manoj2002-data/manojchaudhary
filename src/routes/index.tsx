import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manoj Chaudhary — Data Analyst | Dhangadhi to Germany" },
      {
        name: "description",
        content:
          "Portfolio of Manoj Chaudhary, Data Analyst skilled in Python, SQL, Excel and Power BI, preparing for Ausbildung Fachinformatiker Daten- und Prozessanalyse in Germany.",
      },
      { property: "og:title", content: "Manoj Chaudhary — Data Analyst Portfolio" },
      {
        property: "og:description",
        content: "Python • SQL • Excel • Power BI — from Dhangadhi, Nepal to Ausbildung in Germany, Class of 2028.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
