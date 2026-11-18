import { cn } from "@/lib/utils.ts";

/** Realistic laptop frame (screen + hinge + base) wrapping a website screenshot. */
export default function LaptopMockup({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Lid */}
      <div className="relative mx-auto w-[86%] rounded-t-[1.1rem] bg-[oklch(0.22_0.008_50)] p-[1.6%] pb-[2.2%] shadow-[0_40px_80px_-30px_oklch(0.18_0.012_50/0.55)] ring-1 ring-[oklch(0.35_0.01_50)]">
        <div className="absolute top-[0.9%] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-[oklch(0.35_0.01_50)]" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[0.4rem] bg-muted">
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="size-full object-cover object-top"
          />
          {/* Screen glare */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,oklch(1_0_0/0.18)_0%,transparent_35%)]" />
        </div>
      </div>
      {/* Base */}
      <div className="relative mx-auto h-3 w-full rounded-b-[1.2rem] bg-gradient-to-b from-[oklch(0.86_0.006_60)] to-[oklch(0.7_0.008_60)] shadow-[0_18px_30px_-12px_oklch(0.18_0.012_50/0.45)] sm:h-4">
        <div className="absolute top-0 left-1/2 h-1.5 w-[14%] -translate-x-1/2 rounded-b-lg bg-[oklch(0.62_0.008_60)]" />
      </div>
    </div>
  );
}
