import { useState } from "react";

/* ------------------------------------------------------------------ *
 * InstitutionMark
 * A mounted "plate" (warm parchment tile) inside a dark card, so every
 * official mark — monochrome crests, colour wordmarks, seals — stays
 * legible and visually balanced regardless of its original aspect ratio.
 *
 * object-fit: contain is used throughout; logos are never stretched.
 * If a logo fails to load (or is absent because no official mark could
 * be verified) a designed initials monogram takes its place.
 * ------------------------------------------------------------------ */

type Shape = "square" | "wide";

const PLATE: Record<Shape, string> = {
  square: "h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24",
  wide: "h-[3.25rem] w-[6.5rem] sm:h-[3.75rem] sm:w-[8.5rem]",
};

const MONOGRAM: Record<Shape, string> = {
  square: "text-[1.35rem] sm:text-[1.6rem]",
  wide: "text-base sm:text-lg tracking-[0.14em]",
};

export function InstitutionMark({
  src,
  alt,
  initials,
  shape = "square",
  className = "",
}: {
  src?: string;
  alt: string;
  initials: string;
  shape?: Shape;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showLogo = Boolean(src) && !failed;

  return (
    <div
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-[10px] bg-plate shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-2px_6px_rgba(11,13,18,0.10),0_2px_10px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.04] ${PLATE[shape]} ${className}`}
    >
      {/* faint paper grain on the plate */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,255,255,0.85),rgba(214,206,190,0.35))]" />
      {showLogo ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={shape === "wide" ? 240 : 128}
          height={shape === "wide" ? 64 : 128}
          onError={() => setFailed(true)}
          className="relative z-10 max-h-[72%] max-w-[80%] object-contain"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <span
          className={`relative z-10 font-display font-bold text-ink/85 ${MONOGRAM[shape]}`}
          aria-label={alt}
          role="img"
        >
          {initials}
        </span>
      )}
    </div>
  );
}

/* Status chip: teal = in progress, ruled = completed, dashed = awaiting. */
export function StatusChip({
  status,
  placeholder = false,
}: {
  status: string;
  placeholder?: boolean;
}) {
  if (placeholder) {
    return (
      <span className="micro inline-flex items-center gap-2 rounded-full border border-dashed border-rule px-2.5 py-1 text-muted">
        <span className="h-1 w-1 rounded-full bg-muted" />
        Awaiting record
      </span>
    );
  }
  const live = /pursuing/i.test(status);
  return (
    <span
      className={`micro inline-flex items-center gap-2 rounded-full border px-2.5 py-1 ${
        live
          ? "border-teal/40 bg-teal/10 text-teal"
          : "border-rule bg-white/[0.02] text-muted"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${live ? "bg-teal" : "bg-muted/60"}`}
      />
      {status}
    </span>
  );
}

/* Thin brass rule used between numbered records. */
export function BrassRule({ className = "" }: { className?: string }) {
  return (
    <div className={`h-px w-full bg-rule ${className}`}>
      <div className="h-px w-full bg-gradient-to-r from-brass/70 via-brass/15 to-transparent" />
    </div>
  );
}
