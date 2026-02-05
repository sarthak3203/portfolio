"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 md:py-20 relative bg-black overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto md:px-6 px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[44px] sm:mr-2 md:mr-0 md:text-8xl font-black text-white md:mb-12 mb-8 tracking-normal leading-none">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 italic">
              The Next Big Thing.
            </span>
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, my inbox is
            always open.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <motion.a
              href="mailto:sarthak3203@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-6 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-250 shadow-2xl flex items-center gap-3"
            >
              <Mail size={16} />
              Drop a Message
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <motion.a
              href="/Sarthak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-zinc-900 border border-white/10 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-zinc-800 transition-all"
            >
              Download CV
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            {[
              {
                icon: Github,
                href: "https://github.com/sarthak3203",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/sarthak3203/",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "https://x.com/sarthak_3203",
                label: "Twitter",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="p-4 bg-white/10 rounded-full text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all border border-white/5">
                  <social.icon size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
