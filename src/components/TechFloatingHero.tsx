import * as React from 'react';
import {
  FloatingIconsHero,
} from '@/components/ui/floating-icons-hero-section';

const techIcons = [
  { id: 1, icon: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg', className: 'top-[10%] left-[5%] sm:left-[10%]' },
  { id: 2, icon: 'https://www.vectorlogo.zone/logos/webflow/webflow-icon.svg', className: 'top-[15%] right-[5%] sm:right-[10%]' },
  { id: 3, icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg', className: 'bottom-[12%] left-[5%] sm:left-[10%]' },
  { id: 4, icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg', className: 'bottom-[10%] right-[5%] sm:right-[10%]' },
  { id: 5, icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', className: 'top-[5%] left-[50%] -translate-x-1/2' },
  { id: 6, icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', className: 'bottom-[5%] left-[50%] -translate-x-1/2' },
  { id: 7, icon: 'https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg', className: 'top-[45%] left-[-2%] sm:left-[5%]' },
  { id: 8, icon: 'https://www.vectorlogo.zone/logos/meta/meta-icon.svg', className: 'top-[45%] right-[-2%] sm:right-[5%]' },
  { id: 9, icon: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg', className: 'top-[25%] left-[20%] sm:left-[25%]' },
  { id: 10, icon: 'https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg', className: 'top-[25%] right-[20%] sm:right-[25%]' },
  { id: 11, icon: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg', className: 'bottom-[25%] left-[20%] sm:left-[25%]' },
  { id: 12, icon: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg', className: 'bottom-[25%] right-[20%] sm:right-[25%]' },
];

export function TechFloatingHero() {
  return (
    <div className="relative pt-16 md:pt-24 pb-4 md:pb-8 bg-white overflow-hidden border-y border-card-border">
      <div className="h-[600px] md:h-[750px] w-full relative z-20">
        <FloatingIconsHero
          title="Digital Dominance Stack"
          subtitle="Modular scaling across every dimension. Our technical fortress built for $10M+ brands."
          ctaText="Audit Your Infrastructure"
          ctaHref="#about"
          icons={techIcons}
          className="h-full min-h-0 bg-transparent flex items-center justify-center pt-20"
        />
      </div>
    </div>
  );
}
