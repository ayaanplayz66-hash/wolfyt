import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import LaptopMockup from "@/components/site/laptop-mockup.tsx";
import { Container, Section, SectionHeading } from "@/components/site/layout.tsx";
import { displayImage, projects } from "@/lib/projects.ts";

const EASE = [0.22, 1, 0.36, 1] as const;
const featuredProject = projects[0];
const layeredProjects = projects.slice(1, 3);
const gridProjects = projects.slice(1);

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export default function PortfolioShowcase() {
  return (
    <Section className="overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title={<>Built to look <span className="italic text-primary">exceptional</span>. Made to perform.</>}
          description="A closer look at digital experiences designed to help ambitious businesses stand out and move forward."
        />

        {featuredProject ? (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="mt-14"
          >
            <Link
              to="/portfolio"
              aria-label={`Explore ${featuredProject.title} and the full portfolio`}
              className="group block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-5 shadow-[0_30px_90px_-55px_oklch(0.3_0.06_45/0.4)] sm:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_8%,oklch(0.94_0.07_65/0.55),transparent_75%)]" />
                <div className="relative mx-auto max-w-5xl [perspective:1800px]">
                  {layeredProjects.map((project, index) => (
                    <div
                      key={project.slug}
                      className={`pointer-events-none absolute top-[16%] z-0 hidden w-[29%] overflow-hidden rounded-xl border border-border bg-card shadow-[0_25px_55px_-25px_oklch(0.2_0.03_50/0.5)] lg:block ${
                        index === 0
                          ? "-left-[3%] -rotate-[8deg]"
                          : "-right-[3%] rotate-[8deg]"
                      }`}
                    >
                      <div className="flex h-7 items-center gap-1.5 border-b border-border/70 bg-background/90 px-3">
                        <span className="size-1.5 rounded-full bg-primary/70" />
                        <span className="size-1.5 rounded-full bg-muted-foreground/25" />
                        <span className="size-1.5 rounded-full bg-muted-foreground/25" />
                      </div>
                      <img
                        src={displayImage(project.image, 800)}
                        alt={`${project.title} website preview`}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover object-top"
                      />
                    </div>
                  ))}
                  <div className="relative z-10 mx-auto w-full max-w-4xl transition-transform duration-700 ease-out group-hover:-translate-y-1">
                    <LaptopMockup
                      src={displayImage(featuredProject.image, 1600)}
                      alt={`${featuredProject.title} website preview`}
                    />
                  </div>
                  <div className="pointer-events-none absolute -bottom-4 left-1/2 h-16 w-[72%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
                </div>

                <div className="relative mt-8 flex flex-col gap-5 border-t border-border/70 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">{featuredProject.client}</p>
                    <h3 className="mt-1 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                      {featuredProject.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary sm:self-auto">
                    {featuredProject.result}
                    <MoveUpRight className="size-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ) : null}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gridProjects.map((project) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <Link
                to="/portfolio"
                aria-label={`View ${project.title} in the portfolio`}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card p-3 shadow-[0_18px_45px_-35px_oklch(0.25_0.04_45/0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_-35px_oklch(0.25_0.04_45/0.45)]"
              >
                <div className="overflow-hidden rounded-xl border border-border/60 bg-muted">
                  <div className="flex h-7 items-center gap-1.5 border-b border-border/70 bg-background/90 px-3">
                    <span className="size-1.5 rounded-full bg-primary/70" />
                    <span className="size-1.5 rounded-full bg-muted-foreground/25" />
                    <span className="size-1.5 rounded-full bg-muted-foreground/25" />
                    <span className="ml-2 h-3 flex-1 rounded-full bg-muted/70" />
                  </div>
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <img
                      src={displayImage(project.image, 900)}
                      alt={`${project.title} project screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="h-[125%] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:-translate-y-3 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{project.category}</p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl font-medium leading-tight">{project.title}</h3>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-muted/70 px-2.5 py-1 text-[11px] text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-primary">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {project.result}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button
            render={<Link to="/portfolio" />}
            nativeButton={false}
            className="h-12 cursor-pointer rounded-2xl px-6 shadow-[0_12px_28px_-14px_oklch(0.68_0.2_44/0.75)]"
          >
            View full portfolio
            <ArrowUpRight />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
