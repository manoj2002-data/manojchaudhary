import { GermanFlag, IndiaFlag, NepalFlag, UKFlag } from "@/components/icons";
import { useInView } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent, type FlagCode } from "@/data/about";
import { useLanguage } from "@/lib/language";

import { AboutQuote } from "./AboutQuote";

function Flag({ code }: { code: FlagCode }) {
  const cls = "h-5 w-auto rounded-[2px] shadow-card";
  if (code === "np") return <NepalFlag className="h-6 w-auto" />;
  if (code === "in") return <IndiaFlag className={cls} />;
  if (code === "gb") return <UKFlag className={cls} />;
  return <GermanFlag className={cls} />;
}

export function Languages() {
  const { lang } = useLanguage();
  const { title, items } = aboutContent[lang].languages;
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section className="bg-cream px-5 pt-8 pb-12 lg:px-10 lg:pb-20">
      <SectionHeading>{title}</SectionHeading>

      <div ref={ref} className="relative mx-auto mt-6 max-w-6xl">
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={item.flag}>
              <div className="flex items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex w-8 justify-center">
                    <Flag code={item.flag} />
                  </span>
                  <span className="text-lg font-semibold text-forest-deep">{item.name}</span>
                  <span className="hidden text-sm text-ink/80 sm:inline">{item.level}</span>
                </div>
                <span className="text-sm font-semibold text-forest-deep">
                  {item.level} <span className="text-gold-deep">•</span> {item.percent}%
                </span>
              </div>
              <div
                className="mt-1.5 ml-11 h-2.5 overflow-hidden rounded-full bg-forest/85"
                role="progressbar"
                aria-label={item.name}
                aria-valuenow={item.percent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light transition-[width] duration-[1400ms] ease-out"
                  style={{
                    width: inView ? `${item.percent}%` : "0%",
                    transitionDelay: `${i * 150}ms`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop: card sits over the middle of the bars, as in the design */}
        <AboutQuote className="absolute top-1/2 left-1/2 hidden w-[40%] max-w-[480px] -translate-x-1/2 -translate-y-[38%] lg:block" />
      </div>

      {/* Smaller screens: card below the bars so nothing is hidden */}
      <AboutQuote className="mx-auto mt-8 max-w-xl lg:hidden" />
    </section>
  );
}
