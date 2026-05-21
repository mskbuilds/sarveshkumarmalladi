import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 backdrop-blur-md bg-background/40 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-mono text-sm tracking-widest text-gold">
          ◉ NEXUS_01
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <Link to="/robotics" className="text-muted-foreground hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
            Robotics
          </Link>
          <Link to="/sketches" className="text-muted-foreground hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
            Sketches
          </Link>
          <Link to="/travel" className="text-muted-foreground hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
            Travel
          </Link>
        </nav>
      </div>
    </header>
  );
}
