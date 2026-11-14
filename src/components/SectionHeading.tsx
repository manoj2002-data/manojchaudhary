import { cn } from "@/lib/utils";

/** Centered section title with a short gold underline. */
export function SectionHeading({
  children,
  tone = "dark",
  as: Tag = "h2",
  className,
}: {
  children: string;
  tone?: "dark" | "gold";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <Tag
        className={cn(
          "text-3xl font-semibold md:text-4xl",
          tone === "gold" ? "text-gold" : "text-forest-deep",
        )}
      >
        {children}
      </Tag>
      <span
        aria-hidden="true"
        className={cn(
          "mt-1.5 h-0.5 w-40 rounded-full bg-gradient-to-r from-transparent to-transparent",
          tone === "gold" ? "via-gold/70" : "via-gold-deep/70",
        )}
      />
    </div>
  );
}
