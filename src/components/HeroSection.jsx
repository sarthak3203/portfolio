"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-2 md:pt-8 bg-black overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-32 w-130 h-130 bg-blue-600/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 -right-32 w-130 h-130 bg-purple-600/15 rounded-full blur-[140px]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {/* Subtitle */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 text-blue-500 font-mono mb-10"
          >
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-sm md:text-lg font-bold tracking-[0.2em] uppercase">
              Fullstack Software Developer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-[110px] font-black text-white md:leading-none leading-16 tracking-normal mb-12"
          >
            Building <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-300 to-zinc-600">
              Reliable
            </span>{" "}
            <br />
            Systems.
          </motion.h1>

          {/* Actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-8"
          >
            {/* CTA */}
            <a href="#contact" className="relative z-20 md:px-5 md:py-3.5 py-2 px-4 bg-linear-to-r from-blue-400 to-blue-800 text-white text-[15px] md:text-[17px] rounded-xl tracking-widest font-bold flex items-center gap-3 hover:bg-blue-700 hover:scale-108 transition-all">
              CONTACT ME
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Download Resume */}
            <motion.a
                          href="/Sarthak_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="md:px-8 md:py-5 px-6 py-4 bg-zinc-900 border border-white/10 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-zinc-800 transition-all"
                        >
                          Download Resume
                        </motion.a>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default HeroSection;
