"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-black py-32 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Section Heading matching the style of other components */}
          <h2 className="text-5xl md:text-7xl font-black text-white mb-12 uppercase tracking-tighter leading-none">
            About <span className="text-blue-500 italic">Me</span>
          </h2>

          <div className="space-y-8">
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed">
              I am a <span className="text-white font-medium">Full Stack Developer</span> dedicated to delivering production-grade web applications. 
              Currently based in Bengaluru, I specialize in architecting reliable systems that bridge 
              the gap between complex backend logic and high-end, interactive user interfaces.
            </p>
            

           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;