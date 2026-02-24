"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Circle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Lebeda Marcom and Creative Studio LLP",
      location: "Bengaluru, India (Onsite)",
      period: "Nov 2025 - Present",
      role: "Web Developer",
      description: [
        "Architect and maintain scalable backend systems using Node.js (v22) and Express.js, leveraging strong JavaScript (ES6+) expertise to design RESTful APIs and modular business logic layers that handle booking approvals, limited-slot allocation, user onboarding, validation, and automated email notification workflows in production environments.",
        "Engineered reliable data persistence and synchronization pipelines with MongoDB, integrating application data with external systems (Google Sheets) to support reporting, operational tracking, and production reliability.",
        "Built responsive user interfaces using Next.js(v16), React(v19), and Tailwind CSS(v4), ensuring seamless API integration, efficient state handling, and optimized performance across devices.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-6 md:py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stacked Heading - Left Aligned */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white uppercase leading-none"
          >
            Professional
            <br />
            <span className="text-blue-500">Journey</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-600  ml-2 md:ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 ml-8 md:ml-12 relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] md:-left-[56.5px] top-0">
                <div className="h-4 w-4 rounded-full bg-zinc-950 border-2 border-blue-500 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                </div>
              </div>

              {/* Role & Date Row */}
              <div className="flex flex-col md:flex-col md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-lg">
                    <span className="text-blue-500 font-semibold">
                      {exp.company}
                    </span>
                    <span className="text-zinc-700">/</span>
                    <span className="text-zinc-400 flex items-center gap-1.5 text-[15px]">
                      <MapPin size={15} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-zinc-400 font-mono text-[15px] border border-zinc-600/30 px-4 py-1.5 rounded-full bg-zinc-600/30 w-fit">
                  <Calendar size={16} className="text-blue-500" />
                  {exp.period}
                </div>
              </div>

              {/* Content Area */}
              <div className="max-w-4xl">
                <ul className="space-y-5">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-zinc-400 leading-relaxed group"
                    >
                      <div className="mt-2.5">
                        <Circle
                          size={6}
                          className="fill-blue-600 text-blue-600 group-hover:scale-125 transition-transform"
                        />
                      </div>
                      <span className="text-base md:text-lg">
                        {item
                          .split(
                            /(Node\.js \(v22\)|Express\.js|JavaScript \(ES6\+\)|MongoDB|Next\.js\(v16\)|React\(v19\)|Tailwind CSS\(v4\)|Google Sheets|RESTful APIs)/g,
                          )
                          .map((part, j) =>
                            [
                              "Node.js (v22)",
                              "Express.js",
                              "JavaScript (ES6+)",
                              "MongoDB",
                              "Next.js(v16)",
                              "React(v19)",
                              "Tailwind CSS(v4)",
                              "Google Sheets",
                              "RESTful APIs",
                            ].includes(part) ? (
                              <span
                                key={j}
                                className="text-zinc-100 font-medium"
                              >
                                {part}
                              </span>
                            ) : (
                              part
                            ),
                          )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
