"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Globe, 
  Zap,
  Layers,
  ShieldCheck
} from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all group"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white uppercase tracking-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["ReactJS (v19)", "Next.js", "Tailwind CSS (v4)", "GSAP (v3)", "Framer Motion", "HTML5/CSS3"],
      delay: 0.1
    },
    {
      title: "Backend",
      icon: Terminal,
      skills: ["Node.js (v22)", "Express.js (v5)", "RESTful APIs", "JWT", "BullMQ", "Rate Limiting"],
      delay: 0.2
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Neon DB", "Prisma ORM"],
      delay: 0.3
    },
    {
      title: "Core CS",
      icon: Cpu,
      skills: ["DSA", "System Design", "Operating Systems", "Networking", "OOP", "C++ (v23)"],
      delay: 0.4
    }
  ];

  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-white mb-6 uppercase tracking-tighter"
            >
              Technical <span className="text-blue-500">Stack</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 text-lg font-light leading-relaxed"
            >
              My expertise spans across the full development lifecycle, from architecting scalable 
              backends to crafting high-performance, fluid user interfaces.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4 text-xs font-mono text-blue-500 font-bold uppercase tracking-[0.2em]"
          >
            <Zap size={16} className="animate-pulse" />
            Optimized for Production
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillData.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        {/* Tools Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Workflow Tools:</span>
          <div className="flex items-center gap-2 text-white font-mono text-sm"><Layers size={18} /> VS Code</div>
          <div className="flex items-center gap-2 text-white font-mono text-sm"><ShieldCheck size={18} /> Postman</div>
          <div className="flex items-center gap-2 text-white font-mono text-sm"><Code2 size={18} /> Git/GitHub</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;