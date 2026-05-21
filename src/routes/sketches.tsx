import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/TopicPage";

export const Route = createFileRoute("/sketches")({
  head: () => ({
    meta: [
      { title: "Sketches — Nexus_01" },
      { name: "description", content: "Pencil and ink sketches: characters, machines, and quiet moments." },
      { property: "og:title", content: "Sketches — Nexus_01" },
      { property: "og:description", content: "Pencil and ink sketches across characters, machines, and quiet moments." },
    ],
  }),
  component: SketchesPage,
});

function SketchesPage() {
  return (
    <TopicPage
      code="// SECTOR_B · SKETCHES"
      title="Sketches"
      tagline="Lines, light & paper transmissions"
      intro="Graphite and ink are how I think slowly. A logbook of studies, characters, and the occasional architectural daydream."
      items={[
        {
          meta: "Series I",
          title: "Mechanical Anatomy",
          description: "Cross-sections of imagined robotic limbs — exploded views, tendon paths, joint pivots. Drawn as if reverse-engineering a creature.",
        },
        {
          meta: "Series II",
          title: "Strangers in Cafés",
          description: "60-second gesture studies done from the corner seat. Pen-only, no erasing, no second guesses.",
        },
        {
          meta: "Series III",
          title: "Floating Architecture",
          description: "Speculative observatories, monastery-spires, and listening posts that have no business existing. Pencil and watercolor wash.",
        },
        {
          meta: "Series IV",
          title: "Travel Pages",
          description: "Margins of my notebooks filled in the field — temples in Kyoto, doorways in Lisbon, fishing boats in Kerala.",
        },
      ]}
    />
  );
}
