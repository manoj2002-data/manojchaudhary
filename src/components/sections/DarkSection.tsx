import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Dark green page band with the gold line pattern, title and subtitle. */
export function DarkSection({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("geo-pattern flex-1 bg-forest px-5 py-12 lg:px-10 lg:py-16", className)}>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold text-gold md:text-5xl">{title}</h1>
        <span
          aria-hidden="true"
          className="mt-2 h-0.5 w-48 rounded-full bg-gradient-to-r from-transparent via-gold/70 to-transparent md:w-64"
        />
        <p className="mt-2 text-lg font-medium text-cream md:text-xl">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

/** Small gold corner brackets around a card, as in the design. */
export function GoldCorners() {
  const base = "pointer-events-none absolute size-2.5 border-gold";
  return (
    <>
      <span aria-hidden="true" className={cn(base, "top-1 left-1 border-t-2 border-l-2")} />
      <span aria-hidden="true" className={cn(base, "top-1 right-1 border-t-2 border-r-2")} />
      <span aria-hidden="true" className={cn(base, "bottom-1 left-1 border-b-2 border-l-2")} />
      <span aria-hidden="true" className={cn(base, "right-1 bottom-1 border-r-2 border-b-2")} />
    </>
  );
}

/** Joins a list with gold bullets: "A • B • C". */
export function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <span className={className}>
      {items.map((item, i) => (
        <span key={item}>
          {i > 0 && (
            <span className="mx-1.5 text-gold" aria-hidden="true">
              •
            </span>
          )}
          {item}
        </span>
      ))}
    </span>
  );
}
