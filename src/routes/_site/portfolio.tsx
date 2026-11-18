import { createFileRoute } from "@tanstack/react-router";
import PagePlaceholder from "@/components/site/page-placeholder.tsx";

export const Route = createFileRoute("/_site/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Wolf Digital Solution" },
      {
        name: "description",
        content:
          "Explore websites, stores and web applications designed and built by Wolf Digital Solution.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Portfolio"
      title="Selected work"
      description="A gallery of websites and web apps we have designed and built."
    />
  ),
});
