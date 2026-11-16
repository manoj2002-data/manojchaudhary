import { CalendarClock, Github } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { pagesContent, projectsGithub } from "@/data/pages";
import { useLanguage } from "@/lib/language";

import { DarkSection } from "./DarkSection";

export function ProjectCards() {
  const { lang } = useLanguage();
  const p = pagesContent[lang].projects;

  return (
    <DarkSection title={p.title} subtitle={p.subtitle}>
      <ul className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {p.items.map((project, i) => (
          <li key={project.id}>
            <Reveal delay={(i % 3) * 110} className="h-full">
              <article className="flex h-full min-h-64 flex-col rounded-lg border border-gold/50 bg-forest-deep/70 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lift">
                {/* Date badge floats so long titles wrap around it instead of overlapping. */}
                <div className="flow-root">
                  <span className="float-right mb-1 ml-3 inline-flex items-center gap-1 rounded-md bg-gold px-2.5 py-1 text-[13px] font-semibold whitespace-nowrap text-forest-deep">
                    <CalendarClock className="size-3.5" aria-hidden="true" />
                    {project.date}
                  </span>
                  <h2 className="text-2xl leading-tight font-semibold text-gold-light">{project.title}</h2>
                </div>
                <p className="mt-2 text-sm font-medium text-sage-text">{project.tech}</p>
                <p className="mt-2 mb-5 text-[15px] leading-normal text-cream/90">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <a
                    href={projectsGithub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-gold px-3.5 py-2 text-[13px] font-semibold text-forest-deep transition-colors hover:bg-gold-light"
                  >
                    <Github className="size-4" aria-hidden="true" />
                    {p.githubButton}
                  </a>
                  <span className="rounded-md border border-gold/30 px-2.5 py-2 text-xs text-cream/75">
                    {p.demoButton}
                  </span>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-cream/85">
        {p.noteBefore}
        <span className="mx-2 text-gold" aria-hidden="true">•</span>
        <a
          href={projectsGithub.url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-gold-light underline-offset-4 hover:underline"
        >
          {projectsGithub.label}
        </a>
        {p.noteAfter.map((part) => (
          <span key={part}>
            <span className="mx-2 text-gold" aria-hidden="true">•</span>
            {part}
          </span>
        ))}
      </p>
    </DarkSection>
  );
}
