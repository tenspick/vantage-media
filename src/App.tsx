import React, { useState, useEffect, useRef } from 'react';
import { TechFloatingHero } from "./components/TechFloatingHero";
import { HeroSection03 } from "./components/ui/hero-03";
import { LampContainer } from "./components/ui/lamp";
import { 
  ArrowRight, 
  ChevronRight, 
  MessageSquare, 
  Zap, 
  Code, 
  Layers, 
  BarChart3, 
  CheckCircle2, 
  ExternalLink,
  Menu,
  X,
  PhoneCall,
  MousePointer2,
  TrendingUp,
  Database,
  Cpu,
  Globe,
  Rocket,
  Search,
  Mail,
  ShieldCheck,
  Target,
  Shapes,
  HeartPulse,
  GraduationCap,
  MonitorCog,
  HandHeart,
  Building2,
  Landmark,
  Factory,
  Film,
  Sparkles,
  Sun,
  ShoppingBag,
  Users
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { renderCanvas } from "@/components/ui/canvas";
import { Button } from "@/components/ui/button";

import { ServiceSlug } from "./components/ServiceSlug";
import { FounderAbout } from "./components/FounderAbout";
import { IndustrySlug, getIndustryBySlug, industries } from "./components/IndustrySlug";
import { CommonNavbar } from "./components/CommonNavbar";
import { CommonFooter } from "./components/CommonFooter";
import { getServiceBySlug, services } from "./data/services";

// --- Components ---

type View = 'main' | 'about' | 'service' | 'industry';

const Navbar = ({
  onNavigate,
  onIndustryNavigate,
}: {
  onNavigate: (view: View) => void;
  onIndustryNavigate: (slug: string) => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between gap-3 transition-all duration-300 ${isScrolled ? 'glass-card px-4 sm:px-6 md:px-8 py-3 premium-shadow rounded-lg' : ''}`}>
          <button className="flex min-w-0 items-center gap-2 sm:gap-3 cursor-pointer text-left" onClick={() => onNavigate('main')} aria-label="Go to home">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-text-main rounded-lg flex items-center justify-center transform rotate-3 shrink-0">
              <span className="font-display font-bold text-xl sm:text-2xl text-white">V</span>
            </div>
            <span className="font-display font-bold text-lg xs:text-xl sm:text-2xl tracking-tighter text-text-main truncate">VANTAGE<span className="text-accent">MEDIA</span></span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => onNavigate('service')} className="text-sm font-semibold text-text-muted hover:text-accent transition-colors uppercase tracking-widest text-[10px]">Service Protocol</button>
            <button onClick={() => onNavigate('about')} className="text-sm font-semibold text-text-muted hover:text-accent transition-colors uppercase tracking-widest text-[10px]">Founder</button>
            {['Industries', 'Process', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] uppercase tracking-widest font-semibold text-text-muted hover:text-accent transition-colors">
                {item}
              </a>
            ))}
            <button className="btn-primary py-2.5 px-6 text-sm">
              Book a Strategy Call <PhoneCall size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-4 right-4 max-h-[calc(100vh-88px)] overflow-y-auto bg-white border border-card-border p-5 md:hidden glass-card rounded-lg premium-shadow"
          >
            <div className="flex flex-col gap-4">
              <button 
                className="text-base font-bold text-text-main text-left rounded-lg px-3 py-3 hover:bg-secondary"
                onClick={() => { onNavigate('service'); setIsMobileMenuOpen(false); }}
              >
                Service detail
              </button>
              <button 
                className="text-base font-bold text-text-main text-left rounded-lg px-3 py-3 hover:bg-secondary"
                onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }}
              >
                Founder details
              </button>
              {['Services', 'Industries', 'Process', 'About'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-base font-bold text-text-main rounded-lg px-3 py-3 hover:bg-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="border-t border-card-border pt-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-3 px-3">Industry pages</div>
                <div className="grid grid-cols-2 gap-2">
                  {industries.slice(0, 8).map((industry) => (
                    <button
                      key={industry.slug}
                      className="text-left text-sm font-bold rounded-lg bg-secondary/70 px-3 py-3 text-text-main hover:text-accent"
                      onClick={() => { onIndustryNavigate(industry.slug); setIsMobileMenuOpen(false); }}
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              </div>
              <button className="btn-primary w-full justify-center py-4 rounded-lg">Book a Strategy Call</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero3D = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [20, -20]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-20, 20]), springConfig);
  
  const layer1X = useSpring(useTransform(mouseX, [-500, 500], [-30, 30]), springConfig);
  const layer1Y = useSpring(useTransform(mouseY, [-500, 500], [-30, 30]), springConfig);
  
  const layer2X = useSpring(useTransform(mouseX, [-500, 500], [50, -50]), springConfig);
  const layer2Y = useSpring(useTransform(mouseY, [-500, 500], [50, -50]), springConfig);

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  }

  return (
    <div 
      className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center pt-20 overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px]"
      >
        {/* Deep Background Layer */}
        <motion.div 
          style={{ x: layer1X, y: layer1Y, translateZ: -150 }}
          className="absolute inset-0 border-[2px] border-accent/10 rounded-[3rem] opacity-40"
        />

        {/* Floating Code Snippet */}
        <motion.div
          style={{ x: layer2X, y: layer1Y, translateZ: -80 }}
          className="absolute -top-20 left-0 glass-card p-4 premium-shadow border-t-4 border-t-text-main/20 w-48 hidden md:block"
        >
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/50" />
          </div>
          <div className="space-y-1">
            <div className="w-full h-1 bg-text-main/10 rounded" />
            <div className="w-3/4 h-1 bg-accent/20 rounded" />
            <div className="w-1/2 h-1 bg-text-main/10 rounded" />
          </div>
        </motion.div>

        {/* Main "Logo-inspired" Core */}
        <motion.div 
          style={{ translateZ: 50 }}
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-text-main via-text-main/90 to-accent rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(11,31,58,0.3)] flex items-center justify-center transform rotate-6 relative group overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
             <span className="text-9xl md:text-[11rem] font-display font-black text-white relative z-10 select-none tracking-tighter mix-blend-overlay opacity-30">V</span>
             <span className="text-8xl md:text-9xl font-display font-black text-white absolute z-20 select-none">V</span>
             <div className="absolute bottom-6 right-6">
                <Rocket size={40} className="text-white/30 animate-bounce" />
             </div>
          </div>
        </motion.div>

        {/* Foreground Interactive Cards */}
        <motion.div 
          style={{ x: layer1X, y: layer2Y, translateZ: 150 }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-10 -right-16 md:-top-24 md:-right-24 z-30 w-44 h-28 md:w-64 md:h-40 glass-card p-6 premium-shadow border-l-4 border-l-accent flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-accent" />
              <span className="text-[11px] font-black text-text-muted uppercase tracking-tighter">Growth Index</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center">
               <TrendingUp size={14} className="text-accent" />
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-text-main tabular-nums">+284%</div>
            <div className="text-[10px] font-bold text-accent/60 uppercase">Scalable Momentum</div>
          </div>
        </motion.div>

        <motion.div 
          style={{ x: layer2X, y: layer1Y, translateZ: 80 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-12 md:-bottom-28 -left-12 md:-left-28 z-40 w-48 h-32 md:w-72 md:h-48 glass-card p-8 premium-shadow border-r-4 border-r-text-main bg-white/90 backdrop-blur-2xl"
        >
           <div className="flex flex-col h-full justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-text-main/5 flex items-center justify-center">
                <Cpu size={20} className="text-text-main" />
              </div>
              <div>
                <span className="text-[11px] font-black text-text-muted uppercase block leading-none mb-1">Infrastructure</span>
                <span className="text-xs font-bold text-green-500">OPTIMIZED</span>
              </div>
            </div>
            
            <div className="flex gap-1.5 items-end h-16 md:h-20">
              {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.5].map((h, i) => (
                <div key={i} className="flex-1 bg-text-main/5 rounded-t-sm relative overflow-hidden">
                   <motion.div 
                    animate={{ height: [`${h * 100}%`, `${Math.random() * 100}%`, `${h * 100}%`] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-text-main/40 to-text-main/10" 
                   />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Multi-layered Orbits */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-accent/10 rounded-full pointer-events-none animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-dashed border-accent/10 rounded-full pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />
      </motion.div>
    </div>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/your-number" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform flex items-center justify-center group"
  >
    <MessageSquare fill="white" size={24} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap">
      Growth Chat
    </span>
  </a>
);

// --- Main App ---

export default function App() {
  const getInitialRoute = () => {
    const serviceMatch = window.location.pathname.match(/^\/services\/([^/]+)(?:\/([^/]+))?/);
    if (serviceMatch) {
      return {
        view: 'service' as View,
        industrySlug: 'healthcare',
        serviceSlug: serviceMatch[1],
        subServiceSlug: serviceMatch[2],
      };
    }
    const industryMatch = window.location.pathname.match(/^\/industries\/([^/]+)/);
    if (industryMatch) {
      return { view: 'industry' as View, industrySlug: industryMatch[1], serviceSlug: services[0].slug, subServiceSlug: undefined };
    }
    if (window.location.pathname === '/founder') return { view: 'about' as View, industrySlug: 'healthcare', serviceSlug: services[0].slug, subServiceSlug: undefined };
    if (window.location.pathname === '/services') return { view: 'service' as View, industrySlug: 'healthcare', serviceSlug: services[0].slug, subServiceSlug: undefined };
    return { view: 'main' as View, industrySlug: 'healthcare', serviceSlug: services[0].slug, subServiceSlug: undefined };
  };

  const initialRoute = getInitialRoute();
  const [view, setView] = useState<View>(initialRoute.view);
  const [industrySlug, setIndustrySlug] = useState(initialRoute.industrySlug);
  const [serviceSlug, setServiceSlug] = useState(initialRoute.serviceSlug);
  const [subServiceSlug, setSubServiceSlug] = useState<string | undefined>(initialRoute.subServiceSlug);

  const navigateTo = (nextView: View) => {
    setView(nextView);
    const path = nextView === 'about' ? '/founder' : nextView === 'service' ? '/services' : '/';
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateIndustry = (slug: string) => {
    setIndustrySlug(slug);
    setView('industry');
    window.history.pushState({}, '', `/industries/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateService = (slug: string, subSlug?: string) => {
    setServiceSlug(slug);
    setSubServiceSlug(subSlug);
    setView('service');
    window.history.pushState({}, '', subSlug ? `/services/${slug}/${subSlug}` : `/services/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const route = getInitialRoute();
      setView(route.view);
      setIndustrySlug(route.industrySlug);
      setServiceSlug(route.serviceSlug);
      setSubServiceSlug(route.subServiceSlug);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Small delay to ensure canvas is in DOM
    const timer = setTimeout(() => {
      renderCanvas();
    }, 100);
    return () => clearTimeout(timer);
  }, [view]);

  if (view === 'about') return <FounderAbout onBack={() => navigateTo('main')} />;
  if (view === 'service') {
    const service = getServiceBySlug(serviceSlug) ?? services[0];
    return (
      <>
        <CommonNavbar onNavigate={navigateTo} onIndustryNavigate={navigateIndustry} onServiceNavigate={navigateService} />
        <ServiceSlug
          service={service}
          subServiceSlug={subServiceSlug}
          onBack={() => navigateTo('main')}
          onSubServiceNavigate={(nextSubSlug) => navigateService(service.slug, nextSubSlug)}
        />
        <CommonFooter onIndustryNavigate={navigateIndustry} onServiceNavigate={navigateService} />
      </>
    );
  }
  if (view === 'industry') {
    const industry = getIndustryBySlug(industrySlug) ?? industries[0];
    return (
      <>
        <CommonNavbar onNavigate={navigateTo} onIndustryNavigate={navigateIndustry} onServiceNavigate={navigateService} />
        <IndustrySlug industry={industry} onBack={() => navigateTo('main')} />
        <CommonFooter onIndustryNavigate={navigateIndustry} onServiceNavigate={navigateService} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-primary selection:bg-accent/20 selection:text-text-main relative">
      <CommonNavbar onNavigate={navigateTo} onIndustryNavigate={navigateIndustry} onServiceNavigate={navigateService} />
      <WhatsAppButton />

      {/* 🚀 Hero Section - Revamped to Match Screenshot Layout */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
        {/* Interactive Canvas Background */}
        <canvas
          className="pointer-events-none absolute inset-0 mx-auto z-0 opacity-20"
          id="canvas"
        ></canvas>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-card-border bg-white px-4 py-1.5 text-xs font-semibold text-text-muted premium-shadow">
              <Shapes size={14} className="text-accent" />
              <span>Introducing Vantage 2.0.</span>
              <a href="#case-studies" className="ml-1 flex items-center gap-0.5 text-text-main hover:text-accent transition-colors font-bold">
                Explore <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Central Brackets Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-6xl mb-12"
          >
            {/* Corner Brackets */}
            <div className="absolute -left-4 -top-4 w-10 h-10 border-l-[3px] border-t-[3px] border-text-main rounded-tl-sm pointer-events-none" />
            <div className="absolute -right-4 -top-4 w-10 h-10 border-r-[3px] border-t-[3px] border-text-main rounded-tr-sm pointer-events-none" />
            <div className="absolute -left-4 -bottom-4 w-10 h-10 border-l-[3px] border-b-[3px] border-text-main rounded-bl-sm pointer-events-none" />
            <div className="absolute -right-4 -bottom-4 w-10 h-10 border-r-[3px] border-b-[3px] border-text-main rounded-br-sm pointer-events-none" />

            <div className="py-12 md:py-32 px-4 md:px-12 bg-white/50 backdrop-blur-sm [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
              <h1 className="text-4xl sm:text-6xl md:text-[112px] font-black leading-[0.95] md:leading-[0.9] tracking-tighter text-text-main mb-8 max-w-5xl mx-auto">
                Your complete platform for Growth.
              </h1>
              
              <div className="flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-sm font-bold text-green-500">Available Now for Partners</p>
              </div>
            </div>
          </motion.div>

          {/* Sub-headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl px-4"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 text-text-main">
              Welcome to our Growth Lab! We are <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Vantage Media.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-muted mb-10 leading-relaxed font-medium">
              We craft enchanting digital experiences for brands, and engineer <br className="hidden md:block" />
              high-performance growth engines to empower founders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="default" className="w-full sm:w-auto px-10 py-7 text-base md:text-lg rounded-xl font-black bg-text-main text-white hover:bg-black shadow-xl shadow-text-main/10 transition-all duration-300">
                <a href="#about">Start Project</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto px-10 py-7 text-base md:text-lg rounded-xl font-bold border-card-border hover:bg-secondary transition-all duration-300">
                <a href="https://calendly.com/vantage-media">Book a call</a>
              </Button>
            </div>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex items-center justify-center gap-6"
          >
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-secondary shadow-sm">
                    <img src={`https://picsum.photos/seed/expert${i}/100/100`} alt="Team Member" referrerPolicy="no-referrer" />
                  </div>
                ))}
             </div>
             <div className="text-left">
                <div className="text-xs font-black text-text-main uppercase tracking-widest">Growth Architects</div>
                <div className="text-[10px] text-text-muted font-bold">Scaling $10M+ Brands Monthly</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 💣 Social Proof - Logos */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-16 md:mb-20">
            <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Proof of Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-text-main tracking-tight">Brands Engineering Growth With <span className="text-accent">Vantage</span></h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 items-center justify-items-center">
            {[...Array(12).keys()].map(i => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="w-full h-28 md:h-32 bg-white rounded-lg flex items-center justify-center p-2 md:p-3 shadow-sm border border-card-border/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <img 
                  src={`/logos/logo-${i + 2}.jpeg`} 
                  alt={`Client Logo ${i + 2}`} 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Pages */}
      <section id="industries" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-6">
                Industries We Serve
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none tracking-tight mb-7">
                Custom growth pages for every vertical.
              </h2>
              <p className="text-text-muted text-lg md:text-xl leading-relaxed font-medium mb-8">
                Each industry now has a dedicated slug with services and sub-services shaped around how buyers search, compare, trust, and convert in that market.
              </p>
              <Button asChild className="rounded-lg bg-text-main text-white px-7 py-6 font-black">
                <a href="#industries-list">View All Industries</a>
              </Button>
            </div>

            <div id="industries-list" className="grid sm:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <motion.button
                  key={industry.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => navigateIndustry(industry.slug)}
                  className="group text-left rounded-lg border border-card-border bg-secondary/30 p-5 hover:bg-white hover:border-accent/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-white border border-card-border text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      {React.cloneElement(industry.icon as React.ReactElement, { size: 22 })}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-black text-text-main mb-2 group-hover:text-accent transition-colors">{industry.name}</h3>
                      <p className="text-sm text-text-muted font-medium leading-relaxed mb-4">{industry.summary}</p>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent">
                        /industries/{industry.slug}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🛠 Expanded Services Section */}
      <TechFloatingHero />
      
      <section id="services" className="py-24 md:py-48 relative overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-6">Our Protocol</span>
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
                END-TO-END <br />
                DIGITAL <span className="italic text-accent">LEVERAGE.</span>
              </h2>
              <p className="text-text-muted text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
                We don't just provide services; we install growth infrastructure. Each component is engineered to decrease acquisition cost and increase customer equity.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <motion.button
                key={service.slug}
                onClick={() => navigateService(service.slug)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group text-left p-8 md:p-10 bg-white border border-card-border rounded-lg hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-lg ${service.accent} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl md:text-2xl font-black text-text-main mb-3 md:mb-4 group-hover:text-accent transition-colors tracking-tight">{service.title}</h4>
                <p className="text-text-muted leading-relaxed font-medium mb-6 md:mb-8 text-base md:text-lg">
                  {service.desc}
                </p>
                
                <div className="mt-auto space-y-3">
                  <div className="h-px bg-secondary w-full transition-all group-hover:bg-accent/20" />
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.subServices.map((sub) => (
                      <span key={sub.slug} className="text-[10px] font-black uppercase tracking-widest text-text-muted bg-secondary/50 px-3 py-1.5 rounded-lg group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                        {sub.title}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 🛠 HeroSection03 - New High Impact Section */}
      <HeroSection03 />

      {/* 🔄 Process Section */}
      <section id="process" className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto glass-card rounded-lg p-8 sm:p-12 md:p-20 relative overflow-hidden bg-white premium-shadow">
            <div className="relative z-10">
              <span className="block text-center text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-5">Operating Framework</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-12 md:mb-16 text-center">GROWTH <span className="text-accent underline underline-offset-[12px] decoration-accent/20">OPERATING SYSTEM</span></h2>
              
              <div className="space-y-12 md:space-y-20 relative">
                {/* Vertical Line */}
                <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-secondary hidden md:block" />
                
                {[
                  { step: "01", title: "Discovery & Market Audit", desc: "We review your category, ICP, competitors, funnel data, channel economics, and current conversion path before recommending spend." },
                  { step: "02", title: "Positioning & Funnel Architecture", desc: "We define the offer, messaging hierarchy, landing experience, lead qualification model, and campaign structure for each target segment." },
                  { step: "03", title: "Channel Execution & Creative Testing", desc: "We launch paid media, SEO, content, automation, and creative experiments with weekly optimization cycles and clear ownership." },
                  { step: "04", title: "Measurement & Scale Optimization", desc: "We connect analytics, CRM signals, attribution, and reporting so CAC, ROAS, lead quality, and pipeline velocity guide scale decisions." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                    <div className="w-12 h-12 rounded-lg bg-text-main flex items-center justify-center shrink-0 z-10 shadow-lg shadow-text-main/20">
                      <span className="text-white font-mono font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-3xl font-bold mb-3 md:mb-4 text-text-main uppercase tracking-tight">{item.title}</h4>
                      <p className="text-text-muted text-lg md:text-xl leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

               <div className="mt-20 text-center">
                  <button className="btn-primary rounded-lg px-12 py-6 text-xl">
                    Deploy the Framework <ArrowRight size={24} />
                  </button>
               </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 🎯 Lead Capture Section */}
      <section id="about" className="py-24 md:py-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block text-center lg:text-left">Let's Build</span>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 leading-[0.95] text-center lg:text-left">READY TO <br /><span className="text-gradient">ACCELERATE</span>?</h2>
              <p className="text-text-muted text-lg md:text-xl mb-12 max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                We only take on 2 new partners per month to ensure absolute focus. Fill out the form to start your growth audit.
              </p>
              
              <div className="space-y-6">
                 {[
                   { label: "Direct Access", sub: "Collaborate directly with senior growth leads." },
                   { label: "Data Performance", sub: "Proprietary stack built for conversion speed." },
                   { label: "ROI Guarantee", sub: "We optimize for profit, not just pretty pixels." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1 shrink-0">
                         <CheckCircle2 size={14} className="text-accent" />
                      </div>
                      <div>
                         <div className="font-bold text-text-main leading-none mb-1">{item.label}</div>
                         <div className="text-sm text-text-muted font-medium">{item.sub}</div>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="glass-card bg-white p-10 md:p-14 premium-shadow border-t-8 border-t-accent">
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-xs font-bold text-text-main uppercase tracking-widest block mb-3">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-secondary/50 border border-card-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-text-main uppercase tracking-widest block mb-3">Work Email</label>
                      <input 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-secondary/50 border border-card-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-text-main uppercase tracking-widest block mb-3">Monthly Revenue (USD)</label>
                    <select className="w-full bg-secondary/50 border border-card-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium appearance-none cursor-pointer">
                      <option>$10k - $50k</option>
                      <option>$50k - $250k</option>
                      <option>$250k - $1M</option>
                      <option>$1M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-text-main uppercase tracking-widest block mb-3">Growth Goals</label>
                    <textarea 
                      rows={4}
                      placeholder="What are your objectives for the next 12 months?" 
                      className="w-full bg-secondary/50 border border-card-border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none font-medium"
                    />
                  </div>
                  <button className="btn-primary w-full py-6 text-xl shadow-xl shadow-accent/20">
                    Apply for Growth Audit <ArrowRight size={24} />
                  </button>
                  <div className="flex items-center justify-center gap-2 text-text-muted text-xs font-bold uppercase tracking-widest">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                     2 Slots Available for May
                  </div>
               </form>
            </div>
          </div>
        </div>
      </section>

      <CommonFooter onIndustryNavigate={navigateIndustry} onServiceNavigate={navigateService} />
    </div>
  );
}
