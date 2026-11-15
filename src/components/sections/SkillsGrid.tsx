import { ChartColumnIncreasing, Database, FileSpreadsheet, GraduationCap } from "lucide-react";
import type { ComponentType } from "react";

import { PowerBiIcon, PythonIcon } from "@/components/icons";
import { Reveal, useInView } from "@/components/Reveal";
import type { SkillId } from "@/data/portfolio";
import { pagesContent, skillLevels } from "@/data/pages";
import { useLanguage } from "@/lib/language";

import { BulletList, DarkSection, GoldCorners } from "./DarkSection";

const icons: Record<SkillId, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  python: PythonIcon,
  sql: Database,
  excel: FileSpreadsheet,
  powerbi: PowerBiIcon,
  german: GraduationCap,
  analytics: ChartColumnIncreasing,
};

export function SkillsGrid() {
  const { lang } = useLanguage();
  const s = pagesContent[lang].skills;
  const { ref, inView } = useInView<HTMLUListElement>(0.15);

  return (
    <DarkSection title={s.title} subtitle={s.subtitle}>
      <ul ref={ref} className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((skill, i) => {
          const Icon = icons[skill.id];
          const level = skillLevels[skill.id];
          return (
            <li key={skill.id}>
              <Reveal delay={i * 70} className="h-full">
                <div className="relative flex h-full flex-col items-center border border-gold/60 bg-forest-deep/70 px-6 pt-5 pb-4 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lift">
                  <GoldCorners />
                  <Icon className="size-8 text-gold-light" strokeWidth={1.5} />
                  <h2 className="mt-1 text-2xl font-semibold text-gold-light">{skill.title}</h2>
                  <BulletList items={skill.tags} className="mt-1 text-sm text-cream/90" />
                  <div className="mt-4 flex w-full items-center gap-3">
                    <div
                      className="h-2 flex-1 overflow-hidden rounded-full bg-forest-soft"
                      role="progressbar"
                      aria-label={skill.title}
                      aria-valuenow={level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light transition-[width] duration-[1400ms] ease-out"
                        style={{ width: inView ? `${level}%` : "0%", transitionDelay: `${i * 120}ms` }}
                      />
                    </div>
                    <span className="w-10 text-right text-sm font-semibold text-gold-light">{level}%</span>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </DarkSection>
  );
}
