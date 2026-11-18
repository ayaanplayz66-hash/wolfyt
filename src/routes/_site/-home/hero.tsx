import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Container, Eyebrow } from "@/components/site/layout.tsx";
import LaptopMockup from "@/components/site/laptop-mockup.tsx";
import { displayImage, projects } from "@/lib/projects.ts";
import { whatsappLink } from "@/lib/site.ts";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "7–21", label: "Days to launch" },
  { value: "4.9/5", label: "Client rating" },
];

export default function Hero() {
  const [main, left, right] = projects;

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Atmosphere: warm radial glow + fine grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.88_0.1_58/0.6),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.18_0.012_50/0.045)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.18_0.012_50/0.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]" />

      <Container className="relative flex flex-col items-center text-center">
        <Eyebrow>Premium web studio</Eyebrow>

        <h1 className="mt-6 max-w-5xl font-serif text-[2.6rem] leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl md:text-7xl">
          Websites that look premium and{" "}
          <span className="relative whitespace-nowrap italic text-primary">
            grow your business
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
              className="absolute -bottom-1 left-0 h-[0.12em] w-full origin-left rounded-full bg-primary/30"
            />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
          Wolf Digital Solution designs and builds fast, beautiful business websites,
          online stores and custom web apps that turn visitors into paying customers.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button
            render={<Link to="/contact" />}
            nativeButton={false}
            className="h-13 w-full rounded-2xl px-7 text-base shadow-[0_14px_30px_-10px_oklch(0.68_0.2_44/0.85)] sm:w-auto"
          >
            Get a free quotation
            <ArrowUpRight />
          </Button>
          <Button
            render={
              <a
                href={whatsappLink("Hi Wolf Digital Solution, I'd like to discuss a website project.")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
            variant="secondary"
            className="h-13 w-full rounded-2xl border border-border bg-card px-7 text-base sm:w-auto"
          >
            <MessageCircle className="text-primary" />
            Chat on WhatsApp
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-primary text-primary" />
            ))}
          </div>
          Trusted by growing brands across India
        </div>

        {/* Layered 3D device stage */}
        <div className="relative mt-16 w-full max-w-5xl [perspective:2000px] sm:mt-20">
          <motion.div
            initial={{ y: 40, rotateX: 18 }}
            animate={{ y: 0, rotateX: 8 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative z-10 mx-auto w-[88%] [transform-style:preserve-3d]"
          >
            <LaptopMockup
              src={displayImage(main.image, 1600)}
              alt={`${main.title} website preview`}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ x: -30, y: 30 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
            className="absolute top-[12%] -left-[2%] z-0 hidden w-[34%] -rotate-6 overflow-hidden rounded-xl border border-border bg-card shadow-2xl md:block"
          >
            <img
              src={displayImage(left.image, 800)}
              alt={`${left.title} website preview`}
              className="aspect-[4/3] w-full object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ x: 30, y: 30 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
            className="absolute top-[18%] -right-[2%] z-0 hidden w-[34%] rotate-6 overflow-hidden rounded-xl border border-border bg-card shadow-2xl md:block"
          >
            <img
              src={displayImage(right.image, 800)}
              alt={`${right.title} website preview`}
              className="aspect-[4/3] w-full object-cover object-top"
            />
          </motion.div>

          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[80%] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        </div>

        <dl className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-4 sm:mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
              <dd className="font-serif text-2xl font-medium sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
