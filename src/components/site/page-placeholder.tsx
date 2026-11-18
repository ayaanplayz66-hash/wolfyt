import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { whatsappLink } from "@/lib/site.ts";
import { Container, PageHero } from "./layout.tsx";

/** Temporary page body used until a page's full section is built. */
export default function PagePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <Button
            render={<a href={whatsappLink()} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            className="h-12 rounded-xl px-6"
          >
            Chat on WhatsApp
          </Button>
          <Button
            render={<Link to="/" />}
            nativeButton={false}
            variant="secondary"
            className="h-12 rounded-xl px-6"
          >
            Back to home
            <ArrowRight />
          </Button>
        </div>
      </PageHero>
      <Container className="pb-24">
        <div className="rounded-3xl border border-dashed border-border bg-muted/40 p-10 text-center text-sm text-muted-foreground">
          This page is being crafted and will be available very soon.
        </div>
      </Container>
    </>
  );
}
