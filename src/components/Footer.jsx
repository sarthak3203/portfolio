"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Brand/Logo Section */}
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-black text-white mb-4 tracking-tighter"
            >
              SARTHAK<span className="text-blue-500">.</span>
            </motion.div>
            <p className="text-zinc-500 text-sm max-w-xs font-light leading-relaxed">
              Engineering high-performance systems and fluid user experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Legal/Copyright */}
          <div className="text-center md:text-right">
            <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              Built with Next.js & Tailwind v4
            </div>
            <div className="text-zinc-600 text-[10px] font-medium">
              © {currentYear} All Rights Reserved.
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;