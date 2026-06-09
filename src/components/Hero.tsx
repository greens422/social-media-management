"use client";

import { motion } from "framer-motion";
import { Play, MapPin, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getFeaturedItems } from "@/lib/portfolio";

export function Hero() {
  const featured = getFeaturedItems().slice(0, 3);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-halftone opacity-50" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow/10 rounded-full blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border-2 border-yellow bg-yellow px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-ink mb-8"
            >
              <MapPin size={14} />
              <span>{siteConfig.origin} · Everywhere</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-wide text-white"
            >
              HIGH ENERGY
              <br />
              <span className="text-yellow text-stroke">SOCIAL</span>
              <br />
              CONTENT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-white/60"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-yellow px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-all hover:bg-yellow-bright hover:shadow-[0_0_30px_rgba(255,229,0,0.35)]"
              >
                <Play size={16} className="fill-ink" />
                Watch the work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-yellow hover:text-yellow"
              >
                Let&apos;s go
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="border-l-4 border-yellow pl-4">
                  <p className="font-display text-3xl sm:text-4xl text-yellow tracking-wide">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/40 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Featured reel stack — phone-style with yellow borders */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block h-[540px]"
          >
            {featured.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, rotate: (i - 1) * 4 }}
                animate={{ opacity: 1, y: 0, rotate: (i - 1) * 4 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                className="absolute w-[230px] overflow-hidden border-4 border-yellow shadow-[0_0_40px_rgba(255,229,0,0.15)]"
                style={{
                  top: `${i * 55}px`,
                  left: `${i * 75}px`,
                  zIndex: featured.length - i,
                }}
              >
                <div className="relative aspect-[9/16]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

                  {item.episode && (
                    <div className="absolute top-3 left-3 bg-yellow px-2 py-0.5 font-display text-sm tracking-wide text-ink">
                      {item.episode}
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 bg-ink p-3 border-t-4 border-yellow">
                    <p className="font-display text-lg text-yellow tracking-wide leading-none">
                      {item.client.toUpperCase()}
                    </p>
                    <p className="text-xs text-white/70 mt-1">{item.title}</p>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-14 w-14 items-center justify-center bg-yellow">
                      <Play size={20} className="text-ink fill-ink ml-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-yellow/50"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
