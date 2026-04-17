import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, Globe, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceItem } from '@/data/services';

export function ServiceSlug({
  service,
  subServiceSlug,
  onBack,
  onSubServiceNavigate,
}: {
  service: ServiceItem;
  subServiceSlug?: string;
  onBack: () => void;
  onSubServiceNavigate: (subServiceSlug: string) => void;
}) {
  const selectedSubService = service.subServices.find((subService) => subService.slug === subServiceSlug);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-16 items-start">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-8"
              >
                {React.cloneElement(service.icon as React.ReactElement, { size: 16 })}
                /services/{service.slug}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-7xl font-black text-text-main leading-none tracking-tight mb-8"
              >
                {selectedSubService ? selectedSubService.title : service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-text-muted leading-relaxed font-medium max-w-2xl mb-10"
              >
                {selectedSubService ? selectedSubService.desc : service.desc}
              </motion.p>
              {selectedSubService && (
                <div className="rounded-lg border border-card-border bg-secondary/50 p-5 text-sm font-bold text-text-main">
                  Parent service: <span className="text-accent">{service.title}</span>
                </div>
              )}
            </div>

            <aside className="rounded-lg border border-card-border bg-secondary/30 p-5 lg:sticky lg:top-28">
              <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-4">Sub-service slugs</div>
              <div className="space-y-2">
                {service.subServices.map((subService) => (
                  <button
                    key={subService.slug}
                    onClick={() => onSubServiceNavigate(subService.slug)}
                    className={`w-full rounded-lg p-4 text-left transition-colors ${selectedSubService?.slug === subService.slug ? 'bg-accent text-white' : 'bg-white text-text-main hover:text-accent'}`}
                  >
                    <div className="font-black">{subService.title}</div>
                    <div className={`mt-1 text-xs font-bold ${selectedSubService?.slug === subService.slug ? 'text-white/75' : 'text-text-muted'}`}>
                      /services/{service.slug}/{subService.slug}
                    </div>
                  </button>
                ))}
              </div>
            </aside>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 my-20 md:my-28">
            {[
              { title: 'Acquisition Strategy', desc: 'Define the offer, audience, channel mix, and conversion target before spend scales.', icon: <Target className="text-accent" /> },
              { title: 'Execution System', desc: 'Launch campaigns, landing pages, analytics, and creative testing with disciplined weekly cycles.', icon: <Zap className="text-accent" /> },
              { title: 'Scale Measurement', desc: 'Use attribution, CRM signals, and funnel dashboards to improve CAC, ROAS, and pipeline quality.', icon: <BarChart3 className="text-accent" /> },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="p-7 border border-card-border rounded-lg bg-secondary/20"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative min-h-[330px] overflow-hidden rounded-lg border border-card-border">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
                alt={`${service.title} marketing systems`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tight">
                Service Delivery <span className="text-accent">Framework</span>
              </h2>
              <div className="space-y-6">
                {[
                  'Market and competitor diagnostics',
                  'Landing page and conversion architecture',
                  'Campaign setup and tracking implementation',
                  'Creative testing and media optimization',
                  'Weekly performance reporting and scale decisions',
                ].map((item) => (
                  <div key={item} className="flex gap-4">
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                    <span className="text-base sm:text-lg font-bold text-text-main uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-text-main py-20 md:py-24 text-white overflow-hidden relative">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Globe size={360} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-10 tracking-tight uppercase leading-none">
            Request a <br />
            <span className="text-accent italic">Growth Audit</span>
          </h2>
          <Button asChild size="lg" className="rounded-lg bg-accent hover:bg-white hover:text-accent text-white font-black px-10 py-8 text-xl transition-all">
            <a href="https://calendly.com/vantage-media">Sync with our team <ArrowRight size={22} /></a>
          </Button>
        </div>
      </section>
    </div>
  );
}
