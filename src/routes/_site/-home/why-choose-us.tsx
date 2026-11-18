import { motion } from "motion/react";
import {
  BadgeIndianRupee,
  Clock3,
  Headset,
  Laptop,
  Palette,
  SearchCheck,
  Smartphone,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/site/layout.tsx";

const EASE = [0.22, 1, 0.36, 1] as const;

const reasons = [
  {
    icon: Palette,
    title: "Premium custom design",
    description: "A considered look and feel made around your brand—not a cookie-cutter layout.",
    featured: true,
  },
  {
    icon: SearchCheck,
    title: "Fast loading & SEO-ready",
    description: "Built for quick visits and a strong foundation for search visibility.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Every page feels effortless on the device your customers use most.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent pricing",
    description: "Clear proposals and scope, so you know exactly what you’re investing in.",
  },
  {
    icon: Headset,
    title: "Direct WhatsApp support",
    description: "Talk to the people building your site, without the agency runaround.",
  },
];

const supportNote = {
  icon: Clock3,
  title: "Post-launch support included",
  description: "We stay with you after launch, from small updates to what comes next.",
};

export default function WhyChooseUs() {
  return (
    <Section className="bg-accent/25">
      <Container>
        <SectionHeading
          eyebrow="The Wolf difference"
          title="Built around your business, not just your website"
          description="Thoughtful design is only the beginning. You get a practical, personal partner invested in what your website can do."
        />

        <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: EASE }}
                whileHover={{ y: -5 }}
                className={
                  reason.featured
                    ? "group relative isolate flex min-h-72 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-foreground p-7 text-background shadow-[0_24px_70px_-42px_oklch(0.18_0.012_50/0.7)] sm:col-span-2 lg:row-span-2 lg:min-h-80 lg:p-9"
                    : "group flex min-h-56 flex-col rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-[0_16px_45px_-36px_oklch(0.18_0.012_50/0.3)] transition-shadow hover:shadow-[0_22px_48px_-34px_oklch(0.68_0.2_44/0.32)]"
                }
              >
                {reason.featured ? (
                  <>
                    <div className="pointer-events-none absolute -right-14 -top-16 -z-10 size-64 rounded-full bg-[radial-gradient(circle,oklch(0.68_0.2_44/0.45),transparent_68%)] blur-2xl" />
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_48%,oklch(0.68_0.2_44/0.08)_100%)]" />
                  </>
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <div className={reason.featured ? "rounded-2xl border border-background/15 bg-background/10 p-3 text-primary" : "rounded-2xl bg-accent p-3 text-primary"}>
                    <Icon className="size-6" strokeWidth={1.7} />
                  </div>
                  {reason.featured ? <Laptop className="size-5 text-background/35" /> : null}
                </div>
                <div className="mt-8">
                  <h3 className="font-serif text-xl font-medium tracking-tight sm:text-2xl">{reason.title}</h3>
                  <p className={reason.featured ? "mt-3 max-w-md text-sm leading-relaxed text-background/70 sm:text-base" : "mt-3 text-sm leading-relaxed text-muted-foreground"}>
                    {reason.description}
                  </p>
                  {reason.featured ? (
                    <p className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Made with intention
                      <span className="h-px w-8 bg-primary/70" />
                    </p>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col items-start gap-4 rounded-[1.75rem] border border-primary/20 bg-card p-6 sm:flex-row sm:items-center">
          <div className="rounded-2xl bg-accent p-3 text-primary">
            <supportNote.icon className="size-6" strokeWidth={1.7} />
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium tracking-tight">{supportNote.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{supportNote.description}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
