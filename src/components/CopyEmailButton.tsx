import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Small button that copies Manoj's email — handy when a device has no email app. */
export function CopyEmailButton({ label, copiedLabel, className }: { label: string; copiedLabel: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
    } catch {
      // Older browsers / blocked clipboard: fall back to a hidden text field.
      const field = document.createElement("textarea");
      field.value = siteConfig.email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={cn(
        "mt-1 inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium transition-colors",
        className,
      )}
    >
      {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
      {copied ? copiedLabel : label}
    </button>
  );
}
