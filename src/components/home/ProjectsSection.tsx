import excelImg from "@/assets/project-excel-dashboard.jpg";
import pythonImg from "@/assets/project-python-cleaning.jpg";
import sqlImg from "@/assets/project-sql-analysis.jpg";
import { Reveal } from "@/components/Reveal";
import type { ProjectId } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

const projectImages: Record<ProjectId, string> = {
  excel: excelImg,
  python: pythonImg,
  sql: sqlImg,
};

export function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="scroll-mt-20 bg-cream px-5 py-14 lg:px-10">
      <h2 className="text-center text-3xl font-semibold text-forest-deep md:text-4xl">
        {t.projects.title}
      </h2>

      <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-3 lg:gap-12">
        {t.projects.items.map((project, i) => (
          <Reveal key={project.id} delay={i * 110}>
            <article className="group relative flex h-full flex-col rounded-md border border-gold/45 bg-ivory shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <span className="absolute -top-2.5 right-4 z-10 rounded bg-gold px-3 py-0.5 text-sm font-semibold text-forest-deep shadow-card">
                {project.badge}
              </span>
              <div className="mx-4 mt-2 overflow-hidden rounded-t-sm bg-forest">
                <img
                  src={projectImages[project.id]}
                  alt={project.title}
                  width={1088}
                  height={608}
                  loading="lazy"
                  className="aspect-[16/7] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
                <h3 className="text-2xl font-semibold text-forest-deep">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-snug text-ink/90">{project.description}</p>
                <p className="mt-4 inline-flex self-start rounded bg-gold/25 px-2.5 py-0.5 text-sm font-medium text-ink">
                  {project.tags.map((tag, j) => (
                    <span key={tag}>
                      {j > 0 && (
                        <span className="mx-1.5 text-gold-deep" aria-hidden="true">
                          •
                        </span>
                      )}
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
