import { Quote } from "lucide-react";

import { aboutContent } from "@/data/about";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

export function AboutQuote({ className }: { className?: string }) {
  const { lang } = useLanguage();
  const q = aboutContent[lang].quote;

  return (
    <figure
      className={cn(
        "rounded-md border border-gold/70 bg-ivory px-5 py-4 text-center shadow-lift",
        className,
      )}
    >
      <Quote className="mx-auto size-8 rotate-180 fill-gold text-gold" strokeWidth={1} aria-hidden="true" />
      <blockquote className="mt-2 text-sm leading-snug text-ink">“{q.text}”</blockquote>
      <figcaption className="mt-2 text-xs font-medium text-forest">{q.attribution}</figcaption>
    </figure>
  );
}
