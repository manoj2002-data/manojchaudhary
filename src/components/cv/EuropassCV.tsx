import { Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Flag, Github, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { aboutContent } from "@/data/about";
import { cvContent, type CvEntry } from "@/data/cv";
import { pagesContent, projectsGithub } from "@/data/pages";
import { buildWhatsAppLink, siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="break-after-avoid border-b-2 border-gold pb-1.5 text-sm font-bold tracking-[0.14em] text-forest uppercase">
        {title}
      </h2>
      <div className="mt-4 space-y-5">{children}</div>
    </section>
  );
}

function Entry({ period, title, place, details }: CvEntry) {
  return (
    <div className="grid gap-1 break-inside-avoid sm:grid-cols-[150px_1fr] sm:gap-6">
      <p className="text-sm font-semibold text-gold-deep">{period}</p>
      <div>
        <h3 className="text-lg leading-snug font-bold text-ink">{title}</h3>
        <p className="text-sm font-medium text-muted-foreground">{place}</p>
        {details.length > 0 && (
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-ink marker:text-gold-deep">
            {details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ContactRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex min-w-0 items-start gap-2.5">
      <span className="mt-0.5 shrink-0 text-gold-deep">{icon}</span>
      <span className="min-w-0">
        <span className="sr-only">{label}: </span>
        {children}
      </span>
    </li>
  );
}

const linkClass = "[overflow-wrap:anywhere] underline-offset-2 hover:text-forest hover:underline";

export function EuropassCV() {
  const { lang } = useLanguage();
  const c = cvContent[lang];
  const work = aboutContent[lang].experience;
  const projects = pagesContent[lang].projects.items;
  const whatsapp = buildWhatsAppLink(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <div className="geo-pattern-light flex-1 px-4 py-8 sm:px-6 sm:py-12 print:p-0 print:before:hidden">
      {/* Toolbar (hidden when printing) */}
      <div className="mx-auto mb-5 flex max-w-4xl flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-base font-semibold text-forest transition-colors hover:text-gold-deep"
        >
          <ArrowLeft className="size-4" />
          {c.back}
        </Link>
        <div className="flex flex-col items-end gap-1">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-md bg-forest px-5 py-2.5 text-base font-semibold text-gold-light shadow-card transition-all hover:-translate-y-0.5 hover:bg-forest-soft hover:shadow-lift"
          >
            <Download className="size-4" />
            {c.download}
          </button>
          <span className="text-xs text-muted-foreground">{c.downloadHint}</span>
        </div>
      </div>

      <article className="cv-sheet mx-auto max-w-4xl rounded-lg border border-border bg-ivory p-6 text-ink shadow-lift sm:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
        {/* Header */}
        <header className="flex flex-col gap-6 border-b border-border pb-7 sm:flex-row sm:items-start">
          <img
            src={siteConfig.portraitUrl}
            alt={`${siteConfig.name}`}
            className="size-32 shrink-0 rounded-md border-2 border-gold object-cover object-[center_18%] sm:size-36 print:size-24"
          />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold tracking-[0.18em] text-gold-deep uppercase">{c.docLabel}</p>
            <h1 className="mt-1 font-display text-4xl leading-tight font-semibold text-forest sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-1 text-base font-medium text-muted-foreground">{c.headline}</p>
            <ul className="mt-4 grid gap-x-6 gap-y-2 text-[15px] sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] print:text-[13px]">
              <ContactRow icon={<MapPin className="size-4" />} label={c.labels.address}>
                {c.address}
              </ContactRow>
              <ContactRow icon={<Phone className="size-4" />} label={c.labels.phone}>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {siteConfig.whatsappDisplay}
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="size-4" />} label={c.labels.email}>
                <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                  {siteConfig.email}
                </a>
              </ContactRow>
              <ContactRow icon={<Github className="size-4" />} label={c.labels.github}>
                <a href={projectsGithub.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {projectsGithub.label}
                </a>
              </ContactRow>
              <ContactRow icon={<Flag className="size-4" />} label={c.labels.nationality}>
                {c.labels.nationality}: {c.nationality}
              </ContactRow>
            </ul>
          </div>
        </header>

        <div className="mt-7">
          <Section title={c.sections.about}>
            <p className="text-[15px] leading-relaxed">{c.about}</p>
          </Section>

          <Section title={c.sections.work}>
            <Entry {...c.work} details={work.bullets} />
          </Section>

          <Section title={c.sections.education}>
            {c.education.map((e) => (
              <Entry key={e.title} {...e} />
            ))}
          </Section>

          <Section title={c.sections.languages}>
            <div className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-6">
              <p className="text-sm font-semibold text-gold-deep">{c.languages.motherTongueLabel}</p>
              <p className="text-base font-bold">{c.languages.motherTongue}</p>
            </div>
            <div className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-6">
              <p className="text-sm font-semibold text-gold-deep">{c.languages.otherLabel}</p>
              <ul className="divide-y divide-border rounded-md border border-border">
                {c.languages.items.map((l) => (
                  <li key={l.name} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 px-4 py-2.5">
                    <span className="min-w-20 font-bold">{l.name}</span>
                    <span className="rounded bg-forest px-2 py-0.5 text-sm font-semibold text-gold-light">
                      {l.level}
                    </span>
                    {l.note && <span className="text-sm text-muted-foreground">{l.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section title={c.sections.digital}>
            {c.digital.map((d) => (
              <div key={d.group} className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-6">
                <p className="text-sm font-semibold text-gold-deep">{d.group}</p>
                <p className="text-[15px]">{d.items}</p>
              </div>
            ))}
          </Section>

          <Section title={c.sections.projects}>
            <p className="text-sm text-muted-foreground">
              {c.projectsNote}{" "}
              <a href={projectsGithub.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {projectsGithub.label}
              </a>
            </p>
            {projects.map((p) => (
              <div key={p.id} className="grid gap-1 break-inside-avoid sm:grid-cols-[150px_1fr] sm:gap-6">
                <p className="text-sm font-semibold text-gold-deep">{p.date}</p>
                <div>
                  <h3 className="font-bold leading-snug">
                    {p.title} <span className="text-sm font-medium text-muted-foreground">· {p.tech}</span>
                  </h3>
                  <p className="text-[15px]">{p.description}</p>
                </div>
              </div>
            ))}
          </Section>
        </div>
      </article>
    </div>
  );
}
