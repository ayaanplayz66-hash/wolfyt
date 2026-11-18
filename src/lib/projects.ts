export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Business Website" | "E-commerce" | "Web Application" | "Booking System" | "Landing Page";
  summary: string;
  image: string;
  tags: string[];
  result: string;
};

// Shared showcase data. Moves to the database once the admin dashboard exists.
export const projects: Project[] = [
  {
    slug: "maison-atelier",
    title: "Maison Atelier",
    client: "Luxury interior studio",
    category: "Business Website",
    summary: "An editorial website that turns a portfolio of interiors into a steady stream of premium leads.",
    image: "https://hercules-cdn.com/file_juv43EH0yAYn0DZtRkkdLN5V",
    tags: ["React", "Tailwind CSS", "CMS"],
    result: "+180% inquiries",
  },
  {
    slug: "threadline-store",
    title: "Threadline",
    client: "Fashion e-commerce brand",
    category: "E-commerce",
    summary: "A fast, mobile-first online store with smooth checkout and simple product management.",
    image: "https://hercules-cdn.com/file_JKJchiL17MVs6POo9mKDGv8I",
    tags: ["E-commerce", "Payments", "Inventory"],
    result: "2.4x online sales",
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    client: "B2B SaaS startup",
    category: "Web Application",
    summary: "A data-rich admin dashboard that gives teams real-time revenue and order insights.",
    image: "https://hercules-cdn.com/file_TSoWhIfICaNojUOsKkaBLo83",
    tags: ["Dashboard", "Charts", "Role access"],
    result: "40% faster reporting",
  },
  {
    slug: "smilecare-booking",
    title: "SmileCare Clinic",
    client: "Dental clinic chain",
    category: "Booking System",
    summary: "Online appointment booking with live slots, reminders and a simple staff calendar.",
    image: "https://hercules-cdn.com/file_m9kI7bsIbvpDoKtwezneo5T4",
    tags: ["Booking", "Calendar", "Notifications"],
    result: "65% fewer calls",
  },
  {
    slug: "forge-fitness",
    title: "Forge Fitness",
    client: "Online fitness coach",
    category: "Landing Page",
    summary: "A high-converting landing page built to sell coaching plans and capture leads.",
    image: "https://hercules-cdn.com/file_WPNvtz4pMI9qi2W6E2B7kUUi",
    tags: ["Landing page", "Lead capture", "SEO"],
    result: "9.2% conversion",
  },
  {
    slug: "saffron-table",
    title: "Saffron Table",
    client: "Fine-dining restaurant",
    category: "Business Website",
    summary: "A warm, appetising website with menu, gallery and table reservations.",
    image: "https://hercules-cdn.com/file_XOvHed0pBtgK6AxvOsw8RXYG",
    tags: ["Website", "Reservations", "Google Maps"],
    result: "+120 bookings/month",
  },
];

/** Optimised CDN variant of an image URL for display. */
export function displayImage(url: string, width = 1200): string {
  const id = url.split("/").pop();
  return `https://hercules-cdn.com/cdn-cgi/image/w=${width},quality=82,fit=scale-down,format=auto/${id}`;
}
