import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/** Small laurel wreath used next to the brand name. */
export function LaurelIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M11 27c-4-2-7-6.5-7-12 0-2.5.6-4.8 1.7-6.8" />
      <path d="M21 27c4-2 7-6.5 7-12 0-2.5-.6-4.8-1.7-6.8" />
      <path d="M5.2 11.5c1.6-.2 3 .6 3.4 2-1.6.3-3-.5-3.4-2Z" />
      <path d="M4.6 16.5c1.6-.5 3.1.1 3.8 1.4-1.5.6-3.1 0-3.8-1.4Z" />
      <path d="M6 21.3c1.6-.7 3.2-.3 4.1.9-1.5.8-3.2.4-4.1-.9Z" />
      <path d="M7.2 7.3c1.4.3 2.3 1.5 2.2 2.9-1.4-.2-2.4-1.4-2.2-2.9Z" />
      <path d="M26.8 11.5c-1.6-.2-3 .6-3.4 2 1.6.3 3-.5 3.4-2Z" />
      <path d="M27.4 16.5c-1.6-.5-3.1.1-3.8 1.4 1.5.6 3.1 0 3.8-1.4Z" />
      <path d="M26 21.3c-1.6-.7-3.2-.3-4.1.9 1.5.8 3.2.4 4.1-.9Z" />
      <path d="M24.8 7.3c-1.4.3-2.3 1.5-2.2 2.9 1.4-.2 2.4-1.4 2.2-2.9Z" />
      <path d="M13 28.5 16 26l3 2.5" />
    </svg>
  );
}

export function PythonIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.5c-3 0-4.5 1-4.5 3v2.5H12v1H5.5c-2 0-3 1.5-3 4s1 4 3 4h2v-2.5c0-1.7 1.3-3 3-3h4c1.4 0 2.5-1.1 2.5-2.5v-3.5c0-2-1.5-3-5-3Z" />
      <path d="M12 21.5c3 0 4.5-1 4.5-3V16H12v-1h6.5c2 0 3-1.5 3-4s-1-4-3-4h-2v2.5c0 1.7-1.3 3-3 3h-4C8.1 12.5 7 13.6 7 15v3.5c0 2 1.5 3 5 3Z" />
      <circle cx="10" cy="5.3" r=".6" fill="currentColor" />
      <circle cx="14" cy="18.7" r=".6" fill="currentColor" />
    </svg>
  );
}

export function PowerBiIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3.5" width="18" height="17" rx="2" />
      <rect x="6.5" y="12" width="2.6" height="5.5" rx=".5" />
      <rect x="10.7" y="9" width="2.6" height="8.5" rx=".5" />
      <rect x="14.9" y="6.5" width="2.6" height="11" rx=".5" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.5 20.5 4.8 16A8.5 8.5 0 1 1 8 19.2l-4.5 1.3Z" />
      <path d="M9 8.5c0-.5.4-1 .9-1h.5l1 2.2-.8.9a5.5 5.5 0 0 0 2.8 2.8l.9-.8 2.2 1v.5c0 .5-.5.9-1 .9A6.5 6.5 0 0 1 9 8.5Z" />
    </svg>
  );
}

/* Flags are content imagery; their official colours are intentional. */
export function GermanFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 5 3" className={className} role="img" aria-label="Germany">
      <rect width="5" height="1" y="0" fill="#000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

export function NepalFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 30" className={className} role="img" aria-label="Nepal">
      <path
        d="M1.5 1.5 20 13H8.5L21 28.5H1.5Z"
        fill="#DC143C"
        stroke="#003893"
        strokeWidth="1.6"
        strokeLinejoin="miter"
      />
      <circle cx="6.5" cy="9.5" r="1.8" fill="#fff" />
      <circle cx="7" cy="21.5" r="2.4" fill="#fff" />
    </svg>
  );
}

export function IndiaFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} role="img" aria-label="India">
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect width="30" height="6.67" y="13.33" fill="#138808" />
      <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth=".7" />
      <circle cx="15" cy="10" r=".6" fill="#000080" />
    </svg>
  );
}

export function UKFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} role="img" aria-label="United Kingdom">
      <clipPath id="uk-clip">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <path d="M0 0v30h60V0z" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-clip)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}
