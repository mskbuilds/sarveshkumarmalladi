import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Planet } from "@/components/Planet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus_01 — Portfolio across robotics, sketches & travel" },
      { name: "description", content: "A futuristic planetary portfolio orbiting robotics, sketches and travel." },
      { property: "og:title", content: "Nexus_01 — Portfolio" },
      { property: "og:description", content: "Navigate the planet to explore robotics, sketches and travel." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="starfield" />
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <SiteHeader />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24">
        {/* Top HUD */}
        <div className="fade-in font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-4 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          System online · Coordinates 51.5N · 0.1W
        </div>

        <h1 className="fade-in text-center text-5xl md:text-7xl font-mono text-foreground text-glow mb-3" style={{ animationDelay: "120ms" }}>
          Welcome to Nexus_01
        </h1>
        <p className="fade-in text-center text-muted-foreground max-w-xl mb-12 text-base md:text-lg" style={{ animationDelay: "200ms" }}>
          A personal observatory. Orbit the planet to explore the worlds I build, draw, and travel through.
        </p>

        <div className="fade-in" style={{ animationDelay: "300ms" }}>
          <Planet />
        </div>

        {/* Bottom HUD strip */}
        <div className="mt-12 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground fade-in" style={{ animationDelay: "500ms" }}>
          <div className="flex items-center gap-2">
            <span className="text-gold">◢</span> Lat 28.61
          </div>
          <div className="h-3 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-gold">◣</span> Long 77.20
          </div>
          <div className="h-3 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-gold">◤</span> Alt 0420 km
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>© 2026 · Nexus_01</span>
          <span className="text-gold/70">Transmission stable</span>
        </div>
      </footer>
    </div>
  );
}
