import { ArrowRight } from "lucide-react";

import { GermanFlag, WhatsAppIcon } from "@/components/icons";
import { buildWhatsAppLink, siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

export function Hero() {
  const { t } = useLanguage();
  const whatsapp = buildWhatsAppLink(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <section className="geo-pattern relative overflow-hidden bg-forest">
      {/* Portrait — desktop: fills the right side and fades into the green */}
      <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <img
          src={siteConfig.portraitUrl}
          alt={t.hero.portraitAlt}
          className="portrait-fade h-full w-full object-cover object-[center_18%]"
          fetchPriority="high"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:min-h-[470px] lg:px-10 lg:py-20">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h1 className="font-display text-5xl leading-none font-semibold text-gold sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 text-2xl font-medium text-sage-text sm:text-3xl">
            <span>{t.hero.subtitleRole}</span>
            <span className="h-7 w-px bg-gold/50" aria-hidden="true" />
            <span>{t.hero.subtitlePlace}</span>
          </p>
          <p className="mt-3 text-lg font-medium text-cream sm:text-xl">{t.hero.description}</p>
          <p className="mt-3 flex items-center gap-2.5 text-lg font-semibold text-gold sm:text-xl">
            {t.hero.location}
            <GermanFlag className="h-4 w-auto rounded-[2px]" />
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-md bg-gold px-7 py-3 text-lg font-semibold text-forest-deep shadow-card transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lift"
            >
              <ArrowRight className="size-5" />
              {t.hero.viewPortfolio}
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md border border-gold/70 px-7 py-3 text-lg font-semibold text-gold-light transition-all hover:-translate-y-0.5 hover:bg-gold/10"
            >
              <WhatsAppIcon />
              {t.hero.contactMe}
            </a>
          </div>

          <p className="mt-5 inline-block rounded-md bg-gold/25 px-3.5 py-1 text-base font-medium text-gold-light">
            {t.hero.skillTag}
          </p>
        </div>

        {/* Portrait — mobile/tablet: below the text */}
        <div className="mt-10 overflow-hidden rounded-lg border border-gold/30 lg:hidden">
          <img
            src={siteConfig.portraitUrl}
            alt={t.hero.portraitAlt}
            className="portrait-fade-mobile aspect-[4/3] w-full object-cover object-[center_20%] sm:aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}
