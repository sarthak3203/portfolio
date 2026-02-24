"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Zap,
  Github,
  ExternalLink,
  ArrowRight,
  Circle,
  Calendar,
} from "lucide-react";

const PersonalProjects = () => {
  const projects = [
    {
      title: "Gemini Backend Clone",
      period: "Sep 2025", // Added period
      description: [
        {
          point:
            "Engineered a scalable AI chat backend using Node.js (Express 5), PostgreSQL, and Redis, reducing repeated /chatroom response times from ~723ms to ~170ms through strategic caching.",
        },
        {
          point:
            "Implemented BullMQ workers for asynchronous message processing, integrated OTP + JWT-based authentication, and enforced rate limiting to deliver secure, production-ready APIs.",
        },
      ],
      tags: ["Node.js v20+", "Express 5", "PostgreSQL", "Redis", "BullMQ"],
      github: "https://github.com/sarthak3203/gemini-backend-clone",
      link: "#",
      icon: <Terminal size={20} />,
    },
    {
      title: "QuickAI - SaaS Ecosystem",
      period: "Aug 2025 - Sep 2025", // Added period
      description: [
        {
          point:
            "Architected and developed a full-stack AI SaaS platform using the PERN stack, integrating AI services, authentication workflows, and cloud-based media handling for scalable user operations.",
        },
        {
          point:
            "Built secure file upload pipelines with Multer, managed persistent storage using Neon DB, and deployed a production-ready application with optimized backend performance.",
        },
      ],
      tags: [
        "React 19",
        "Gemini API",
        "Clerk",
        "Neon DB",
        "Node.js v20+",
        "Express 5",
      ],
      github: "https://github.com/sarthak3203/AI-Saas-app",
      link: "https://ai-saas-app-woad.vercel.app/",
      icon: <Zap size={20} />,
    },
  ];

  return (
    <section id="projects" className="py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Stacked & Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white uppercase leading-none"
            >
              Featured <br />
              <span className="text-blue-500">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg font-light mt-6 max-w-xl leading-relaxed"
            >
              A selection of my recent work, focusing on architecture, system
              design, and the user experience.
            </motion.p>
          </div>

          <motion.a
            href="https://github.com/sarthak3203?tab=repositories"
            target="_blank"
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 text-blue-500 font-bold uppercase text-xs tracking-widest group"
          >
            See all repositories <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Vertical Timeline for Projects */}
        <div className="relative border-l border-zinc-600 ml-2 md:ml-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 ml-8 md:ml-12 relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] md:-left-[56.5px] top-0">
                <div className="h-4 w-4 rounded-full bg-zinc-950 border-2 border-blue-500 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </div>
              </div>

              {/* Project Header Row */}
              <div className="flex flex-col md:flex-col md:items-start justify-between gap-6 mb-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-zinc-900 border border-white/10 rounded-xl text-blue-500 shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                      {project.title}
                    </h3>

                    {/* Period Badge - Matches Experience Styling */}
                    <div className="mt-5 flex items-start -ml-15.5 gap-2 text-zinc-400 font-mono text-[15px] border border-zinc-600/30 px-4 py-1.5 rounded-xl bg-zinc-600/30 w-fit">
                      <Calendar size={16} className="text-blue-500" />
                      {project.period}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* Github Link with Tooltip */}
                  <a
                    href={project.github}
                    className="group relative p-2.5 bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-blue-500/50 rounded-lg transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                      Github Repo
                      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-blue-600" />
                    </span>
                  </a>

                  {/* Live Link with Tooltip */}
                  <a
                    href={project.link}
                    className="group relative p-2.5 bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-blue-500/50 rounded-lg transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                      Live Link
                      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-blue-600" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Description & Tags */}
              <div className="max-w-4xl mt-6">
                <div className="flex flex-col gap-4 text-zinc-400 mb-8 leading-relaxed">
                  {project.description.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-2.5 shrink-0">
                        <Circle
                          size={6}
                          className="fill-blue-600 text-blue-600"
                        />
                      </div>
                      <p className="text-base md:text-lg">
                        {item.point
                          .split(
                            /(Node\.js|Express 5|PostgreSQL|Redis|BullMQ|PERN stack|Neon DB|Clerk|Gemini API|JWT|Multer)/g,
                          )
                          .map((part, index) =>
                            [
                              "Node.js",
                              "Express 5",
                              "PostgreSQL",
                              "Redis",
                              "BullMQ",
                              "PERN stack",
                              "Neon DB",
                              "Clerk",
                              "Gemini API",
                              "JWT",
                              "Multer",
                            ].includes(part) ? (
                              <span
                                key={index}
                                className="text-zinc-100 font-bold"
                              >
                                {part}
                              </span>
                            ) : (
                              part
                            ),
                          )}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 bg-zinc-900 text-zinc-400 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
