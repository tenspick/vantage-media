import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Twitter, Linkedin, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FounderAbout({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#0B1F3A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-[#0B1F3A]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center text-white">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-accent transition-colors">
            <ArrowLeft size={16} /> Hub
          </button>
          <div className="text-xl font-black italic tracking-tighter">vantage.media</div>
          <div className="flex gap-6">
            <Linkedin size={18} className="hover:text-accent cursor-pointer" />
            <Twitter size={18} className="hover:text-accent cursor-pointer" />
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] group"
            >
              <div className="absolute -inset-4 border border-white/10 rounded-[4rem] group-hover:border-accent/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Founder" 
                className="w-full h-full object-cover rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-12 left-12 z-20">
                <span className="text-accent text-xs font-black uppercase tracking-[0.5em] block mb-2">Systems Architect</span>
                <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase">ARJUN <br /> REDDY</h1>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <Quote className="text-accent mb-6" size={48} />
                <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-8">
                  WE DON'T BUILD COMPANIES. <br />
                  <span className="text-accent italic">WE ENGINEER SCALE UNTIL IT BREAKS THE MARKET.</span>
                </h2>
              </motion.div>

              <div className="space-y-10">
                <p className="text-white/60 text-xl leading-relaxed font-medium">
                  At Vantage Media, we've moved past the "traditional agency" model. My obsession has always been with the technical leverage that exists between a superior product and a high-performance acquisition engine. 
                </p>
                <p className="text-white/60 text-xl leading-relaxed font-medium transition-opacity hover:opacity-100">
                  Based in Hyderabad's tech hub, we've spent a decade refining the protocol for zero-friction growth. Every founder has a limit—we exist to calculate that limit and then push it by $10M+.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-12">
                 <div>
                    <div className="text-accent font-black text-4xl mb-2 tracking-tighter leading-none">12+</div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Scalable Verticals</div>
                 </div>
                 <div>
                    <div className="text-accent font-black text-4xl mb-2 tracking-tighter leading-none">$140M+</div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Client Rev Managed</div>
                 </div>
              </div>

              <div className="mt-20">
                <Button className="rounded-full bg-white text-[#0B1F3A] font-black uppercase tracking-widest px-10 py-8 hover:bg-accent hover:text-white transition-all">
                  Request Private Briefing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 opacity-40">
        <div className="container mx-auto px-6 text-center">
            <span className="text-white text-xs font-bold uppercase tracking-[0.5em]">Vantage Media © 2026 Systems Architecture</span>
        </div>
      </footer>
    </div>
  );
}
