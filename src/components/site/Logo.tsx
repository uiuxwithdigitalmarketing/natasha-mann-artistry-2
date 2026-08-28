import { Link } from "@tanstack/react-router";

import logo from "@/assets/nm-logo-white.png.asset.json";
import { business } from "@/content/site";
import { cn } from "@/lib/utils";

/** Header lockup: the N|M monogram mark beside the business name. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${business.name} — home`}
      className={cn("group inline-flex items-center gap-3.5", className)}
    >
      <img
        src={logo.url}
        alt=""
        aria-hidden="true"
        width={711}
        height={752}
        className="h-11 w-auto object-contain object-top [clip-path:inset(0_0_58%_0)]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.68rem] font-semibold tracking-[0.3em] text-foreground uppercase">
          Natasha Mann
        </span>
        <span className="mt-1 font-sans text-[0.6rem] tracking-[0.42em] text-rosegold uppercase">
          Artistry
        </span>
      </span>
    </Link>
  );
}

/** The full brand logo lockup, for editorial brand moments. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Natasha Mann Artistry logo — N|M monogram with the tagline Timeless Beauty. Every Occasion."
      width={711}
      height={752}
      loading="lazy"
      decoding="async"
      className={cn("h-auto w-full", className)}
    />
  );
}
