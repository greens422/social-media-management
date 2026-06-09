"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export function Clients() {
  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-ink-950 border-t-4 border-yellow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-display text-2xl tracking-widest text-yellow">
            CLIENTS WE&apos;VE BUILT
          </p>
          <h2 className="mt-3 font-display text-5xl sm:text-6xl text-white tracking-wide">
            FEEDS THAT HIT DIFFERENT
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Restaurants, bike shops, retail. Bold graphics, high energy, and
            content that actually sounds like the business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.clients.map((client, i) => (
            <motion.a
              key={client.handle}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-4 border-yellow bg-ink-900 transition-transform hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
                <Image
                  src={client.image}
                  alt={`${client.name} Instagram`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-yellow px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink">
                  {client.type}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl lg:text-3xl text-yellow tracking-wide">
                      {client.name.toUpperCase()}
                    </p>
                    <p className="mt-1 text-sm text-white/60">{client.tagline}</p>
                    <p className="mt-1 text-sm font-medium text-white/40">
                      {client.handle}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow text-ink transition-transform group-hover:scale-110">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
