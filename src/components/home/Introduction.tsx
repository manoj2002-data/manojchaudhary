import { Crosshair, MapPin, UserRound } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/language";

const icons = [UserRound, MapPin, Crosshair];

export function Introduction() {
  const { t } = useLanguage();
  return (
    <section className="geo-pattern-light bg-cream px-5 py-10 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gold/50">
        {t.intro.map((block, i) => {
          const Icon = icons[i] ?? UserRound;
          return (
            <Reveal key={i} delay={i * 100} className="flex gap-5 md:px-7">
              <Icon className="mt-8 size-12 shrink-0 text-gold-deep" strokeWidth={1.2} />
              <div>
                <h2 className="text-3xl font-semibold text-forest-deep">{block.title}</h2>
                <p className="mt-2 text-[15px] leading-snug text-ink/90">{block.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
