import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.tsx";
import { site } from "@/lib/site.ts";
import { Container } from "./layout.tsx";
import Logo from "./logo.tsx";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 rounded-2xl border border-border/70 bg-background/80 px-4 shadow-[0_8px_30px_-12px_oklch(0.18_0.012_50/0.15)] backdrop-blur-xl sm:px-5">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              render={<Link to="/contact" />}
              nativeButton={false}
              className="hidden h-10 rounded-xl px-4 shadow-[0_8px_20px_-8px_oklch(0.68_0.2_44/0.8)] sm:inline-flex"
            >
              Start a project
              <ArrowUpRight />
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Logo />
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                  {site.nav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      onClick={() => setOpen(false)}
                      className="cursor-pointer rounded-xl px-4 py-3 font-serif text-2xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4">
                  <Button
                    render={<Link to="/contact" onClick={() => setOpen(false)} />}
                    nativeButton={false}
                    className="h-12 w-full rounded-xl"
                  >
                    Start a project
                    <ArrowUpRight />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
