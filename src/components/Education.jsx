"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ChevronRight, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-6 md:py-12 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 uppercase leading-none"
            >
              Academic <span className="text-blue-500">Foundation</span>
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
            {/* Timeline/School Info */}
            <div className="md:w-1/3 pt-2">
              <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase tracking-widest mb-3">
                <Calendar size={14} />
                2021 - 2025
              </div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Chandigarh University</h3>
              <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                <MapPin size={14} />
                Punjab, India
              </div>
            </div>
            
            {/* Content Card */}
            <div className="md:w-2/3 bg-zinc-900/60 border border-white/15 rounded-3xl p-8 md:p-12 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-zinc-800 rounded-2xl text-blue-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Bachelor of Engineering</h4>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">Computer Science & Engineering</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-zinc-300 font-medium">CGPA</span>
                  </div>
                  <span className="text-white font-black text-xl">8.05</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-4 text-zinc-400 font-light leading-relaxed group/item">
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                    <span>Specialized in <span className="text-white font-medium">Data Structures and Algorithms</span>, DBMS, and Operating Systems.</span>
                  </li>
                  <li className="flex gap-4 text-zinc-400 font-light leading-relaxed group/item">
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                    <span>Strong focus on <span className="text-white font-medium">Object-Oriented Programming</span> and Computer Networking fundamentals.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;