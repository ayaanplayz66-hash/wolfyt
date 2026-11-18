import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils.ts";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-2.5 cursor-pointer", className)}
      aria-label="Wolf Digital Solution home"
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-foreground text-background shadow-[0_6px_20px_-6px_oklch(0.68_0.2_44/0.7)]">
        <span className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[oklch(0.55_0.2_35)] opacity-90 transition-opacity group-hover:opacity-100" />
        <span className="relative font-serif text-lg font-semibold italic leading-none text-primary-foreground">
          W
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-tight">
          Wolf Digital
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Solution
        </span>
      </span>
    </Link>
  );
}
