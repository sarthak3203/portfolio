"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-black py-4 md:py-8 border-b border-white/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Section Heading matching the style of other components */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 md:mb-10 uppercase leading-none">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="space-y-8">
            <p className="text-zinc-400 text-[16px] md:text-[20px] font-normal leading-relaxed">
              I’m a Full Stack Developer with a strong backend focus, currently working at Lebeda Marcom and Creative Studio. I build production-grade web applications in fast-paced startup environments, working across Next.js, React.js, and Node.js. I have hands-on experience designing scalable backend systems, working with relational and NoSQL databases, caching layers, and real-world APIs. I care deeply about building reliable services and writing clean, maintainable code that scales.
            </p>
            

           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;