import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site.ts";
import { Container } from "./layout.tsx";
import Logo from "./logo.tsx";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-[oklch(0.975_0.014_70)]">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex max-w-sm flex-col gap-5">
          <Logo />
          <p className="text-sm text-muted-foreground">{site.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Explore
          </h3>
          <ul className="flex flex-col gap-2.5">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="cursor-pointer text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Get in touch
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href={whatsappLink("Hi Wolf Digital Solution, I'd like to discuss a website project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2.5 font-medium transition-colors hover:text-primary"
              >
                <MessageCircle className="size-4 text-primary" />
                +91 {site.whatsappNumber.slice(2)}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex cursor-pointer items-center gap-2.5 font-medium break-all transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {site.location}
            </li>
          </ul>
        </div>
      </Container>
      <Container className="relative flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>Designed and built with care in India.</p>
      </Container>
    </footer>
  );
}
