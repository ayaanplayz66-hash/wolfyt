import type { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

/** Centered max-width wrapper with responsive side padding. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** Small uppercase label shown above section titles. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

/** Eyebrow + serif title + description, used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Vertical rhythm for page sections. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

/** Hero block for inner pages (Services, Portfolio, Pricing, Contact). */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,oklch(0.9_0.08_60/0.55),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.18_0.012_50/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.18_0.012_50/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <Container className="relative flex flex-col items-center gap-5 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
        {children}
      </Container>
    </section>
  );
}
