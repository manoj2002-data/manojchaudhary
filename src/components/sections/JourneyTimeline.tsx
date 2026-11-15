import { GermanFlag } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { pagesContent } from "@/data/pages";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

import { DarkSection } from "./DarkSection";

export function JourneyTimeline() {
  const { lang } = useLanguage();
  const tl = pagesContent[lang].timeline;

  return (
    <DarkSection title={tl.title} subtitle={tl.subtitle}>
      <ol className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-lg border border-gold/50 bg-forest-deep/70 shadow-card">
        {tl.items.map((item, i) => (
          <li key={`${item.year}-${i}`}>
            <Reveal
              delay={i * 90}
              className={cn(
                "grid grid-cols-[5.5rem_1.5rem_1fr] items-center gap-x-3 px-4 py-3.5 sm:grid-cols-[7rem_2rem_1fr] sm:px-6",
                i > 0 && "border-t border-gold/15",
                item.goal && "bg-gradient-to-r from-gold-deep via-gold to-gold-light",
              )}
            >
              <span
                className={cn(
                  "text-lg font-semibold sm:text-xl",
                  item.goal ? "text-forest-deep" : "text-cream",
                )}
              >
                {item.year}
              </span>
              <span className="relative flex h-full items-center justify-center" aria-hidden="true">
                <span
                  className={cn(
                    "absolute inset-y-[-0.9rem] w-px",
                    item.goal ? "bg-forest-deep/40" : "bg-gold/50",
                  )}
                />
                <span
                  className={cn(
                    "relative size-3.5 rounded-full border-2",
                    item.goal ? "border-forest-deep bg-gold-light" : "border-gold bg-forest-deep",
                  )}
                />
              </span>
              <div className="min-w-0">
                <p
                  className={cn(
                    "text-lg leading-snug font-semibold sm:text-xl",
                    item.goal ? "text-forest-deep" : "text-gold-light",
                  )}
                >
                  {item.title}
                  {item.place && (
                    <span
                      className={cn(
                        "text-base font-medium sm:text-lg",
                        item.goal ? "text-forest-deep" : "text-cream",
                      )}
                    >
                      <span className={item.goal ? "mx-1.5" : "mx-1.5 text-gold"} aria-hidden="true">
                        •
                      </span>
                      {item.place}
                    </span>
                  )}
                </p>
                <p
                  className={cn(
                    "mt-0.5 flex items-center gap-2 text-sm sm:text-base",
                    item.goal ? "font-medium text-forest-deep/85" : "text-sage-text",
                  )}
                >
                  {item.goal && <GermanFlag className="h-3.5 w-auto rounded-[1px]" />}
                  {item.detail}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </DarkSection>
  );
}
