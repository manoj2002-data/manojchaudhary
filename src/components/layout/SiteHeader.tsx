import { Link } from "@tanstack/react-router";
import { ArrowLeftRight, Github, Menu, X } from "lucide-react";
import { useState } from "react";

import { LaurelIcon } from "@/components/icons";
import { navItems, siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  const option = (value: "de" | "en", label: string) => (
    <button
      type="button"
      onClick={() => setLang(value)}
      aria-pressed={lang === value}
      className={cn(
        "rounded-full px-2.5 py-0.5 text-sm font-semibold tracking-wide transition-colors",
        lang === value ? "bg-gold text-forest-deep" : "text-gold-light hover:text-gold",
      )}
    >
      {label}
    </button>
  );
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-gold/70 p-1",
        compact ? "" : "px-1.5",
      )}
    >
      {option("de", "DE")}
      <ArrowLeftRight className="size-4 text-gold" aria-hidden="true" />
      {option("en", "EN")}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="print:hidden sticky top-0 z-50 border-b border-gold/30 bg-forest/95 backdrop-blur supports-[backdrop-filter]:bg-forest/90">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 whitespace-nowrap font-display text-gold-light sm:gap-2.5"
        >
          <span className="text-xl font-semibold sm:text-3xl">{siteConfig.initials}</span>
          <span className="h-6 w-px bg-gold/50 sm:h-7" aria-hidden="true" />
          <span className="text-xl font-semibold sm:text-3xl">{siteConfig.name}</span>
          <LaurelIcon className="hidden text-gold sm:block" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item, i) => (
              <li key={item.key} className="flex items-center">
                {i > 0 && <span className="mx-1 h-4 w-px bg-gold/40" aria-hidden="true" />}
                <Link
                  to={item.to}
                  className="rounded px-3 py-1 text-lg font-medium text-cream transition-colors hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden flex-col items-end gap-1 lg:flex">
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.github.label}
              title={siteConfig.github.label}
              className="rounded-md border border-gold/50 p-1.5 text-gold-light transition-colors hover:bg-forest-soft hover:text-gold"
            >
              <Github className="size-4" />
            </a>
            <LanguageToggle />
          </div>
          <span className="text-xs text-cream/85">{t.langHint}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <LanguageToggle compact />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.menu}
            className="rounded-md border border-gold/50 p-2 text-gold-light transition-colors hover:bg-forest-soft"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-gold/20 bg-forest px-5 pb-5 lg:hidden animate-in fade-in slide-in-from-top-2"
        >
          <ul className="flex flex-col divide-y divide-gold/15">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-cream hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 rounded-md border border-gold/50 px-3 py-2 text-base font-medium text-gold-light transition-colors hover:bg-forest-soft hover:text-gold"
          >
            <Github className="size-5" />
            {siteConfig.github.label}
          </a>
          <p className="pt-3 text-xs text-cream/75">{t.langHint}</p>
        </nav>
      )}
    </header>
  );
}
