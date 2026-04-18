import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CalendarCheck, CheckCircle2, ClipboardCheck, Globe, Layers, MessageCircle, ShieldCheck, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceItem, servicePageAddons } from '@/data/services';
import { AnimatedText } from '@/components/ui/animated-underline-text-one';
import { CircularRevealHeading } from '@/components/ui/circular-reveal-heading';
import { InfiniteTextMarquee } from '@/components/ui/infinite-text-marquee';

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
  const isSubServicePage = Boolean(selectedSubService);
  const addon = servicePageAddons[service.slug];
  const heroImage = service.heroImage ?? addon?.heroImage ?? '/stock/services/corporate-digital-marketing.jpg';
  const deliverables = service.deliverables ?? addon?.deliverables ?? [];
  const metrics = service.metrics ?? addon?.metrics ?? [];
  const platforms = service.platforms ?? addon?.platforms ?? [];
  const audience = service.audience ?? addon?.audience ?? [];
  const assets = service.assets ?? addon?.assets ?? [];
  const pageTitle = selectedSubService ? `${selectedSubService.title} Program` : service.title;
  const pageDescription = selectedSubService
    ? `${selectedSubService.desc} We shape this into a focused implementation program with messaging, assets, launch actions, and measurement built around the parent ${service.title} system.`
    : service.desc;
  const programPhases = selectedSubService
    ? [
        {
          title: `${selectedSubService.title} Strategy`,
          desc: 'Clarify the audience, offer promise, proof points, content angles, and the role this focus area plays inside the wider funnel.',
        },
        {
          title: 'Asset Production',
          desc: 'Create the page sections, campaign copy, creative prompts, lead magnets, scripts, and sales enablement pieces needed to launch.',
        },
        {
          title: 'Channel Rollout',
          desc: 'Deploy the focus area across the best-fit channels with tracking, campaign structure, follow-up rules, and handoff visibility.',
        },
        {
          title: 'Optimization Loop',
          desc: 'Review creative signals, lead quality, conversion behavior, and sales feedback so the program improves every week.',
        },
      ]
    : [];
  const revealItems = [
    {
      text: "STRATEGY",
      image: "/stock/services/corporate-digital-marketing.jpg",
    },
    {
      text: "CREATIVE",
      image: "/stock/services/social-media-marketing.jpg",
    },
    {
      text: "MEDIA",
      image: "/stock/services/ppc-services-hyderabad.jpg",
    },
    {
      text: "REPORTING",
      image: "/stock/services/seo-company-hyderabad.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:gap-16 items-center ${isSubServicePage ? 'rounded-lg bg-text-main p-5 sm:p-8 md:p-10 text-white' : ''}`}>
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-flex max-w-full items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 ${isSubServicePage ? 'bg-white/10 text-accent' : 'bg-accent/10 text-accent'}`}
              >
                {React.cloneElement(service.icon as React.ReactElement, { size: 16 })}
                {isSubServicePage ? 'Specialized Implementation Program' : 'Performance Marketing Service'}
              </motion.span>
              <AnimatedText
                text={pageTitle}
                className="items-start justify-start mb-8"
                textClassName={`text-left text-4xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight ${isSubServicePage ? 'text-white' : 'text-text-main'}`}
                underlineClassName="text-accent"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-lg sm:text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mb-8 ${isSubServicePage ? 'text-white/65' : 'text-text-muted'}`}
              >
                {pageDescription}
              </motion.p>
              <div className="flex flex-wrap gap-2 mb-8">
                {platforms.slice(0, 5).map((platform) => (
                  <span key={platform} className={`rounded-lg border px-3 py-2 text-xs font-black uppercase tracking-widest ${isSubServicePage ? 'border-white/10 bg-white/5 text-white/70' : 'border-card-border bg-secondary/60 text-text-muted'}`}>
                    {platform}
                  </span>
                ))}
              </div>
              {selectedSubService && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm font-bold text-white/75">
                  Built as one focused track inside the <span className="text-accent">{service.title}</span> growth system.
                </div>
              )}
            </div>

            <aside className={`rounded-lg border p-4 sm:p-5 ${isSubServicePage ? 'border-white/10 bg-white/5' : 'border-card-border bg-secondary/30'}`}>
              <div className={`text-[10px] font-black uppercase tracking-widest mb-4 ${isSubServicePage ? 'text-white/45' : 'text-text-muted'}`}>
                {isSubServicePage ? 'Related focus areas' : 'Choose a focus area'}
              </div>
              <div className="space-y-2">
                {service.subServices.map((subService) => (
                  <button
                    key={subService.slug}
                    onClick={() => onSubServiceNavigate(subService.slug)}
                    className={`w-full rounded-lg p-4 text-left transition-colors ${selectedSubService?.slug === subService.slug ? 'bg-accent text-white' : isSubServicePage ? 'bg-white/10 text-white hover:bg-white hover:text-text-main' : 'bg-white text-text-main hover:text-accent'}`}
                  >
                    <div className="font-black">{subService.title}</div>
                    <div className={`mt-2 text-sm font-medium leading-relaxed ${selectedSubService?.slug === subService.slug ? 'text-white/80' : isSubServicePage ? 'text-white/55 group-hover:text-text-muted' : 'text-text-muted'}`}>
                      {subService.desc}
                    </div>
                  </button>
                ))}
              </div>
            </aside>
          </div>

          {selectedSubService && (
            <section className="mt-8 md:mt-12 rounded-lg border border-card-border bg-secondary/30 p-5 sm:p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <span className="inline-flex rounded-lg bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-accent">
                    Focused Program Brief
                  </span>
                  <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-text-main sm:text-5xl">
                    A dedicated plan for {selectedSubService.title}.
                  </h2>
                  <p className="mt-5 text-lg font-medium leading-relaxed text-text-muted">
                    This page is structured for clients comparing a specific capability. It explains what gets planned, built, launched, and improved without exposing internal routing language.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {programPhases.map((phase, index) => (
                    <div key={phase.title} className="rounded-lg border border-card-border bg-white p-5">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <span className="font-mono text-sm font-black">{index + 1}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-black text-text-main">{phase.title}</h3>
                      <p className="font-medium leading-relaxed text-text-muted">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <div className="my-12 md:my-16 overflow-hidden rounded-lg border border-card-border bg-text-main">
            <InfiniteTextMarquee
              text={`${selectedSubService ? selectedSubService.title : service.title}  |  Strategy  |  Creative  |  Acquisition  |  Automation  |  Measurement`}
              link="#service-cta"
              speed={26}
              showTooltip={false}
              fontSize="clamp(2.5rem, 8vw, 6.5rem)"
              textColor="rgba(255,255,255,0.16)"
              hoverColor="#1E90FF"
            />
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 my-14 md:my-20 items-center">
            <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-card-border">
              <img
                src={heroImage}
                alt={`${service.title} marketing systems`}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/stock/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/70">Core audience</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {audience.map((item) => (
                    <span key={item} className="rounded-lg bg-white/15 px-3 py-2 text-xs font-black backdrop-blur">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-card-border bg-secondary/30 p-6 sm:p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="mx-auto lg:mx-0 shrink-0">
                  <CircularRevealHeading
                    items={revealItems}
                    size="sm"
                    centerText={
                      <div className="text-center text-sm font-black uppercase tracking-widest text-text-main">
                        Vantage<br />
                        System
                      </div>
                    }
                  />
                </div>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                    <Layers size={24} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">{isSubServicePage ? 'What this program builds' : 'What gets built'}</h2>
                  <p className="text-text-muted font-medium leading-relaxed mb-6">
                    {isSubServicePage
                      ? `We package ${selectedSubService?.title} into tangible assets, launch actions, automation rules, and reporting checkpoints your team can act on.`
                      : 'We turn the service into a working growth system: assets, campaigns, automation, and reporting that your team can understand and act on.'}
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <div key={item} className="rounded-lg bg-white p-4 border border-card-border">
                    <ClipboardCheck className="text-accent mb-3" size={18} />
                    <div className="font-black text-text-main">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 my-14 md:my-20">
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

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="rounded-lg bg-text-main p-6 sm:p-8 text-white">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent">Assets and enablement</span>
              <h2 className="text-3xl sm:text-5xl font-black mt-3 mb-7 tracking-tight">{isSubServicePage ? 'Program assets.' : 'More than campaigns.'}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {assets.map((asset) => (
                  <div key={asset} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mb-3 text-accent" size={18} />
                    <div className="font-black">{asset}</div>
                  </div>
                ))}
              </div>
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

          <div className="mt-14 md:mt-20 rounded-lg border border-card-border bg-secondary/30 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Measurement layer</span>
                <h2 className="text-3xl sm:text-5xl font-black mt-3 tracking-tight">Signals we monitor.</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {metrics.map((metric) => (
                  <div key={metric} className="rounded-lg bg-white p-5 border border-card-border">
                    <BarChart3 className="text-accent mb-4" size={20} />
                    <div className="font-black text-text-main">{metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="service-cta" className="bg-white py-16 md:py-24 overflow-hidden relative border-t border-card-border">
        <div className="absolute -right-24 -bottom-24 opacity-[0.04] pointer-events-none text-text-main">
          <Globe size={440} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
            <div>
              <span className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-accent">
                <CalendarCheck size={16} />
                Free Strategy Session
              </span>
              <h2 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-text-main">
                {isSubServicePage ? `Plan your ${selectedSubService?.title} launch in 30 days.` : `Build a 30-day action plan for ${service.title}.`}
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-text-muted">
                {isSubServicePage
                  ? `Get a practical session on the messaging, assets, campaign rollout, and reporting needed to turn ${selectedSubService?.title} into a working growth lever.`
                  : 'Get a practical consultation covering your strongest channel, first campaign angle, landing page improvements, and the metrics your team should track before scaling.'}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-lg bg-text-main hover:bg-accent text-white font-black px-8 py-7 text-lg transition-all">
                  <a href="https://calendly.com/vantage-media">Book a Strategy Call <ArrowRight size={22} /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg border-card-border bg-white text-text-main hover:bg-secondary px-8 py-7 text-lg font-black">
                  <a href="#about">Send Project Details</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-card-border bg-secondary/30 p-5 sm:p-6">
              <div className="mb-5 rounded-lg bg-white p-5 border border-card-border">
                <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">Session outcome</div>
                <div className="text-2xl font-black text-text-main">
                  A clear launch roadmap, not a generic sales pitch.
                </div>
              </div>
              <div className="grid gap-4">
              {[
                { title: 'What we review', desc: 'Current funnel, audience quality, creative assets, tracking, and conversion gaps.', icon: <ClipboardCheck /> },
                { title: 'What you receive', desc: 'A prioritized growth roadmap with recommended campaigns, assets, and reporting rhythm.', icon: <ShieldCheck /> },
                { title: 'Who joins', desc: 'Founder, marketing lead, sales owner, or anyone responsible for measurable growth.', icon: <MessageCircle /> },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-card-border bg-white p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {React.cloneElement(item.icon, { size: 22 })}
                  </div>
                  <h3 className="mb-2 text-xl font-black text-text-main">{item.title}</h3>
                  <p className="font-medium leading-relaxed text-text-muted">{item.desc}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
