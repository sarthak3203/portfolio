"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 md:py-4 border-t border-white/15 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand/Logo Section */}
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="md:text-2xl text-xl font-bold text-white mt-3 "
            >
              SARTHAK<span className="text-blue-500"></span>
            </motion.div>
            
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-[12px] font-black uppercase tracking-wide text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors hidden md:block">Contact</a>
          </div>

          {/* Legal/Copyright */}
          <div className="text-center md:text-right">
            
            <div className="text-zinc-400 text-[12px] tracking-wide font-medium">
              © {currentYear} All Rights Reserved.
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-5 md:mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;