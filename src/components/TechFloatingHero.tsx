import * as React from 'react';
import {
  BarChart3,
  Bot,
  Frame,
  Globe2,
  LayoutTemplate,
  Monitor,
  Rocket,
  Search,
  Settings2,
  ShoppingCart,
  Sparkles,
  Target,
} from 'lucide-react';
import {
  FloatingIconsHero,
} from '@/components/ui/floating-icons-hero-section';

const techIcons = [
  { id: 1, icon: Globe2, className: 'top-[10%] left-[5%] sm:left-[10%]' },
  { id: 2, icon: LayoutTemplate, className: 'top-[15%] right-[5%] sm:right-[10%]' },
  { id: 3, icon: Frame, className: 'bottom-[12%] left-[5%] sm:left-[10%]' },
  { id: 4, icon: Monitor, className: 'bottom-[10%] right-[5%] sm:right-[10%]' },
  { id: 5, icon: Sparkles, className: 'top-[5%] left-[50%] -translate-x-1/2' },
  { id: 6, icon: Settings2, className: 'bottom-[5%] left-[50%] -translate-x-1/2' },
  { id: 7, icon: ShoppingCart, className: 'top-[45%] left-[-2%] sm:left-[5%]' },
  { id: 8, icon: Target, className: 'top-[45%] right-[-2%] sm:right-[5%]' },
  { id: 9, icon: Search, className: 'top-[25%] left-[20%] sm:left-[25%]' },
  { id: 10, icon: Rocket, className: 'top-[25%] right-[20%] sm:right-[25%]' },
  { id: 11, icon: Bot, className: 'bottom-[25%] left-[20%] sm:left-[25%]' },
  { id: 12, icon: BarChart3, className: 'bottom-[25%] right-[20%] sm:right-[25%]' },
];

export function TechFloatingHero() {
  return (
    <div className="relative pt-10 md:pt-24 pb-4 md:pb-8 bg-white overflow-hidden border-y border-card-border">
      <div className="h-[520px] sm:h-[600px] md:h-[750px] w-full relative z-20">
        <FloatingIconsHero
          title="Digital Dominance Stack"
          subtitle="Modular scaling across every dimension. Our technical fortress built for $10M+ brands."
          ctaText="Audit Your Infrastructure"
          ctaHref="#about"
          icons={techIcons}
          className="h-full min-h-0 bg-transparent flex items-center justify-center pt-12 md:pt-20"
        />
      </div>
    </div>
  );
}
