import { Award, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent } from "@/data/about";
import { useLanguage } from "@/lib/language";

/** Heading band now; shows certificate cards automatically once items are added in src/data/about.ts. */
export function Certifications() {
  const { lang } = useLanguage();
  const { title, items } = aboutContent[lang].certifications;

  return (
    <section className="geo-pattern bg-forest px-5 py-6 lg:px-10">
      <SectionHeading tone="gold">{title}</SectionHeading>

      {items.length > 0 && (
        <ul className="mx-auto mt-6 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cert) => (
            <li
              key={cert.title}
              className="flex items-start gap-3 rounded-md border border-gold/30 bg-sage p-4 shadow-card"
            >
              <Award className="size-7 shrink-0 text-gold-deep" strokeWidth={1.4} />
              <div className="min-w-0">
                <p className="font-semibold text-forest-deep">{cert.title}</p>
                <p className="text-sm text-ink/85">
                  {cert.issuer} · {cert.year}
                </p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-forest hover:text-gold-deep"
                  >
                    View <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
