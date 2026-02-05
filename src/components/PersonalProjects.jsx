"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Zap, 
  Github, 
  ExternalLink, 
  ArrowRight,
  Code2,
  Database
} from 'lucide-react';

const ProjectCard = ({ project, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group relative bg-zinc-900/80 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-md"
  >
    <div className="p-10">
      <div className="flex justify-between items-start mb-10">
        <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-600/20 transition-colors duration-300 text-blue-500">
          {project.icon}
        </div>
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 text-zinc-500 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <Github className="w-7 h-7" />
          </a>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <ExternalLink className="w-7 h-7" />
          </a>
        </div>
      </div>
      
      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-zinc-400 text-base mb-8 leading-relaxed font-light">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-3 mb-10">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 bg-zinc-800/50 text-zinc-400 rounded-lg border border-white/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-8 border-t border-white/5">
        <div className="flex items-center justify-between">
          <div className="text-xs text-blue-500 font-mono font-bold flex items-center gap-2 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            {project.metric}
          </div>
          
        </div>
      </div>
    </div>
  </motion.div>
);

const PersonalProjects = () => {
  const projects = [
    {
      title: "Gemini Backend Clone",
      description: "A production-ready AI chat backend engineered for speed. Implemented Redis caching layers to drastically reduce latency and BullMQ for message reliability.",
      tags: ["Node.js v20+", "Express 5", "PostgreSQL", "Redis", "BullMQ"],
      metric: "76% Faster data fetch",
      github: "#",
      link: "#",
      icon: <Terminal size={32} />
    },
    {
      title: "QuickAI - SaaS Ecosystem",
      description: "Full-stack AI SaaS platform featuring content generation and resume review. Architected with the PERN stack, utilizing Gemini API and Clerk for auth.",
      tags: ["React 19", "Gemini API", "Clerk", "Neon DB","Node.js v20+", "Express 5",],
      metric: "Enterprise Auth Flow",
      github: "#",
      link: "#",
      icon: <Zap size={32} />
    }
  ];

  return (
    <section id="projects" className="py-10 md:18 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:text-5xl text-4xl  font-black text-white mb-6 leading-none uppercase"
            >
              Featured <span className="text-blue-500">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg font-light leading-relaxed"
            >
              A selection of my recent work, focusing on architecture, system design, and the user experience.
            </motion.p>
          </div>
          <motion.a 
            href="https://github.com" 
            target="_blank"
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 text-blue-500 font-bold uppercase text-xs tracking-widest group"
          >
            See all repositories <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;