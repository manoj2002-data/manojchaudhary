import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";

import { CopyEmailButton } from "@/components/CopyEmailButton";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { pagesContent } from "@/data/pages";
import { buildWhatsAppLink, siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

import { ContactForm } from "./ContactForm";
import { DarkSection } from "./DarkSection";

const linkClass = "break-all underline-offset-4 transition-colors hover:text-gold hover:underline";

function Item({ icon, title, children, delay }: { icon: ReactNode; title: string; children: ReactNode; delay: number }) {
  return (
    <Reveal delay={delay} className="flex items-center gap-4">
      <span className="flex size-12 shrink-0 items-center justify-center text-gold-light">{icon}</span>
      <div className="min-w-0">
        <h2 className="text-xl font-semibold text-gold-light">{title}</h2>
        <div className="text-base font-medium text-cream">{children}</div>
      </div>
    </Reveal>
  );
}

export function ContactPanel() {
  const { lang } = useLanguage();
  const c = pagesContent[lang].contact;
  const whatsapp = buildWhatsAppLink(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <DarkSection title={c.title} subtitle={c.subtitle}>
      <div className="mx-auto mt-10 grid max-w-6xl gap-7 sm:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1.3fr_1.4fr]">
        <Item icon={<MapPin className="size-9" strokeWidth={1.5} />} title={c.location} delay={0}>
          {siteConfig.location}
        </Item>
        <Item icon={<Mail className="size-9" strokeWidth={1.5} />} title={c.email} delay={80}>
          <a href={`mailto:${siteConfig.email}`} className={linkClass}>
            {siteConfig.email}
          </a>
          <div>
            <CopyEmailButton
              label={c.form.copyEmail}
              copiedLabel={c.form.copied}
              className="border-gold/50 text-gold-light hover:bg-gold/15"
            />
          </div>
        </Item>
        <Item icon={<WhatsAppIcon size={34} />} title={c.phone} delay={160}>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {c.whatsappText}
          </a>
        </Item>
        <div className="flex flex-col gap-6">
          <Item icon={<Github className="size-9" strokeWidth={1.5} />} title={c.github} delay={240}>
            <a href={siteConfig.github.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {siteConfig.github.label}
            </a>
          </Item>
          <Item icon={<Linkedin className="size-9" strokeWidth={1.5} />} title={c.linkedin} delay={320}>
            <a href={siteConfig.linkedin.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {siteConfig.linkedin.label}
            </a>
          </Item>
        </div>
      </div>

      <ContactForm />

      <div className="mt-10 flex flex-col items-center gap-5">
        <p className="rounded-full border border-gold/70 px-5 py-1.5 text-center text-base font-medium text-gold-light">
          {c.availability}
        </p>
      </div>
    </DarkSection>
  );
}
