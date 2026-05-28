import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Briefcase, Code2, Rocket } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import avatarImg from "@/assets/avatar.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexus_01" },
      { name: "description", content: "Meet the builder behind Nexus_01 — robotics, AI, and creative explorations." },
      { property: "og:title", content: "About — Nexus_01" },
      { property: "og:description", content: "Meet the builder behind Nexus_01." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <div className="starfield" />
      <SiteHeader />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="fade-in">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" /> Return to orbit
          </Link>

          <div className="font-mono text-xs text-gold/70 tracking-[0.3em] mb-4">
            // SECTOR_B · ABOUT
          </div>
          <h1 className="text-5xl md:text-7xl font-mono text-foreground text-glow mb-4">
            About Me
          </h1>
          <p className="font-mono text-sm text-gold uppercase tracking-widest mb-12">
            Pilot of this observatory
          </p>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Photo */}
          <div className="fade-in" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gold/30 bg-card flex items-center justify-center overflow-hidden mx-auto md:mx-0">
                <img
                  src={avatarImg}
                  alt="Portrait of the builder behind Nexus_01"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-background border border-gold/30 px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest text-gold">
                Status: Online
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="fade-in" style={{ animationDelay: "250ms" }}>
            <h2 className="text-2xl font-mono text-foreground mb-4">
              Hello, world.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I build intelligent systems that bridge the gap between perception
              and action — from robotic arms guided by vision-language models to
              autonomous trading agents. My work sits at the intersection of
              controls, AI, and real-world deployment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I am not debugging ROS2 nodes or training PyTorch models, you will
              find me sketching ideas, traveling to collect new perspectives, or
              exploring the next frontier in agentic AI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DetailItem
                icon={<MapPin className="w-4 h-4" />}
                label="Location"
                value="Planet Earth"
              />
              <DetailItem
                icon={<Briefcase className="w-4 h-4" />}
                label="Focus"
                value="AI & Robotics"
              />
              <DetailItem
                icon={<Code2 className="w-4 h-4" />}
                label="Stack"
                value="PyTorch, ROS2, Docker"
              />
              <DetailItem
                icon={<Rocket className="w-4 h-4" />}
                label="Mission"
                value="Autonomous Agents"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 border border-border bg-card/50 rounded-lg">
      <div className="text-gold/70">{icon}</div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
          {label}
        </div>
        <div className="font-mono text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}
