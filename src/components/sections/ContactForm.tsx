import { Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { pagesContent } from "@/data/pages";
import { buildGmailLink, buildMailtoLink, contactSchema, type ContactMessage } from "@/lib/contact";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

type Field = keyof ContactMessage;

const fieldClass =
  "w-full rounded-md border border-gold/40 bg-forest-deep/70 px-3.5 py-2.5 text-base text-cream placeholder:text-cream/45 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

/** Contact form: checks the input, then opens Gmail (or the email app) with everything filled in. */
export function ContactForm() {
  const { lang } = useLanguage();
  const c = pagesContent[lang].contact;
  const f = c.form;
  const [values, setValues] = useState<ContactMessage>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});

  const parsed = contactSchema.safeParse(values);

  function update(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: false }));
  }

  function validate(): ContactMessage | null {
    if (parsed.success) return parsed.data;
    const next: Partial<Record<Field, boolean>> = {};
    for (const issue of parsed.error.issues) next[issue.path[0] as Field] = true;
    setErrors(next);
    return null;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = validate();
    if (!msg) return;
    window.open(buildGmailLink(msg, c.emailSubject), "_blank", "noopener,noreferrer");
  }

  function openEmailApp() {
    const msg = validate();
    if (!msg) return;
    window.location.href = buildMailtoLink(msg, c.emailSubject);
  }

  const error = (field: Field) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-1 text-sm text-gold-light">
        {f.errors[field]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto mt-12 max-w-2xl rounded-lg border border-gold/50 bg-forest-deep/50 p-6 shadow-card md:p-8"
    >
      <h2 className="text-center text-2xl font-semibold text-gold-light">{f.title}</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-cream">
            {f.name}
          </label>
          <input
            id="contact-name"
            autoComplete="name"
            maxLength={100}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={f.namePlaceholder}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(fieldClass, errors.name && "border-gold-light")}
          />
          {error("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-cream">
            {f.email}
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            maxLength={255}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={f.emailPlaceholder}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(fieldClass, errors.email && "border-gold-light")}
          />
          {error("email")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-cream">
          {f.message}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          maxLength={2000}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={f.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(fieldClass, "resize-y", errors.message && "border-gold-light")}
        />
        {error("message")}
      </div>

      <div className="mt-7 flex flex-col items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-14 py-3 text-xl font-semibold text-forest-deep shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
          <Send className="size-5" />
          {c.sendMessage}
        </button>
        <p className="text-center text-sm text-cream/75">{f.sendHint}</p>
        <button
          type="button"
          onClick={openEmailApp}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-light underline-offset-4 hover:underline"
        >
          <Mail className="size-4" aria-hidden="true" />
          {f.emailApp}
        </button>
      </div>
    </form>
  );
}
