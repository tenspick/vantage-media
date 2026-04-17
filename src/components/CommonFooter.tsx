import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { LampContainer } from '@/components/ui/lamp';
import { industries } from './IndustrySlug';
import { services } from '@/data/services';

export function CommonFooter({
  onIndustryNavigate,
  onServiceNavigate,
}: {
  onIndustryNavigate: (slug: string) => void;
  onServiceNavigate: (serviceSlug: string, subServiceSlug?: string) => void;
}) {
  return (
    <>
      <footer className="py-20 bg-secondary border-t border-card-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1.9fr]">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-text-main rounded-lg flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-white">V</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tighter text-text-main">VANTAGE<span className="text-accent italic">MEDIA</span></span>
              </div>
              <p className="text-text-muted text-lg font-medium">
                Digital scaling engineers for ambitious founders. We turn clicks into capital through high-performance infrastructure and marketing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-text-main">Services</h5>
                <ul className="space-y-3 text-text-muted font-bold text-sm">
                  {services.slice(0, 6).map((service) => (
                    <li key={service.slug}>
                      <button className="hover:text-accent transition-colors text-left" onClick={() => onServiceNavigate(service.slug)}>
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-text-main">Sub Services</h5>
                <ul className="space-y-3 text-text-muted font-bold text-sm">
                  {services.slice(0, 3).flatMap((service) => service.subServices.slice(0, 2).map((sub) => (
                    <li key={`${service.slug}-${sub.slug}`}>
                      <button className="hover:text-accent transition-colors text-left" onClick={() => onServiceNavigate(service.slug, sub.slug)}>
                        {sub.title}
                      </button>
                    </li>
                  )))}
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-text-main">Industries</h5>
                <ul className="space-y-3 text-text-muted font-bold text-sm">
                  {industries.slice(0, 6).map((industry) => (
                    <li key={industry.slug}>
                      <button className="hover:text-accent transition-colors text-left" onClick={() => onIndustryNavigate(industry.slug)}>
                        {industry.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-text-main">Connect</h5>
                <ul className="space-y-3 text-text-muted font-bold text-sm">
                  <li className="hover:text-accent cursor-pointer transition-colors">LinkedIn</li>
                  <li className="hover:text-accent cursor-pointer transition-colors">Twitter (X)</li>
                  <li className="hover:text-accent cursor-pointer transition-colors">Instagram</li>
                  <li className="hover:text-accent cursor-pointer transition-colors">Privacy</li>
                  <li className="hover:text-accent cursor-pointer transition-colors">Terms</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-muted text-xs font-bold uppercase tracking-widest italic">© 2026 Vantage Media Scaling Systems.</p>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-black text-text-main uppercase tracking-[0.3em]">Engineering Growth Worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
