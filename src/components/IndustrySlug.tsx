import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Landmark,
  Megaphone,
  ShoppingBag,
  Sparkles,
  Sun,
  Users,
  Building2,
  Factory,
  Film,
  HandHeart,
  MonitorCog,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Industry = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  icon: React.ReactNode;
  image: string;
  services: {
    title: string;
    desc: string;
    subs: string[];
  }[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    eyebrow: 'Healthcare Growth Systems',
    headline: 'Patient acquisition built around trust.',
    summary: 'Campaigns for hospitals, clinics, diagnostics, and wellness brands that turn high-intent searches into booked consultations.',
    icon: <HeartPulse />,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Patient Acquisition', desc: 'Search, local, and paid funnels for high-value treatment lines.', subs: ['Doctor profile SEO', 'Appointment landing pages', 'Call tracking'] },
      { title: 'Reputation Growth', desc: 'Build confidence across reviews, maps, social proof, and patient education.', subs: ['Review workflows', 'Patient stories', 'ORM response playbooks'] },
      { title: 'Retention Automation', desc: 'Nurture patients after enquiry, visit, and follow-up milestones.', subs: ['WhatsApp reminders', 'Email journeys', 'CRM segmentation'] },
    ],
    outcomes: ['More booked consultations', 'Lower enquiry leakage', 'Better location visibility', 'Stronger patient trust'],
  },
  {
    slug: 'education',
    name: 'Education',
    eyebrow: 'Admissions Growth Systems',
    headline: 'Enrollment pipelines for modern institutions.',
    summary: 'Lead generation and nurturing for schools, colleges, edtech, coaching centers, and professional training institutes.',
    icon: <GraduationCap />,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Admissions Campaigns', desc: 'Always-on campaigns for programs, campuses, and seasonal admission cycles.', subs: ['Google Ads', 'Meta lead ads', 'Program landing pages'] },
      { title: 'Lead Nurturing', desc: 'Move prospects from enquiry to counselling to enrollment.', subs: ['Counsellor CRM', 'Email sequences', 'WhatsApp automation'] },
      { title: 'Authority Content', desc: 'Content that gives parents and students confidence before they enquire.', subs: ['Program SEO', 'Faculty stories', 'Outcome pages'] },
    ],
    outcomes: ['Higher lead quality', 'Improved counsellor follow-up', 'Lower admission CAC', 'Better program visibility'],
  },
  {
    slug: 'it-ites',
    name: 'IT & ITES',
    eyebrow: 'B2B Demand Systems',
    headline: 'Pipeline for technology and service firms.',
    summary: 'Demand generation for SaaS, IT services, outsourcing, consulting, cybersecurity, and managed service providers.',
    icon: <MonitorCog />,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'B2B Lead Generation', desc: 'Position offers for buyers with clear problems and urgent timelines.', subs: ['LinkedIn campaigns', 'ABM lists', 'Lead magnets'] },
      { title: 'Technical SEO', desc: 'Own service, solution, and comparison searches in competitive markets.', subs: ['Solution pages', 'Schema cleanup', 'Content clusters'] },
      { title: 'Sales Enablement', desc: 'Give sales teams assets that shorten long decision cycles.', subs: ['Case studies', 'Deck messaging', 'CRM scoring'] },
    ],
    outcomes: ['More qualified demos', 'Sharper service positioning', 'Higher organic demand', 'Better sales readiness'],
  },
  {
    slug: 'ngos',
    name: 'NGOs',
    eyebrow: 'Impact Growth Systems',
    headline: 'Visibility that converts attention into action.',
    summary: 'Digital campaigns for nonprofits, foundations, CSR initiatives, and community programs that need donors, volunteers, and credibility.',
    icon: <HandHeart />,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Donor Campaigns', desc: 'Turn cause awareness into recurring donor and sponsor pipelines.', subs: ['Donation pages', 'Impact funnels', 'Retargeting'] },
      { title: 'Impact Storytelling', desc: 'Build emotional clarity through proof-led content and field stories.', subs: ['Campaign films', 'Report design', 'Social content'] },
      { title: 'Volunteer Growth', desc: 'Recruit and retain supporters with segmented outreach.', subs: ['Event campaigns', 'Email journeys', 'Community CRM'] },
    ],
    outcomes: ['More donors', 'Higher campaign trust', 'Stronger volunteer signups', 'Clearer impact reporting'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    eyebrow: 'Property Sales Systems',
    headline: 'High-intent enquiries for projects and brokers.',
    summary: 'Full-funnel marketing for residential, commercial, plotted, luxury, and leasing projects.',
    icon: <Building2 />,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Project Launch Funnels', desc: 'Create enquiry velocity for launches, site visits, and inventory movement.', subs: ['Launch ads', 'Brochure pages', 'Site visit booking'] },
      { title: 'Local Search Capture', desc: 'Win searches by location, property type, budget, and intent.', subs: ['Map SEO', 'Project SEO', 'Competitor terms'] },
      { title: 'Lead Qualification', desc: 'Route serious buyers faster and reduce wasted sales effort.', subs: ['Budget filters', 'CRM scoring', 'Call tracking'] },
    ],
    outcomes: ['More site visits', 'Cleaner enquiry quality', 'Better launch momentum', 'Lower lead wastage'],
  },
  {
    slug: 'fintech',
    name: 'Fintech',
    eyebrow: 'Trust-Led Acquisition',
    headline: 'Growth for regulated financial products.',
    summary: 'Performance marketing for lending, wealth, payments, insurance, accounting, and finance platforms.',
    icon: <Landmark />,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Compliance-Aware Campaigns', desc: 'Acquire customers while keeping claims, disclosures, and intent aligned.', subs: ['Ad review', 'Landing compliance', 'Risk messaging'] },
      { title: 'Lifecycle Automation', desc: 'Nurture applications, KYC, onboarding, activation, and retention.', subs: ['Application nudges', 'KYC journeys', 'Reactivation'] },
      { title: 'Conversion Analytics', desc: 'Find drop-offs across paid traffic, forms, approvals, and product adoption.', subs: ['Funnel dashboards', 'Event tracking', 'Cohort analysis'] },
    ],
    outcomes: ['Higher application completion', 'Lower CAC', 'Cleaner compliance posture', 'Better activation'],
  },
  {
    slug: 'manufacturers',
    name: 'Manufacturers',
    eyebrow: 'Industrial Demand Systems',
    headline: 'B2B enquiries for factories and exporters.',
    summary: 'Marketing for manufacturers, OEMs, industrial suppliers, machinery companies, and exporters.',
    icon: <Factory />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Industrial SEO', desc: 'Rank for product categories, materials, capabilities, and buyer specifications.', subs: ['Category pages', 'Technical content', 'Export SEO'] },
      { title: 'Lead Generation', desc: 'Generate RFQs from procurement teams, distributors, and enterprise buyers.', subs: ['Google Ads', 'LinkedIn outreach', 'RFQ landing pages'] },
      { title: 'Catalog Enablement', desc: 'Make product and capability pages easier for buyers to evaluate.', subs: ['Spec sheets', 'Case studies', 'Product photography'] },
    ],
    outcomes: ['More RFQs', 'Better distributor demand', 'Higher organic visibility', 'Shorter buyer evaluation'],
  },
  {
    slug: 'entertainment',
    name: 'Entertainment',
    eyebrow: 'Audience Growth Systems',
    headline: 'Hype, ticketing, and fan engagement.',
    summary: 'Campaigns for events, artists, venues, OTT, creators, music, film, and live experiences.',
    icon: <Film />,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Launch Campaigns', desc: 'Build anticipation before release, show, drop, or event day.', subs: ['Teaser funnels', 'Influencer seeding', 'Countdown ads'] },
      { title: 'Ticketing Growth', desc: 'Convert interest into booked seats, registrations, and paid access.', subs: ['Retargeting', 'Geo campaigns', 'Offer testing'] },
      { title: 'Fan Community', desc: 'Keep audiences active between moments.', subs: ['Social calendars', 'UGC prompts', 'Email drops'] },
    ],
    outcomes: ['Higher reach', 'More ticket sales', 'Better launch recall', 'Stronger fan retention'],
  },
  {
    slug: 'fashion-beauty',
    name: 'Fashion & Beauty',
    eyebrow: 'Brand Commerce Systems',
    headline: 'Desire-led growth for style and beauty brands.',
    summary: 'Content, paid media, and commerce funnels for fashion labels, salons, cosmetics, skincare, and personal care brands.',
    icon: <Sparkles />,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Social Commerce', desc: 'Create product demand through creator-style content and paid amplification.', subs: ['Reels strategy', 'Creator ads', 'UGC testing'] },
      { title: 'E-commerce Growth', desc: 'Improve discovery, conversion, repeat purchase, and AOV.', subs: ['Shopify CRO', 'Product pages', 'Retention flows'] },
      { title: 'Local Beauty Leads', desc: 'Drive appointments and walk-ins for salons, clinics, and studios.', subs: ['Google Maps', 'Offer campaigns', 'Booking funnels'] },
    ],
    outcomes: ['More purchases', 'Higher appointment volume', 'Stronger creative testing', 'Better repeat revenue'],
  },
  {
    slug: 'solar',
    name: 'Solar',
    eyebrow: 'Clean Energy Demand',
    headline: 'Solar enquiries with measurable project intent.',
    summary: 'Growth systems for rooftop solar, EPC companies, installers, component brands, and energy consultants.',
    icon: <Sun />,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Residential Solar Leads', desc: 'Capture homeowners looking for savings, subsidies, and installation quotes.', subs: ['Savings calculator', 'Google Ads', 'Local SEO'] },
      { title: 'Commercial Solar Demand', desc: 'Reach factories, offices, institutions, and commercial property owners.', subs: ['LinkedIn targeting', 'Case studies', 'ROI pages'] },
      { title: 'Quote Automation', desc: 'Qualify leads by roof type, bill value, location, and urgency.', subs: ['Lead scoring', 'CRM routing', 'Follow-up flows'] },
    ],
    outcomes: ['More quote requests', 'Cleaner qualification', 'Higher commercial pipeline', 'Faster sales response'],
  },
  {
    slug: 'e-commerce',
    name: 'E-Commerce',
    eyebrow: 'Commerce Growth Systems',
    headline: 'Traffic, conversion, and retention in one loop.',
    summary: 'Performance systems for D2C, marketplaces, Shopify stores, Amazon sellers, and subscription commerce brands.',
    icon: <ShoppingBag />,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Paid Acquisition', desc: 'Scale profitable campaigns across Meta, Google, shopping, and retargeting.', subs: ['Creative testing', 'Catalog ads', 'ROAS tracking'] },
      { title: 'Store Conversion', desc: 'Improve PDPs, checkout, bundles, and purchase confidence.', subs: ['CRO audits', 'AOV bundles', 'Checkout fixes'] },
      { title: 'Retention Revenue', desc: 'Grow repeat purchase through email, SMS, WhatsApp, and loyalty journeys.', subs: ['Klaviyo flows', 'Win-back campaigns', 'VIP segments'] },
    ],
    outcomes: ['Higher ROAS', 'Better conversion rate', 'More repeat purchases', 'Stronger AOV'],
  },
  {
    slug: 'human-resources',
    name: 'Human Resources',
    eyebrow: 'Talent Demand Systems',
    headline: 'Employer visibility and candidate pipelines.',
    summary: 'Marketing for HR consultancies, recruitment agencies, staffing firms, HR tech, payroll, and training brands.',
    icon: <Users />,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
    services: [
      { title: 'Candidate Acquisition', desc: 'Build role-specific pipelines with faster qualification and follow-up.', subs: ['Job funnels', 'LinkedIn campaigns', 'Screening forms'] },
      { title: 'Employer Branding', desc: 'Show candidates and clients why your workplace or HR solution matters.', subs: ['Culture content', 'Social proof', 'Career pages'] },
      { title: 'Client Lead Generation', desc: 'Attract companies looking for hiring, payroll, training, or HR systems.', subs: ['B2B SEO', 'Sales assets', 'Nurture sequences'] },
    ],
    outcomes: ['More qualified candidates', 'More employer leads', 'Better hiring brand', 'Lower sourcing effort'],
  },
];

