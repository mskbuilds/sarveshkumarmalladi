import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/TopicPage";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel — Nexus_01" },
      { name: "description", content: "Field notes from across the planet — coordinates, encounters, and altitudes." },
      { property: "og:title", content: "Travel — Nexus_01" },
      { property: "og:description", content: "Field notes from across the planet." },
    ],
  }),
  component: TravelPage,
});

function TravelPage() {
  return (
    <TopicPage
      code="// SECTOR_C · TRAVEL"
      title="Travel"
      tagline="Coordinates, encounters & altitudes"
      intro="A loose log of places I've walked through, slept in, and gotten lost in. Less itinerary, more transmission log."
      items={[
        {
          meta: "35.0N 135.7E",
          title: "Kyoto, Japan",
          description: "Two weeks of temple-hopping at dawn, ramen at midnight, and rented bicycles along the Kamo river. Bought a brush pen I still use.",
        },
        {
          meta: "27.9N 86.9E",
          title: "Everest Base Camp",
          description: "Twelve-day trek through Tengboche and Lobuche. Lessons learned: pack lighter than you think, drink more than you want.",
        },
        {
          meta: "38.7N 9.1W",
          title: "Lisbon, Portugal",
          description: "Tiled façades, custard tarts, and the slow rattle of the 28 tram. Sketched doorways until my fingers cramped.",
        },
        {
          meta: "13.0N 80.2E",
          title: "Coastal Tamil Nadu",
          description: "Motorbike loop along the Coromandel coast — fishing villages, abandoned French mansions, and the loudest thunderstorms I've ever heard.",
        },
      ]}
    />
  );
}
