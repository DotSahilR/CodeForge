import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NotchedProjectCardProps {
  href: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  badge?: string;
  tags?: string[];
  screen?: { src: string; alt: string; className?: string };
  dim?: number;
  monochrome?: boolean;
  overlay?: boolean;
  surface?: string;
  accent?: string;
  accentForeground?: string;
  className?: string;
}

const DISC = 64;
const BLOCK = 80;
const FILLET = 28;

export function NotchedProjectCard({
  href,
  title,
  description,
  image,
  imageAlt = "",
  badge,
  tags = [],
  screen,
  dim = screen ? 0.45 : 0,
  monochrome = false,
  overlay = false,
  surface = "var(--color-background)",
  accent,
  accentForeground = "#0a0a0a",
  className,
}: NotchedProjectCardProps) {
  const tone = monochrome
    ? "grayscale transition-[filter,scale] duration-500 group-hover:grayscale-0 group-focus-visible:grayscale-0"
    : "transition-[scale] duration-500";

  const notch = (
    <>
      <div
        aria-hidden
        className="absolute bottom-0 right-0"
        style={{ width: BLOCK, height: BLOCK, borderTopLeftRadius: BLOCK - DISC / 2, background: surface }}
      />
      {[
        { bottom: BLOCK, right: 0 },
        { bottom: 0, right: BLOCK },
      ].map((pos, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute"
          style={{
            ...pos,
            width: FILLET,
            height: FILLET,
            background: `radial-gradient(circle at top left, transparent ${FILLET - 0.5}px, ${surface} ${FILLET}px)`,
          }}
        />
      ))}
      <span
        aria-hidden
        className={cn(
          "absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-[background-color,color,scale] duration-300 group-hover:scale-105",
          accent
            ? "group-hover:bg-[var(--card-accent)] group-hover:text-[var(--card-accent-fg)]"
            : "group-hover:bg-primary group-hover:text-primary-foreground",
        )}
        style={
          {
            width: DISC,
            height: DISC,
            "--card-accent": accent,
            "--card-accent-fg": accentForeground,
          } as React.CSSProperties
        }
      >
        <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </>
  );

  if (overlay) {
    return (
      <a
        href={href}
        className={cn(
          "group relative block aspect-[4/5] overflow-hidden rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
          className,
        )}
      >
        <img
          src={image}
          alt={imageAlt}
          className={cn("absolute inset-0 h-full w-full object-cover", tone, "group-hover:scale-[1.05]")}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        {badge && (
          <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {badge}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-5 pb-6 pr-24">
          <h3 className="line-clamp-2 text-xl font-medium leading-tight tracking-tight text-white">{title}</h3>
          {description && (
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/75">{description}</p>
          )}
          {tags.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((t, i) => (
                <li
                  key={`${t}-${i}`}
                  className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>

        {notch}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "group flex flex-col rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
    >
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-muted">
          <img
            src={image}
            alt={screen ? "" : imageAlt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              tone,
              !screen && "group-hover:scale-[1.04]",
            )}
          />
          {dim > 0 && (
            <div aria-hidden className="absolute inset-0" style={{ backgroundColor: `rgb(0 0 0 / ${dim})` }} />
          )}
          {screen && (
            <img
              src={screen.src}
              alt={screen.alt}
              className={cn(
                "absolute bottom-0 right-0 w-[82%] origin-bottom-right drop-shadow-[0_18px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.07]",
                tone,
                screen.className,
              )}
            />
          )}
          {badge && (
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-4">
              <span className="rounded-full border border-white/40 bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                {badge}
              </span>
            </div>
          )}
        </div>

        {notch}
      </div>

      <h3 className="mt-5 text-2xl font-medium tracking-tight text-foreground">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>}
      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <li
              key={`${t}-${i}`}
              className="rounded-md bg-secondary px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </a>
  );
}

export default NotchedProjectCard;
