import { Mail, MapPin, Share2 } from "lucide-react";
import type { ReactNode } from "react";

import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Reveal } from "@/components/Reveal";
import { pagesContent } from "@/data/pages";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

function ContactBlock({
  icon,
  title,
  children,
  delay,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="flex items-center gap-5">
      <div className="flex size-16 shrink-0 items-center justify-center rounded-md bg-icon-tile text-gold-light shadow-card">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-xl font-semibold text-forest-deep">{title}</h3>
        <div className="text-base text-ink/90">{children}</div>
      </div>
    </Reveal>
  );
}

const linkClass =
  "break-all underline-offset-4 transition-colors hover:text-gold-deep hover:underline";

export function ContactSection() {
  const { lang, t } = useLanguage();
  const form = pagesContent[lang].contact.form;
  return (
    <section className="bg-ivory px-5 py-12 lg:px-10">
      <h2 className="text-center text-3xl font-semibold text-forest-deep md:text-4xl">
        {t.contact.title}
      </h2>
      <div className="mx-auto mt-9 grid max-w-6xl gap-8 md:grid-cols-[1fr_1.1fr_1.5fr]">
        <ContactBlock icon={<MapPin className="size-8" />} title={t.contact.location} delay={0}>
          {siteConfig.location}
        </ContactBlock>
        <ContactBlock icon={<Mail className="size-8" />} title={t.contact.email} delay={100}>
          <a href={`mailto:${siteConfig.email}`} className={linkClass}>
            {siteConfig.email}
          </a>
          <div>
            <CopyEmailButton
              label={form.copyEmail}
              copiedLabel={form.copied}
              className="border-gold-deep/50 text-forest-deep hover:bg-gold/20"
            />
          </div>
        </ContactBlock>
        <ContactBlock icon={<Share2 className="size-8" />} title={t.contact.connect} delay={200}>
          <p>
            GitHub:{" "}
            <a href={siteConfig.github.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {siteConfig.github.label}
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href={siteConfig.linkedin.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {siteConfig.linkedin.label}
            </a>
          </p>
        </ContactBlock>
      </div>
    </section>
  );
}
