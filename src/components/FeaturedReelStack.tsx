"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { getFeaturedItems } from "@/lib/portfolio";
import type { PortfolioItem } from "@/types/portfolio";

const STACK_POSITIONS = [
  { top: 0, left: 0, zIndex: 30, rotate: -4, scale: 1 },
  { top: 55, left: 75, zIndex: 20, rotate: 0, scale: 0.96 },
  { top: 110, left: 150, zIndex: 10, rotate: 4, scale: 0.92 },
] as const;

const CYCLE_MS = 4500;

function ReelCard({
  item,
  stackIndex,
  onSelect,
}: {
  item: PortfolioItem;
  stackIndex: number;
  onSelect?: () => void;
}) {
  const pos = STACK_POSITIONS[stackIndex] ?? STACK_POSITIONS[2];

  return (
    <motion.div
      layout
      animate={{
        top: pos.top,
        left: pos.left,
        zIndex: pos.zIndex,
        rotate: pos.rotate,
        scale: pos.scale,
        opacity: stackIndex === 0 ? 1 : stackIndex === 1 ? 0.92 : 0.85,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      className={`absolute w-[230px] overflow-hidden border-4 border-yellow shadow-[0_0_40px_rgba(255,229,0,0.15)] ${
        stackIndex === 0 ? "cursor-pointer" : "pointer-events-none"
      }`}
      onClick={stackIndex === 0 ? onSelect : undefined}
      whileHover={stackIndex === 0 ? { scale: 1.02 } : undefined}
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

        {item.series && !item.episode && (
          <div className="absolute top-3 left-3 bg-yellow px-2 py-0.5 font-display text-xs tracking-wide text-ink max-w-[85%] truncate">
            {item.series.toUpperCase()}
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
  );
}

export function FeaturedReelStack() {
  const featured = getFeaturedItems();
  const count = featured.length;
  const stackDepth = Math.min(3, count);
  const [frontOffset, setFrontOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    if (count <= 1) return;
    setFrontOffset((prev) => (prev + 1) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1 || paused) return;
    const timer = setInterval(advance, CYCLE_MS);
    return () => clearInterval(timer);
  }, [count, paused, advance]);

  if (count === 0) return null;

  const stackItems = Array.from({ length: stackDepth }, (_, i) => ({
    item: featured[(frontOffset + i) % count]!,
    stackIndex: i,
  }));

  const frontItem = featured[frontOffset % count]!;

  return (
    <div
      className="relative w-full max-w-[420px] mx-auto lg:mx-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Desktop stack */}
      <div className="relative hidden lg:block h-[540px]">
        {stackItems.map(({ item, stackIndex }) => (
          <ReelCard
            key={item.id}
            item={item}
            stackIndex={stackIndex}
            onSelect={() => {
              if (item.instagramUrl) {
                window.open(item.instagramUrl, "_blank", "noopener,noreferrer");
              } else {
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        ))}
      </div>

      {/* Mobile single card */}
      <div className="relative lg:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={frontItem.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="mx-auto w-[240px] overflow-hidden border-4 border-yellow shadow-[0_0_40px_rgba(255,229,0,0.15)]"
          >
          <div className="relative aspect-[9/16]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={frontItem.thumbnail}
              alt={frontItem.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            {frontItem.episode && (
              <div className="absolute top-3 left-3 bg-yellow px-2 py-0.5 font-display text-sm tracking-wide text-ink">
                {frontItem.episode}
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-ink p-3 border-t-4 border-yellow">
              <p className="font-display text-lg text-yellow tracking-wide leading-none">
                {frontItem.client.toUpperCase()}
              </p>
              <p className="text-xs text-white/70 mt-1">{frontItem.title}</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-14 w-14 items-center justify-center bg-yellow">
                <Play size={20} className="text-ink fill-ink ml-0.5" />
              </div>
            </div>
          </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {featured.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show ${item.client} reel`}
              onClick={() => setFrontOffset(i)}
              className={`h-2 transition-all ${
                i === frontOffset
                  ? "w-8 bg-yellow"
                  : "w-2 bg-yellow/30 hover:bg-yellow/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
