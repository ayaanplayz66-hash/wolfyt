import { motion, useScroll, useTransform } from "motion/react";
import { Compass, DraftingCompass, Headphones, Rocket, Search, Wrench } from "lucide-react";
import { useRef } from "react";
import { Container, Section, SectionHeading } from "@/components/site/layout.tsx";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery call",
    description: "We learn about your business, audience, goals, and what success should look like.",
    duration: "1 day",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategy & planning",
    description: "A clear scope, thoughtful page plan, and timeline give your project direction.",
    duration: "2–3 days",
  },
  {
    number: "03",
    icon: DraftingCompass,
    title: "Design",
    description: "Your visual identity becomes a polished experience shaped around your customers.",
    duration: "3–5 days",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Development",
    description: "We build a fast, responsive website and refine it with your feedback.",
    duration: "5–10 days",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & support",
    description: "We take your site live, make sure everything works, and stay by your side.",
    duration: "Ongoing",
  },
];

export default function WorkingProcess() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section className="overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="A thoughtful process"
          title="Our Working Process"
          description="A clear, collaborative journey from the first conversation to a website you’re proud to share."
        />

        <div ref={timelineRef} className="relative mt-14 sm:mt-20">
          <div className="pointer-events-none absolute left-6 top-7 bottom-7 w-px bg-border md:hidden">
            <motion.div
              className="h-full w-full origin-top bg-primary"
              style={{ scaleY: progress }}
            />
          </div>
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-border md:block">
            <motion.div
              className="h-full w-full origin-left bg-primary"
              style={{ scaleX: progress }}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-5 md:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
                  className="relative flex gap-5 md:flex-col md:gap-6"
                >
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-background text-primary shadow-[0_8px_24px_-14px_oklch(0.68_0.2_44/0.65)] md:size-14">
                    <Icon className="size-6" strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0 pb-1 md:pr-3">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-bold tracking-[0.16em] text-primary">{step.number}</span>
                      <span className="h-px w-6 bg-primary/30" />
                    </div>
                    <h3 className="font-serif text-xl font-medium tracking-tight sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">
                      <Headphones className="size-3.5 text-primary" />
                      Typical: {step.duration}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
