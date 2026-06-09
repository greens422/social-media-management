"use client";

import { motion } from "framer-motion";
import { Mountain, Globe, Zap, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-ink border-y-4 border-yellow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-2xl tracking-widest text-yellow">
              ABOUT US
            </p>
            <h2 className="mt-2 font-display text-5xl sm:text-6xl text-white tracking-wide leading-none">
              BORN IN WHISTLER.
              <br />
              <span className="text-yellow">BUILT TO GO VIRAL.</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              We&apos;re Seb and Tobi, two guys who started filming on the streets
              of Whistler. Trivia outside Fat Tony&apos;s, poutine reactions at
              Chubby Ducks, product unboxings at Fanatyk Co.
            </p>
            <p className="mt-4 text-lg text-white/50 leading-relaxed">
              Same high-energy, vlog-style format, whether you&apos;re a restaurant,
              a bike shop, or any local business with personality. Same hooks.
              Same energy. New industry, same results.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {siteConfig.founders.map((founder, i) => (
                <motion.a
                  key={founder.handle}
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex items-center gap-4 border-4 border-yellow/30 bg-ink-900 p-5 transition-all hover:border-yellow hover:shadow-[0_0_24px_rgba(255,229,0,0.15)]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-yellow font-display text-2xl text-ink">
                    {founder.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-2xl text-white tracking-wide leading-none">
                      {founder.name.toUpperCase()}
                    </p>
                    <p className="mt-1 text-sm text-yellow/80">{founder.handle}</p>
                  </div>
                  <ExternalLink
                    size={18}
                    className="shrink-0 text-white/30 transition-colors group-hover:text-yellow"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: Mountain,
                title: "Whistler roots",
                desc: "We know mountain-town businesses: seasonal crowds, tight communities, and the pressure to stand out online.",
              },
              {
                icon: Globe,
                title: "Any business, same energy",
                desc: "Food, retail, hospitality, outdoor. If you've got a story and a personality, we've got the format.",
              },
              {
                icon: Zap,
                title: "Scroll-stopping by design",
                desc: "Bold text. High contrast. Hook in 2 seconds. We edit for the algorithm and the audience.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 border-2 border-yellow/20 p-6 transition-colors hover:border-yellow"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-yellow text-ink">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-yellow tracking-wide">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="mt-1 text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center border-4 border-yellow p-10 lg:p-14"
        >
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide leading-tight max-w-4xl mx-auto">
            &ldquo;OUR FEED WENT FROM PRODUCT PHOTOS TO{" "}
            <span className="text-yellow">THE MOST FUN ACCOUNT IN WHISTLER</span>
            &rdquo;
          </p>
          <footer className="mt-6 font-display text-lg text-yellow/60 tracking-wide">
            Local business partner, {siteConfig.origin.toUpperCase()}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
