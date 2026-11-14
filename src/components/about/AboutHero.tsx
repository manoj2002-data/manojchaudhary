import { FileText, MapPin, Package } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent } from "@/data/about";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

const badgeIcons = { location: MapPin, passport: FileText, target: Package };

export function AboutHero() {
  const { lang, t } = useLanguage();
  const a = aboutContent[lang];

  return (
    <section className="bg-cream px-5 pt-8 pb-12 lg:px-10">
      <SectionHeading as="h1">{a.pageTitle}</SectionHeading>

      <div className="mx-auto mt-8 grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-14">
        <Reveal className="mx-auto w-full max-w-xs md:max-w-none">
          <div className="overflow-hidden rounded-xl border-2 border-gold/80 shadow-lift">
            <img
              src={siteConfig.portraitUrl}
              alt={t.hero.portraitAlt}
              className="aspect-[8/7] w-full object-cover object-[center_25%]"
              fetchPriority="high"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-3xl leading-tight font-semibold text-gold-deep md:text-4xl">{a.name}</h2>
          <p className="mt-2 text-lg font-semibold text-forest-deep md:text-xl">{a.route}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{a.intro}</p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {a.badges.map((badge) => {
              const Icon = badgeIcons[badge.icon];
              return (
                <li
                  key={badge.icon}
                  className="inline-flex items-center gap-2.5 rounded-md border border-gold/30 bg-sage/45 px-3.5 py-2 text-sm font-medium text-forest-deep"
                >
                  <Icon className="size-5 shrink-0 text-gold-deep" strokeWidth={1.4} />
                  {badge.text}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
