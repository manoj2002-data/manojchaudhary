import { GermanFlag, NepalFlag } from "@/components/icons";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="geo-pattern bg-forest px-5 py-9 text-center">
      <h2 className="flex flex-wrap items-center justify-center gap-3 text-2xl font-semibold text-gold md:text-3xl">
        <NepalFlag className="h-8 w-auto" />
        <span>{t.footer.heading}</span>
        <GermanFlag className="h-5 w-auto rounded-[2px]" />
      </h2>
      <p className="mx-auto mt-2 max-w-3xl text-sm text-cream/85">
        © {siteConfig.copyrightYear} {siteConfig.name}
        {t.footer.line.map((part) => (
          <span key={part}>
            <span className="mx-2 text-gold" aria-hidden="true">
              •
            </span>
            {part}
          </span>
        ))}
      </p>
    </footer>
  );
}
