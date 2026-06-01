import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "./SiteHeader";

interface Item {
  title: string;
  meta: string;
  description: string;
  image?: string;
  images?: string[];
  imageAlt?: string;
  href?: string;
}

interface TopicPageProps {
  code: string;
  title: string;
  tagline: string;
  intro: string;
  items: Item[];
}

export function TopicPage({ code, title, tagline, intro, items }: TopicPageProps) {
  return (
    <div className="min-h-screen relative">
      <div className="starfield" />
      <SiteHeader />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="fade-in">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> Return to orbit
          </Link>

          <div className="font-mono text-xs text-gold/70 tracking-[0.3em] mb-4">{code}</div>
          <h1 className="text-5xl md:text-7xl font-mono text-foreground text-glow mb-4">
            {title}
          </h1>
          <p className="font-mono text-sm text-gold uppercase tracking-widest mb-8">{tagline}</p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>
        </div>

        <div className="mt-20 grid gap-px bg-border">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="bg-background p-8 md:p-10 hover:bg-card transition-colors fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid md:grid-cols-[120px_1fr] gap-6">
                <div className="font-mono text-xs text-gold/70 tracking-widest pt-1">
                  {item.meta}
                </div>
                <div>
                  <h2 className="text-2xl font-mono text-foreground mb-3">{item.title}</h2>
                  {(() => {
                    const imgs = item.images ?? (item.image ? [item.image] : []);
                    if (imgs.length === 0) return null;
                    return (
                      <div className={`mb-4 grid gap-2 ${imgs.length > 1 ? "sm:grid-cols-2" : ""}`}>
                        {imgs.map((src, idx) => (
                          <div key={src} className="overflow-hidden border border-border bg-card">
                            <img
                              src={src}
                              alt={item.imageAlt ? `${item.imageAlt} (${idx + 1})` : item.title}
                              loading="lazy"
                              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
