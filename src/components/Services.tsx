"use client";

import { motion } from "framer-motion";
import { Video, Mic, BarChart3 } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = {
  video: Video,
  mic: Mic,
  chart: BarChart3,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-ink-950">
      <div className="absolute inset-0 bg-halftone opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-display text-2xl tracking-widest text-yellow">
            WHAT WE MAKE
          </p>
          <h2 className="mt-2 font-display text-5xl sm:text-6xl text-white tracking-wide">
            NOT YOUR AVERAGE BRAND CONTENT
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group border-4 border-yellow/20 bg-ink p-8 transition-all hover:border-yellow hover:shadow-[0_0_30px_rgba(255,229,0,0.15)]"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-yellow text-ink">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-yellow tracking-wide">
                  {service.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-white/50 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 border-4 border-yellow bg-ink p-8 lg:p-12"
        >
          <h3 className="font-display text-3xl text-yellow tracking-wide text-center mb-10">
            HOW A SHOOT DAY GOES
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Find the hook", desc: "What's the series? The product? The question that makes people stop scrolling?" },
              { step: "02", title: "Show up & shoot", desc: "On the street, in the shop, on the floor — real people, real reactions, zero scripts." },
              { step: "03", title: "Edit loud", desc: "Bold graphics, episode numbers, captions that pop on any feed." },
              { step: "04", title: "Post & repeat", desc: "Consistent series branding that builds an audience episode by episode." },
            ].map((item) => (
              <div key={item.step} className="text-center lg:text-left">
                <span className="font-display text-5xl text-yellow/20">{item.step}</span>
                <h4 className="mt-1 font-display text-xl text-white tracking-wide">
                  {item.title.toUpperCase()}
                </h4>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
