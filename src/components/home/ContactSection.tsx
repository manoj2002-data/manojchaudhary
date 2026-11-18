import { Github, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";

import { CopyEmailButton } from "@/components/CopyEmailButton";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { pagesContent } from "@/data/pages";
import { buildWhatsAppLink, siteConfig } from "@/data/portfolio";
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
        <h3 className="text-xl font-semibold text-forest-deep xl:whitespace-nowrap">{title}</h3>
        <div className="text-base text-ink/90">{children}</div>
      </div>
    </Reveal>
  );
}

const linkClass =
  "[overflow-wrap:anywhere] xl:whitespace-nowrap underline-offset-4 transition-colors hover:text-gold-deep hover:underline";

export function ContactSection() {
  const { lang, t } = useLanguage();
  const pc = pagesContent[lang].contact;
  const form = pc.form;
  const whatsapp = buildWhatsAppLink(siteConfig.whatsappNumber, siteConfig.whatsappMessage);
  return (
    <section className="bg-ivory px-5 py-12 lg:px-10">
      <h2 className="text-center text-3xl font-semibold text-forest-deep md:text-4xl">
        {t.contact.title}
      </h2>
      <div className="mx-auto mt-9 grid max-w-6xl gap-8 sm:grid-cols-2 xl:grid-cols-[repeat(4,auto)] xl:justify-between">
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
        <ContactBlock icon={<WhatsAppIcon size={30} />} title={pc.phone} delay={200}>
          <a href={`tel:+${siteConfig.whatsappNumber}`} className={linkClass}>
            {siteConfig.whatsappDisplay}
          </a>
          <div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-gold-deep/50 px-2 py-0.5 text-xs font-medium text-forest-deep transition-colors hover:bg-gold/20"
            >
              <WhatsAppIcon size={14} />
              {pc.whatsappText}
            </a>
          </div>
        </ContactBlock>
        <ContactBlock icon={<Github className="size-8" />} title={siteConfig.linkedin ? t.contact.connect : pc.github} delay={300}>
          <p>
            {siteConfig.linkedin && "GitHub: "}
            <a href={siteConfig.github.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {siteConfig.github.label}
            </a>
          </p>
          {siteConfig.linkedin && (
            <p>
              LinkedIn:{" "}
              <a href={siteConfig.linkedin.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {siteConfig.linkedin.label}
              </a>
            </p>
          )}
        </ContactBlock>
      </div>
    </section>
  );
}
