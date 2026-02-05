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
      className="relative min-h-screen flex items-center pt-8 bg-black overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-blue-600/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 -right-32 w-[520px] h-[520px] bg-purple-600/15 rounded-full blur-[140px]" />

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
            <span className="text-xs font-bold tracking-[0.35em] uppercase">
              Fullstack Software Developer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-[110px] font-black text-white md:leading-none leading-16 tracking-normal mb-12"
          >
            Crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
              Production
            </span>{" "}
            <br />
            Reliability.
          </motion.h1>

          {/* Actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-8"
          >
            {/* CTA */}
            <a href="#contact" className="relative z-20 md:px-5 md:py-3 py-2 px-3 bg-linear-to-r from-blue-400 to-blue-800 text-white text-[16px] md:text-[20px] rounded-xl font-bold flex items-center gap-3 hover:bg-blue-700 hover:scale-108 transition-all">
              HIRE ME
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Socials */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/sarthak3203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-blue-500 transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="www.linkedin.com/in/sarthak3203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-px h-20 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
