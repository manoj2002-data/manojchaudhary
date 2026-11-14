import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import type { NavKey } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

/** Placeholder used by pages that will be built in a later phase. */
export function ComingSoon({ page }: { page: NavKey }) {
  const { t } = useLanguage();
  return (
    <section className="geo-pattern flex min-h-[60vh] items-center justify-center bg-forest px-5 py-20 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold tracking-[0.25em] text-gold uppercase">
          {t.comingSoon.eyebrow}
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-gold-light md:text-6xl">
          {t.nav[page]}
        </h1>
        <p className="mt-4 text-lg text-cream/85">{t.comingSoon.body}</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-gold/70 px-6 py-2.5 font-semibold text-gold-light transition-colors hover:bg-gold/10"
        >
          <ArrowLeft className="size-4" />
          {t.comingSoon.back}
        </Link>
      </div>
    </section>
  );
}
