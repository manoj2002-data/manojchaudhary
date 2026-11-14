import { Award, FileText, GraduationCap } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent, type EducationIcon } from "@/data/about";
import { useLanguage } from "@/lib/language";

const eduIcons: Record<EducationIcon, typeof GraduationCap> = {
  graduation: GraduationCap,
  document: FileText,
  certificate: Award,
};

export function Education() {
  const { lang } = useLanguage();
  const { title, items } = aboutContent[lang].education;

  return (
    <section className="geo-pattern bg-forest px-5 py-10 lg:px-10">
      <SectionHeading tone="gold">{title}</SectionHeading>

      <ul className="mx-auto mt-7 grid max-w-xl gap-6 lg:max-w-6xl lg:grid-cols-3 lg:gap-7">
        {items.map((item, i) => {
          const Icon = eduIcons[item.icon];
          return (
            <li key={item.strip} className="relative">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -left-[18px] hidden size-2 -translate-y-1/2 rounded-full bg-gold lg:block"
                />
              )}
              <Reveal delay={i * 110} className="h-full">
                <article className="relative h-full overflow-hidden rounded-md border border-gold/30 bg-sage shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="absolute top-2.5 left-3 flex size-14 items-center justify-center rounded-full bg-forest-deep/70 ring-2 ring-sage">
                    <Icon className="size-7 text-gold" strokeWidth={1.4} />
                  </div>
                  <h3 className="bg-forest-soft py-2.5 pr-4 pl-20 text-xl font-semibold text-gold-light">
                    {item.strip}
                  </h3>
                  <div className="pt-2.5 pr-4 pb-4 pl-20">
                    <p className="text-lg leading-snug font-semibold text-forest-deep">{item.heading}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="mt-0.5 text-sm text-ink/90">
                        {line}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