export const getIndustryBySlug = (slug: string) =>
  industries.find((industry) => industry.slug === slug);

export function IndustrySlug({ industry, onBack }: { industry: Industry; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-28 pb-20">
        <section className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-6">
                {React.cloneElement(industry.icon as React.ReactElement, { size: 16 })}
                {industry.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-text-main leading-none tracking-tight mb-7">
                {industry.headline}
              </h1>
              <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-medium max-w-2xl mb-9">
                {industry.summary}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-lg bg-text-main text-white px-7 py-6 font-black">
                  <a href="#industry-services">Explore Services <ArrowRight size={18} /></a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-7 py-6 font-bold">
                  <a href="https://calendly.com/vantage-media">Book a Call</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="relative min-h-[320px] sm:min-h-[430px] overflow-hidden rounded-lg border border-card-border"
            >
              <img src={industry.image} alt={`${industry.name} marketing strategy`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/70 via-text-main/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white/70 text-[10px] uppercase tracking-widest font-black mb-2">Industry Slug</div>
                <div className="text-white text-3xl sm:text-4xl font-black tracking-tight">/{industry.slug}</div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="industry-services" className="container mx-auto px-4 sm:px-6 pt-20 md:pt-28">
          <div className="max-w-3xl mb-10">
            <span className="text-accent text-[10px] font-black uppercase tracking-widest">Custom Service Stack</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-3 mb-5 tracking-tight">Built for {industry.name}</h2>
            <p className="text-text-muted text-lg font-medium">Each page gets its own strategy, core services, and sub-services so visitors see the exact growth path for their vertical.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {industry.services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-card-border rounded-lg bg-white p-6 shadow-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-6">
                  {index === 0 ? <Megaphone size={22} /> : index === 1 ? <BarChart3 size={22} /> : <Cpu size={22} />}
                </div>
                <h3 className="text-xl font-black text-text-main mb-3">{service.title}</h3>
                <p className="text-text-muted font-medium leading-relaxed mb-6">{service.desc}</p>
                <div className="space-y-3">
                  {service.subs.map((sub) => (
                    <div key={sub} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-text-main">{sub}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 pt-20 md:pt-28">
          <div className="rounded-lg bg-text-main p-7 sm:p-10 md:p-14 text-white overflow-hidden">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <span className="text-accent text-[10px] font-black uppercase tracking-widest">Expected Outcomes</span>
                <h2 className="text-3xl sm:text-5xl font-black mt-3 leading-tight">What we optimize for.</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {industry.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <CheckCircle2 className="text-accent mb-4" size={20} />
                    <div className="font-black text-lg">{outcome}</div>
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
