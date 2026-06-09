"use client";

import { motion } from "framer-motion";
import { Mail, Share2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-halftone opacity-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-yellow/10 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-2xl tracking-widest text-yellow">
              LET&apos;S GO
            </p>
            <h2 className="mt-2 font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide">
              READY TO GO{" "}
              <span className="text-yellow text-stroke">VIRAL</span>?
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              Tell us about your business. We&apos;ll figure out the series, the
              hooks, and the shoot. Whistler or wherever you are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-3 bg-yellow px-8 py-4 text-base font-bold uppercase tracking-wide text-ink transition-all hover:bg-yellow-bright hover:shadow-[0_0_30px_rgba(255,229,0,0.35)]"
            >
              <Mail size={18} />
              {siteConfig.email}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-yellow px-8 py-4 text-base font-bold uppercase tracking-wide text-yellow transition-all hover:bg-yellow hover:text-ink"
            >
              <Share2 size={18} />
              Follow our work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
