import type { RoutePath } from "@/router.tsx";

type Site = {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  email: string;
  location: string;
  nav: Array<{ label: string; to: RoutePath }>;
};

export const site: Site = {
  name: "Wolf Digital Solution",
  tagline: "Premium websites and web apps that grow your business",
  description:
    "Wolf Digital Solution designs and builds premium business websites, e-commerce stores, booking systems and custom web applications for ambitious brands.",
  // Country code + number, digits only (used for wa.me links)
  whatsappNumber: "917990531215",
  email: "hello@wolfdigitalsolution.com",
  location: "India",
  nav: [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
  ],
};

/** WhatsApp click-to-chat link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
