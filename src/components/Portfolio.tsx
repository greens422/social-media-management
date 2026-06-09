"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, MapPin, Eye, TrendingUp, ExternalLink } from "lucide-react";
import type { PortfolioCategory, PortfolioItem } from "@/types/portfolio";

const categories: { value: PortfolioCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "food", label: "Food & Drink" },
  { value: "retail", label: "Retail" },
  { value: "series", label: "Series" },
  { value: "product", label: "Product" },
  { value: "reviews", label: "Reviews" },
  { value: "street", label: "Street" },
];

interface PortfolioProps {
  items: PortfolioItem[];
}

export function Portfolio({ items }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-ink border-t-4 border-yellow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-2xl tracking-widest text-yellow">
            THE PORTFOLIO
          </p>
          <h2 className="mt-2 font-display text-5xl sm:text-6xl text-white tracking-wide">
            REELS THAT HIT DIFFERENT
          </h2>
          <p className="mt-4 text-lg text-white/50 leading-relaxed">
            Restaurants, bike shops, retail — trivia series, product demos, challenge
            reels, and the kind of content that makes people tag their friends.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                activeCategory === cat.value
                  ? "bg-yellow text-ink"
                  : "border-2 border-white/20 text-white/60 hover:border-yellow hover:text-yellow"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="group cursor-pointer"
                onClick={() => setSelected(item)}
              >
                <div className="relative aspect-[4/5] overflow-hidden border-4 border-yellow/30 bg-ink-900 transition-all group-hover:border-yellow group-hover:shadow-[0_0_30px_rgba(255,229,0,0.2)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                  {item.episode && (
                    <div className="absolute top-3 left-3 bg-yellow px-2.5 py-1 font-display text-base tracking-wide text-ink">
                      {item.episode}
                    </div>
                  )}

                  {item.series && !item.episode && (
                    <div className="absolute top-3 left-3 bg-yellow px-2.5 py-1 font-display text-sm tracking-wide text-ink max-w-[80%] truncate">
                      {item.series.toUpperCase()}
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-16 w-16 items-center justify-center bg-yellow scale-90 group-hover:scale-100 transition-transform">
                      <Play size={24} className="text-ink fill-ink ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 border-t-4 border-yellow bg-ink p-4">
                    <div className="flex items-center gap-1.5 text-xs text-yellow/80 font-medium uppercase tracking-wide">
                      <MapPin size={11} />
                      {item.location}
                    </div>
                    <h3 className="mt-1 font-display text-xl text-yellow tracking-wide">
                      {item.client.toUpperCase()}
                    </h3>
                    <p className="text-sm text-white/60">{item.title}</p>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex gap-1">
                        {item.platforms.map((p) => (
                          <span
                            key={p}
                            className="bg-yellow/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-yellow"
                          >
                            {p === "instagram" ? "IG" : p === "tiktok" ? "TT" : "YT"}
                          </span>
                        ))}
                      </div>
                      {item.stats?.views && (
                        <span className="text-xs font-bold text-white/40">
                          {item.stats.views}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-sm text-white/30">
          Add reels in{" "}
          <code className="bg-yellow/10 px-2 py-0.5 text-yellow font-mono text-xs">
            src/data/portfolio.json
          </code>
        </p>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/95 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl overflow-hidden border-4 border-yellow bg-ink-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-yellow text-ink hover:bg-yellow-bright transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.thumbnail}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
                  <div className="flex h-20 w-20 items-center justify-center bg-yellow">
                    <Play size={32} className="text-ink fill-ink ml-1" />
                  </div>
                </div>
                {selected.episode && (
                  <div className="absolute top-4 left-4 bg-yellow px-3 py-1 font-display text-xl tracking-wide text-ink">
                    {selected.episode}
                  </div>
                )}
              </div>

              <div className="p-8 border-t-4 border-yellow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl text-yellow tracking-wide">
                      {selected.client.toUpperCase()}
                    </p>
                    {selected.clientHandle && (
                      <p className="text-sm text-white/40">{selected.clientHandle}</p>
                    )}
                    <h3 className="mt-2 font-display text-3xl text-white tracking-wide">
                      {selected.title.toUpperCase()}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-white/40">
                      <MapPin size={14} />
                      {selected.location}
                    </p>
                  </div>
                  <span className="shrink-0 bg-yellow/20 px-3 py-1 text-xs font-bold uppercase text-yellow">
                    {selected.category}
                  </span>
                </div>

                <p className="mt-4 text-white/60 leading-relaxed">{selected.description}</p>

                <div className="mt-6 flex flex-wrap gap-4">
                  {selected.stats?.views && (
                    <div className="flex items-center gap-2 border-2 border-yellow/30 px-4 py-3">
                      <Eye size={16} className="text-yellow" />
                      <div>
                        <p className="text-xs text-white/40 uppercase">Views</p>
                        <p className="text-sm font-bold text-white">{selected.stats.views}</p>
                      </div>
                    </div>
                  )}
                  {selected.stats?.engagement && (
                    <div className="flex items-center gap-2 border-2 border-yellow/30 px-4 py-3">
                      <TrendingUp size={16} className="text-yellow" />
                      <div>
                        <p className="text-xs text-white/40 uppercase">Engagement</p>
                        <p className="text-sm font-bold text-white">
                          {selected.stats.engagement}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {selected.instagramUrl && (
                  <a
                    href={selected.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-yellow-bright transition-colors"
                  >
                    View on Instagram
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
