import { createFileRoute } from "@tanstack/react-router";
import PagePlaceholder from "@/components/site/page-placeholder.tsx";

export const Route = createFileRoute("/_site/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Wolf Digital Solution" },
      {
        name: "description",
        content:
          "Transparent website packages: Starter, Business and Professional. Clear features, revisions and payment terms.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Pricing"
      title="Simple, transparent packages"
      description="Starter, Business and Professional packages with clear features and payment terms."
    />
  ),
});
