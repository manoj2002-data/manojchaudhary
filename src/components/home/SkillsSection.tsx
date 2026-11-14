import { BookOpenText, ChartColumnIncreasing, Database, FileSpreadsheet } from "lucide-react";
import type { ComponentType } from "react";

import { PowerBiIcon, PythonIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import type { SkillId } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

const skillIcons: Record<SkillId, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  python: PythonIcon,
  sql: Database,
  excel: FileSpreadsheet,
  powerbi: PowerBiIcon,
  german: BookOpenText,
  analytics: ChartColumnIncreasing,
};

export function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section className="geo-pattern bg-forest px-5 py-12 lg:px-10">
      <h2 className="text-center text-3xl font-semibold text-gold md:text-4xl">{t.skills.title}</h2>

      <ul className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
        {t.skills.items.map((skill, i) => {
          const Icon = skillIcons[skill.id];
          return (
            <li key={skill.id} className="relative">
              {i === 0 && (
                <span
                  className="absolute top-1/2 -left-3.5 hidden size-2 -translate-y-1/2 rounded-full bg-gold lg:block"
                  aria-hidden="true"
                />
              )}
              <span
                className="absolute top-1/2 -right-3.5 hidden size-2 -translate-y-1/2 rounded-full bg-gold lg:block"
                aria-hidden="true"
              />
              <Reveal delay={i * 70} className="h-full">
                <div className="flex h-full flex-col rounded-md border border-gold/30 bg-sage px-3 py-4 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-gold-light hover:shadow-lift">
                  <div className="flex items-center justify-center gap-2 lg:gap-1.5">
                    <Icon className="size-7 shrink-0 text-gold-deep lg:size-6" strokeWidth={1.5} />
                    <h3 className="text-xl leading-tight font-semibold text-forest-deep lg:text-lg xl:text-xl">{skill.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-snug text-ink/85">{skill.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
