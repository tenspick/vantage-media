import React from 'react';
import {
  Cpu,
  Globe,
  Mail,
  Rocket,
  Search,
  Shapes,
  ShieldCheck,
  Target,
  Zap,
} from 'lucide-react';

export type ServiceItem = {
  title: string;
  slug: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  subServices: {
    title: string;
    slug: string;
    desc: string;
  }[];
};

export const services: ServiceItem[] = [
  {
    title: 'Corporate Digital Marketing',
    slug: 'corporate-digital-marketing',
    desc: 'Enterprise-grade strategies designed for market dominance and scaling.',
    icon: <Globe />,
    accent: 'bg-blue-600',
    subServices: [
      { title: 'Strategy', slug: 'strategy', desc: 'Market, audience, offer, and channel planning for measurable growth.' },
      { title: 'Growth', slug: 'growth', desc: 'Acquisition experiments, conversion systems, and scale management.' },
      { title: 'Consultation', slug: 'consultation', desc: 'Senior advisory for digital teams, founders, and internal marketing leads.' },
    ],
  },
  {
    title: 'SEO Company in Hyderabad',
    slug: 'seo-company-hyderabad',
    desc: 'Dominating local and national search rankings with technical precision and authority.',
    icon: <Search />,
    accent: 'bg-emerald-600',
    subServices: [
      { title: 'Technical Audit', slug: 'technical-audit', desc: 'Site architecture, indexation, page speed, schema, and crawl health.' },
      { title: 'Local Search Dominance', slug: 'local-search-dominance', desc: 'Maps, location pages, reviews, and city-level organic visibility.' },
      { title: 'Authority Building', slug: 'authority-building', desc: 'Content clusters, digital PR, and trust signals for competitive ranking.' },
    ],
  },
  {
    title: 'PPC Services in Hyderabad',
    slug: 'ppc-services-hyderabad',
    desc: 'High-velocity paid acquisition across Google and Meta using performance intelligence.',
    icon: <Target />,
    accent: 'bg-red-600',
    subServices: [
      { title: 'Google Search & Display', slug: 'google-search-display', desc: 'Intent-led campaigns across search, display, remarketing, and YouTube.' },
      { title: 'Meta Scaling', slug: 'meta-scaling', desc: 'Audience testing, creative iteration, and budget scaling for Meta campaigns.' },
      { title: 'Performance Creative', slug: 'performance-creative', desc: 'Ad concepts, hooks, landing alignment, and creative testing cadence.' },
    ],
  },
  {
    title: 'Lead Generation',
    slug: 'lead-generation',
    desc: 'High-quality B2B and B2C lead acquisition systems built for conversion speed.',
    icon: <Zap />,
    accent: 'bg-orange-600',
    subServices: [
      { title: 'B2B Acquisition', slug: 'b2b-acquisition', desc: 'Campaigns for qualified enquiries, demos, RFQs, and sales conversations.' },
      { title: 'Conversion Optimization', slug: 'conversion-optimization', desc: 'Forms, landing pages, lead magnets, and tracking built to reduce drop-off.' },
      { title: 'High-Intent Prospecting', slug: 'high-intent-prospecting', desc: 'Search and audience strategies focused on buyers already in-market.' },
    ],
  },
  {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    desc: 'Scaling brand authority and community engagement through viral narrative design.',
    icon: <Shapes />,
    accent: 'bg-pink-600',
    subServices: [
      { title: 'Brand Storytelling', slug: 'brand-storytelling', desc: 'Narratives, content pillars, and social proof that make the brand memorable.' },
      { title: 'Viral Campaign Design', slug: 'viral-campaign-design', desc: 'Campaign concepts, reels, hooks, and creator-style execution.' },
      { title: 'Community Management', slug: 'community-management', desc: 'Publishing, engagement, response systems, and community growth routines.' },
    ],
  },
  {
    title: 'Online Reputation Management',
    slug: 'online-reputation-management',
    desc: "Protecting and elevating your brand's digital sentiment through strategic PR.",
    icon: <ShieldCheck />,
    accent: 'bg-indigo-600',
    subServices: [
      { title: 'Sentiment Audit', slug: 'sentiment-audit', desc: 'Map reviews, search results, mentions, and perception risks.' },
      { title: 'Strategic PR', slug: 'strategic-pr', desc: 'Earned visibility, authority placements, and credibility assets.' },
      { title: 'Authority Shielding', slug: 'authority-shielding', desc: 'Positive search assets and review systems that protect brand trust.' },
    ],
  },
  {
    title: 'Marketing Automation',
    slug: 'marketing-automation',
    desc: 'Installing automated growth engines that decrease friction and increase customer LTV.',
    icon: <Cpu />,
    accent: 'bg-violet-600',
    subServices: [
      { title: 'HubSpot/Salesforce Tuning', slug: 'hubspot-salesforce-tuning', desc: 'CRM stages, lead routing, fields, scoring, and team visibility.' },
      { title: 'Automated Nurture Flows', slug: 'automated-nurture-flows', desc: 'Email, WhatsApp, and lifecycle sequences for every buyer stage.' },
      { title: 'CRM Intelligence', slug: 'crm-intelligence', desc: 'Dashboards, alerts, attribution, and pipeline reporting.' },
    ],
  },
  {
    title: 'Google Ads Services',
    slug: 'google-ads-services',
    desc: 'Precision-targeted search and display campaigns engineered for maximum ROI.',
    icon: <Rocket />,
    accent: 'bg-sky-600',
    subServices: [
      { title: 'Search Dominance', slug: 'search-dominance', desc: 'Keyword, match type, and bidding structures built around commercial intent.' },
      { title: 'Re-marketing Loops', slug: 'remarketing-loops', desc: 'Audience recapture across search, display, YouTube, and conversion windows.' },
      { title: 'Shopping Ads', slug: 'shopping-ads', desc: 'Feed optimization, product segmentation, and performance-led shopping campaigns.' },
    ],
  },
  {
    title: 'E-mail Marketing',
    slug: 'email-marketing',
    desc: 'Retention systems and high-conversion newsletters that turn leads into loyalists.',
    icon: <Mail />,
    accent: 'bg-cyan-600',
    subServices: [
      { title: 'Advanced Segmentation', slug: 'advanced-segmentation', desc: 'Behavior, source, purchase, and lifecycle-based audience grouping.' },
      { title: 'Conversion Newsletters', slug: 'conversion-newsletters', desc: 'Campaigns that educate, sell, and retain without feeling generic.' },
      { title: 'Automated Drips', slug: 'automated-drips', desc: 'Welcome, nurture, reactivation, win-back, and post-purchase flows.' },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getSubServiceBySlug = (serviceSlug: string, subServiceSlug?: string) =>
  getServiceBySlug(serviceSlug)?.subServices.find((subService) => subService.slug === subServiceSlug);
