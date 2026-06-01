import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/TopicPage";
import dungloeImg from "@/assets/travel-dungloe.jpg";
import pragueImg from "@/assets/travel-prague.jpg";
import murrenImg1 from "@/assets/travel-murren-1.jpg";
import murrenImg2 from "@/assets/travel-murren-2.jpg";
import norwayImg1 from "@/assets/travel-norway-1.jpg";
import norwayImg2 from "@/assets/travel-norway-2.jpg";

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
      intro="A loose log of places I've walked through, climbed on, and gotten lost in. Less itinerary, more transmission log."
      items={[
        {
          meta: "50.1N 14.4E",
          title: "Prague, Czech Republic",
          description: "Where old meets new — walking the cobbled streets felt like stepping into a medieval video-game town. The food was as memorable as the mid-century architecture. Also: my first sky dive, free-falling over Bohemian countryside.",
          image: pragueImg,
          imageAlt: "Free-falling over Prague on a first sky dive",
        },
        {
          meta: "55.0N 8.4W",
          title: "Dungloe, Ireland",
          description: "Rock climbing sea stacks and sea cliffs where the water meets the rock. Sun, wind, and the constant churn of the Atlantic — me perched on a sliver of stone above it all.",
          image: dungloeImg,
          imageAlt: "Climbing a sea cliff above the Atlantic in Dungloe, Ireland",
        },
        {
          meta: "60.4N 5.3E",
          title: "Oslo → Bergen, Norway",
          description: "The scenic route across the country — trains threading mountain passes, a funicular up the cliffside, and a ferry gliding through the silent fjords. Postcard after postcard, in real time.",
          images: [norwayImg1, norwayImg2],
          imageAlt: "Fjords on the Oslo to Bergen scenic route",
        },
        {
          meta: "46.5N 7.9E",
          title: "Mürren, Switzerland",
          description: "Via ferrata along the open face of the mountain — clipped into a steel cable with nothing but the Lauterbrunnen valley a thousand meters below. Equal parts terror and clarity.",
          images: [murrenImg1, murrenImg2],
          imageAlt: "Via ferrata on the open face above the Lauterbrunnen valley, Mürren",
        },
        {
          meta: "20.5N 75.7E",
          title: "Ajanta & Ellora Caves, India",
          description: "Human ingenuity, focus, and patience at its finest — temples and monasteries carved straight into living rock over centuries. Standing inside one, you can feel the weight of every chisel strike.",
          // image: "/travel/ajanta.jpg",
        },
      ]}
    />
  );
}
