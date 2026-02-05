"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-8 md:py-12 bg-zinc-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                  <div className="max-w-xl">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="text-4xl sm:ml-3 md:ml-0  md:text-5xl font-black text-white mb-4 md:mb-6 uppercase leading-none"
                    >
                      Professional <span className="text-blue-500">Journey</span>
                    </motion.h2>
                  
                  </div>
                </div>

        
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col md:flex-row gap-8 relative"
          >
            {/* Timeline Info */}
            <div className="md:w-1/3 pt-2">
              <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest mb-3">
                <Calendar size={14} />
                Nov 2025 - Present
              </div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Lebeda Marcom</h3>
              <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                <MapPin size={14} />
                Bengaluru, India
              </div>
            </div>
            
            {/* Content Card */}
            <div className="md:w-2/3 bg-white/5 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-500 shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Web Developer</h4>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">Creative Studio & Agency</p>
                </div>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4 text-zinc-400 font-light leading-relaxed group/item">
                  <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                  <span>
                    End-to-end development of client websites for a <span className="text-white font-medium">cybersecurity marketing agency</span>, ensuring high conversion and premium branding.
                  </span>
                </li>
                <li className="flex gap-4 text-zinc-400 font-light leading-relaxed group/item">
                  <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                  <span>
                    Building responsive UIs with <span className="text-white font-medium">React (v19)</span> and <span className="text-white font-medium">Tailwind CSS (v4)</span>, utilizing <span className="text-white font-medium">GSAP (v3)</span> for high-end interactive animations.
                  </span>
                </li>
                <li className="flex gap-4 text-zinc-400 font-light leading-relaxed group/item">
                  <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                  <span>
                    Architected <span className="text-white font-medium">Node.js (v22)</span> backend workflows including booking approval systems, automated notifications, and MongoDB-Google Sheets synchronization.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;