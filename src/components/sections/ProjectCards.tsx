import { Check, FileSpreadsheet } from "lucide-react";

import excelImg from "@/assets/project-excel-dashboard.jpg";
import pythonImg from "@/assets/project-python-cleaning.jpg";
import sqlImg from "@/assets/project-sql-analysis.jpg";
import { Reveal } from "@/components/Reveal";
import type { ProjectId } from "@/data/portfolio";
import { pagesContent } from "@/data/pages";
import { useLanguage } from "@/lib/language";

import { DarkSection } from "./DarkSection";

const images: Record<ProjectId, string> = { excel: excelImg, python: pythonImg, sql: sqlImg };

export function ProjectCards() {
  const { lang } = useLanguage();
  const p = pagesContent[lang].projects;

  return (
    <DarkSection title={p.title} subtitle={p.subtitle}>
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3 lg:gap-5">
        {p.items.map((project, i) => (
          <Reveal key={project.id} delay={i * 110}>
            <article className="relative flex h-full gap-4 rounded-lg border border-gold/50 bg-forest-deep/70 px-5 pt-6 pb-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lift">
              {project.featured && (
                <span className="absolute -top-3.5 left-4 inline-flex items-center gap-1.5 rounded-md bg-gold-light px-2.5 py-0.5 text-sm font-semibold text-forest-deep shadow-card">
                  <FileSpreadsheet className="size-4" />
                  {p.featuredLabel}
                </span>
              )}
              <div className="flex min-w-0 flex-1 flex-col">
                <h2 className="text-2xl leading-tight font-semibold text-gold-light">{project.title}</h2>
                <p className="mt-2 text-[15px] leading-snug text-cream/90">{project.description}</p>
                <p className="mt-2 flex gap-1.5 text-sm font-medium text-sage-text">
                  <Check className="mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                  {project.highlight}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-gold px-2.5 py-0.5 text-sm font-semibold text-forest-deep"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={images[project.id]}
                alt=""
                width={1088}
                height={608}
                loading="lazy"
                className="hidden size-28 shrink-0 self-center rounded-md border border-gold/30 object-cover sm:block lg:hidden xl:block"
              />
            </article>
          </Reveal>
        ))}
      </div>
    </DarkSection>
  );
}
