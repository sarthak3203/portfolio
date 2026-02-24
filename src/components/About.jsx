"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black py-4 md:py-8 border-b border-white/40 relative overflow-hidden"
    >
      <div className="w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[83%] mx-auto"
        >
          {/* Section Heading matching the style of other components */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 md:mb-10 uppercase leading-none">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="space-y-6">
            <p className="text-zinc-400 text-[15px] md:text-[18px] font-normal leading-relaxed max-w-5xl">
              I'm a Full Stack Developer with a strong backend focus, building
              scalable, production-grade applications across the modern
              JavaScript stack. Experienced in designing backend systems with
              Node.js, Express, PostgreSQL, MongoDB, and Redis, including
              authentication, caching, async workflows, and API integrations. I
              also develop performant, responsive interfaces using Next.js,
              React, and Tailwind CSS, ensuring seamless backend integration and
              reliable production performance.{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
