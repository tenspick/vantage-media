import { ArrowRight, CheckCircle2, Globe2, Heart, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const proofPoints = [
  "Performance creative",
  "Search capture",
  "Automation",
  "Conversion design",
];

const serviceSignals = [
  { label: "Audience", value: "12 verticals" },
  { label: "Location", value: "Hyderabad" },
  { label: "Focus", value: "Revenue" },
];

export function HeroSection03() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#0B1F3A_1px,_transparent_1px)] opacity-[0.03] [background-size:24px_24px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-accent">
              <Sparkles size={15} />
              Growth Lab
            </span>

            <h2 className="max-w-4xl text-4xl font-black leading-none tracking-tight text-text-main sm:text-5xl md:text-7xl">
              Digital products, campaigns, and conversion systems in one growth team.
            </h2>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-text-muted md:text-xl">
              We partner with founders to build the digital presence, paid acquisition, search visibility, and automated follow-up needed to turn demand into measurable revenue.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#about" className="btn-primary rounded-lg px-7 py-4">
                Start Growth Audit <ArrowRight size={18} />
              </a>
              <a href="#industries" className="btn-secondary rounded-lg px-7 py-4">
                See Industries
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {proofPoints.map((point) => (
                <div key={point} className="rounded-lg border border-card-border bg-secondary/60 p-4">
                  <CheckCircle2 className="mb-3 text-accent" size={18} />
                  <div className="text-sm font-black leading-tight text-text-main">{point}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative"
          >
            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-card-border bg-secondary">
              <img
                src="/stock/hero/growth-team.jpg"
                alt="Growth team planning digital campaigns"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/stock/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/80 via-text-main/20 to-transparent" />

              <div className="absolute left-5 right-5 top-5 grid grid-cols-3 gap-2">
                {serviceSignals.map((signal) => (
                  <div key={signal.label} className="rounded-lg border border-white/20 bg-white/85 p-3 backdrop-blur">
                    <div className="text-[9px] font-black uppercase tracking-widest text-text-muted">{signal.label}</div>
                    <div className="mt-1 text-sm font-black text-text-main">{signal.value}</div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/15 bg-white/90 p-5 backdrop-blur">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-accent">Market Presence</div>
                    <div className="mt-1 text-2xl font-black leading-none text-text-main">Built to be found, trusted, and chosen.</div>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-white sm:flex">
                    <Globe2 size={24} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-secondary p-3">
                    <MessageCircle className="mb-2 text-accent" size={18} />
                    <div className="text-xs font-black uppercase tracking-widest text-text-main">Lead flow</div>
                  </div>
                  <div className="rounded-lg bg-secondary p-3">
                    <Heart className="mb-2 text-accent" size={18} />
                    <div className="text-xs font-black uppercase tracking-widest text-text-main">Brand trust</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
