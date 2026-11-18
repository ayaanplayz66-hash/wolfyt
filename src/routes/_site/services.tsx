import { createFileRoute } from "@tanstack/react-router";
import PagePlaceholder from "@/components/site/page-placeholder.tsx";

export const Route = createFileRoute("/_site/services")({
  head: () => ({
    meta: [
      { title: "Services | Wolf Digital Solution" },
      {
        name: "description",
        content:
          "Business websites, landing pages, e-commerce, custom web apps, admin panels, booking systems, UI/UX and custom software.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Services"
      title="Everything your business needs online"
      description="From landing pages to custom software, explore the services we offer."
    />
  ),
});
