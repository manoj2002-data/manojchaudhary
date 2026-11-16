import { z } from "zod";

import { siteConfig } from "@/data/portfolio";

/** Contact form rules: name, a valid email and a message, each trimmed and length-limited. */
export const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

export type ContactMessage = z.infer<typeof contactSchema>;

function body({ name, email, message }: ContactMessage) {
  return `${message}\n\n— ${name}\n${email}`;
}

/** Gmail "compose" link to Manoj with subject and message filled in. Works without an email app. */
export function buildGmailLink(msg: ContactMessage, subject: string): string {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: siteConfig.email, su: subject, body: body(msg) });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/** mailto: link for visitors who prefer their own email app. */
export function buildMailtoLink(msg: ContactMessage, subject: string): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body(msg))}`;
}
