import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Linkedin, Quote, Sparkles, Target, Twitter, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const founderPrinciples = [
  {
    title: 'Clear positioning before campaigns',
    desc: 'Every growth system starts with a sharper offer, a better audience definition, and a page that says why the buyer should care now.',
    icon: <Target size={22} />,
  },
  {
    title: 'Content with commercial intent',
    desc: 'Creative work is mapped to lead quality, trust, retention, and sales conversations instead of vanity reach alone.',
    icon: <Sparkles size={22} />,
  },
  {
    title: 'Operator-led delivery',
    desc: 'Strategy, media, design, and automation stay connected so the client sees one growth system, not scattered tasks.',
    icon: <Users size={22} />,
  },
];

export function FounderAbout() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-28 pb-20 md:pb-28">
        <section className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[420px] overflow-hidden rounded-lg border border-card-border bg-secondary sm:min-h-[560px]"
            >
              <img
                src="/Founder.jpg"
                alt="Haseeb, founder of Vantage Media"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/stock/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="mb-3 inline-flex rounded-lg bg-accent px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white">
                  Content Creator
                </span>
                <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
                  Haseeb
                </h1>
                <div className="mt-5 flex gap-3 text-white/75">
                  <Linkedin size={20} className="hover:text-accent transition-colors" />
                  <Twitter size={20} className="hover:text-accent transition-colors" />
                </div>
              </div>
            </motion.div>

            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Quote className="mb-6 text-accent" size={44} />
                <span className="mb-5 inline-block rounded-lg bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-accent">
                  Founder Note
                </span>
                <h2 className="mb-7 text-4xl font-black leading-none tracking-tight text-text-main sm:text-5xl md:text-7xl">
                  Growth works when content, media, and systems move together.
                </h2>
                <p className="max-w-2xl text-lg font-medium leading-relaxed text-text-muted md:text-xl">
                  Vantage Media is built for clients who need clear demand, sharper trust, and campaigns that can be measured by pipeline. We bring strategy, content, paid acquisition, SEO, and automation into one operating rhythm.
                </p>
              </motion.div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: '12+', label: 'Industries served' },
                  { value: '9', label: 'Core services' },
                  { value: '27+', label: 'Sub-service plays' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-card-border bg-secondary/40 p-5">
                    <div className="mb-2 text-3xl font-black leading-none text-accent">{stat.value}</div>
                    <div className="text-xs font-black uppercase tracking-widest text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4">
                {founderPrinciples.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-lg border border-card-border bg-white p-5 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-black text-text-main">{item.title}</h3>
                      <p className="font-medium leading-relaxed text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-lg bg-text-main px-8 py-6 font-black text-white">
                  <a href="#about">Request a Growth Audit <ArrowRight size={18} /></a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 font-bold">
                  <a href="https://calendly.com/vantage-media">Book a Strategy Call</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 pt-16 md:pt-24">
          <div className="rounded-lg bg-text-main p-7 text-white sm:p-10 md:p-14">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">How we work</span>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">A compact senior team with one job: measurable market momentum.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Message-market fit', 'Landing page clarity', 'Campaign velocity', 'Reporting discipline'].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <CheckCircle2 className="mb-4 text-accent" size={20} />
                    <div className="text-lg font-black">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
