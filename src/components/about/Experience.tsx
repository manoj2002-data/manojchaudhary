import { BriefcaseBusiness, Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent } from "@/data/about";
import { useLanguage } from "@/lib/language";

export function Experience() {
  const { lang } = useLanguage();
  const e = aboutContent[lang].experience;

  return (
    <section className="bg-cream px-5 py-10 lg:px-10">
      <SectionHeading>{e.title}</SectionHeading>

      <Reveal className="mx-auto mt-6 flex max-w-5xl flex-col items-start gap-6 sm:flex-row sm:gap-8">
        <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-icon-tile shadow-card md:size-28">
          <BriefcaseBusiness className="size-12 text-gold-light md:size-14" strokeWidth={1.3} />
        </div>
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold text-forest-deep md:text-[1.7rem]">
            {e.role}
            <span className="mx-2 text-gold-deep" aria-hidden="true">
              •
            </span>
            <span className="whitespace-normal">{e.place}</span>
          </h3>
          <p className="mt-1.5 inline-block rounded-full bg-sage/60 px-3 py-0.5 text-lg font-medium text-forest">
            {e.badge}
          </p>
          <ul className="mt-4 space-y-2">
            {e.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5 text-[15px] leading-snug text-ink/90">
                <Check className="mt-0.5 size-4 shrink-0 text-gold-deep" strokeWidth={2.4} />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
