import { createFileRoute } from "@tanstack/react-router";
import PagePlaceholder from "@/components/site/page-placeholder.tsx";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Wolf Digital Solution" },
      {
        name: "description",
        content:
          "Tell us about your project. Send an inquiry or chat with Wolf Digital Solution on WhatsApp.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Contact"
      title="Let's build something great"
      description="Tell us about your project and we will get back to you with a quotation."
    />
  ),
});
