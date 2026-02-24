"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ChevronRight, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12 md:py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white uppercase leading-none"
          >
            Academic <span className="text-blue-500">Foundation</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex gap-8 md:gap-12"
          >
            {/* Timeline Indicator */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-black z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
              <div className="w-px h-full bg-zinc-800" />
            </div>

            <div className="flex-1 pb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  {/* Updated Header Information */}
                  <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-2">
                    Bachelor of Engineering <span className="text-white/80 font-medium text-[20px] block md:inline mt-2 md:mt-0 md:ml-2">| Chandigarh University</span>
                  </h3>
                  <p className="text-blue-500 font-bold text-[13px] uppercase tracking-widest mb-2">
                    Computer Science & Engineering
                  </p>
                  <div className="flex items-center gap-2 text-zinc-400 text-[15px] font-medium">
                    <MapPin size={14} />
                    Punjab, India
                  </div>
                </div>

                {/* Date Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-white/6 rounded-xl text-[11px] font-bold uppercase tracking-widest text-zinc-400 w-fit h-fit">
                  <Calendar size={14} className="text-blue-500" />
                  2021 - 2025
                </div>
              </div>

              {/* Content Card with Points */}
              <div className="bg-zinc-900/40  ">
                <div className="space-y-6">
                  {/* CGPA Badge */}
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 max-w-75">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span className="text-zinc-400 font-medium uppercase text-xs tracking-widest">CGPA</span>
                    </div>
                    <span className="text-white font-black text-2xl">8.05</span>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex gap-4 text-zinc-400 leading-relaxed group">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <span>
                        Specialized in <span className="text-zinc-100 font-bold">Data Structures and Algorithms</span>, DBMS, and Operating Systems.
                      </span>
                    </li>
                    <li className="flex gap-4 text-zinc-400 leading-relaxed group">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <span>
                        Strong focus on <span className="text-zinc-100 font-bold">Object-Oriented Programming</span> and Computer Networking fundamentals.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;