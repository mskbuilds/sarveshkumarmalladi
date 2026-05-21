import { Link } from "@tanstack/react-router";
import { Cpu, Pencil, Compass } from "lucide-react";

const nodes = [
  { to: "/robotics" as const, label: "Robotics", icon: Cpu, orbit: 440, reverse: false },
  { to: "/sketches" as const, label: "Sketches", icon: Pencil, orbit: 520, reverse: true },
  { to: "/travel" as const, label: "Travel", icon: Compass, orbit: 600, reverse: false },
];

export function Planet() {
  return (
    <div className="planet-stage relative flex items-center justify-center" style={{ width: 520, height: 520 }}>
      {/* Orbits with nodes */}
      {nodes.map((n) => (
        <div
          key={n.to}
          className={`orbit ${n.reverse ? "orbit-reverse" : ""}`}
          style={{ width: n.orbit, height: n.orbit }}
        >
          <Link
            to={n.to}
            className="orbit-node group"
            aria-label={n.label}
          >
            <div className="flex flex-col items-center gap-2 -translate-y-1/2">
              <div className="w-14 h-14 rounded-full bg-card border border-gold/50 flex items-center justify-center shadow-gold-sm group-hover:scale-110 group-hover:border-gold transition-all">
                <n.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold/80 group-hover:text-gold">
                {n.label}
              </span>
            </div>
          </Link>
        </div>
      ))}

      {/* Planet rings */}
      <div className="planet-ring" style={{ width: 500, height: 500 }} />
      <div className="planet-ring" style={{ width: 540, height: 540, borderColor: "oklch(0.78 0.13 85 / 0.15)" }} />

      {/* The planet */}
      <div className="planet" />

      {/* HUD corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hud-corner border-t border-l top-0 left-0" />
        <div className="hud-corner border-t border-r top-0 right-0" />
        <div className="hud-corner border-b border-l bottom-0 left-0" />
        <div className="hud-corner border-b border-r bottom-0 right-0" />
      </div>
    </div>
  );
}
