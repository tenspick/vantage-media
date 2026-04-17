import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, PhoneCall, X } from 'lucide-react';
import { industries } from './IndustrySlug';
import { services } from '@/data/services';

export type AppView = 'main' | 'about' | 'service' | 'industry';

export function CommonNavbar({
  onNavigate,
  onIndustryNavigate,
  onServiceNavigate,
}: {
  onNavigate: (view: AppView) => void;
  onIndustryNavigate: (slug: string) => void;
  onServiceNavigate: (serviceSlug: string, subServiceSlug?: string) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between gap-3 transition-all duration-300 ${isScrolled ? 'glass-card px-4 sm:px-6 md:px-8 py-3 premium-shadow rounded-lg' : ''}`}>
          <button className="flex min-w-0 items-center gap-2 sm:gap-3 text-left" onClick={() => onNavigate('main')} aria-label="Go to home">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-text-main rounded-lg flex items-center justify-center transform rotate-3 shrink-0">
              <span className="font-display font-bold text-xl sm:text-2xl text-white">V</span>
            </div>
            <span className="font-display font-bold text-lg sm:text-2xl tracking-tighter text-text-main truncate">
              VANTAGE<span className="text-accent">MEDIA</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-text-muted hover:text-accent transition-colors py-3">
                Services <ChevronDown size={14} />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 absolute left-0 top-full w-[520px] rounded-lg border border-card-border bg-white p-4 shadow-2xl transition-all">
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <button
                      key={service.slug}
                      onClick={() => onServiceNavigate(service.slug)}
                      className="rounded-lg p-3 text-left hover:bg-secondary transition-colors"
                    >
                      <div className="text-sm font-black text-text-main">{service.title}</div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {service.subServices.slice(0, 2).map((sub) => (
                          <span key={sub.slug} className="rounded bg-accent/10 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-accent">
                            {sub.title}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-text-muted hover:text-accent transition-colors py-3">
                Industries <ChevronDown size={14} />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 absolute left-0 top-full w-[460px] rounded-lg border border-card-border bg-white p-4 shadow-2xl transition-all">
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.slug}
                      onClick={() => onIndustryNavigate(industry.slug)}
                      className="rounded-lg px-3 py-3 text-left text-sm font-bold text-text-main hover:bg-secondary hover:text-accent transition-colors"
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('about')} className="text-[10px] uppercase tracking-widest font-semibold text-text-muted hover:text-accent transition-colors">
              Founder
            </button>
            {['Process', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-widest font-semibold text-text-muted hover:text-accent transition-colors">
                {item}
              </a>
            ))}
            <a href="https://calendly.com/vantage-media" className="btn-primary rounded-lg py-2.5 px-6 text-sm">
              Book a Strategy Call <PhoneCall size={16} />
            </a>
          </div>

          <button
            className="md:hidden text-text-main h-10 w-10 rounded-lg border border-card-border bg-white/80 flex items-center justify-center shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed top-[72px] left-4 right-4 max-h-[calc(100vh-88px)] overflow-y-auto bg-white border border-card-border p-5 md:hidden glass-card rounded-lg premium-shadow"
          >
            <div className="flex flex-col gap-4">
              <button className="text-base font-bold text-text-main text-left rounded-lg px-3 py-3 hover:bg-secondary" onClick={() => { onNavigate('about'); closeMenu(); }}>
                Founder details
              </button>
              {['Services', 'Industries', 'Process', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-base font-bold text-text-main rounded-lg px-3 py-3 hover:bg-secondary" onClick={closeMenu}>
                  {item}
                </a>
              ))}

              <div className="border-t border-card-border pt-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-3 px-3">Services</div>
                <div className="grid gap-2">
                  {services.map((service) => (
                    <div key={service.slug} className="rounded-lg bg-secondary/70 p-3">
                      <button className="text-left text-sm font-black text-text-main hover:text-accent" onClick={() => { onServiceNavigate(service.slug); closeMenu(); }}>
                        {service.title}
                      </button>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {service.subServices.map((sub) => (
                          <button
                            key={sub.slug}
                            className="rounded bg-white px-2 py-1 text-[10px] font-bold text-text-muted hover:text-accent"
                            onClick={() => { onServiceNavigate(service.slug, sub.slug); closeMenu(); }}
                          >
                            {sub.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-card-border pt-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-3 px-3">Industries</div>
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.slug}
                      className="text-left text-sm font-bold rounded-lg bg-secondary/70 px-3 py-3 text-text-main hover:text-accent"
                      onClick={() => { onIndustryNavigate(industry.slug); closeMenu(); }}
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              </div>
              <a href="https://calendly.com/vantage-media" className="btn-primary w-full justify-center py-4 rounded-lg" onClick={closeMenu}>
                Book a Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
