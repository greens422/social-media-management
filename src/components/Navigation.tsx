"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#clients", label: "Clients" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-b-4 border-yellow"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-9 min-w-9 items-center justify-center bg-yellow px-1.5 font-display text-lg text-ink leading-none">
            2G<span className="font-sans text-[11px] font-bold lowercase relative top-px">s</span>
          </span>
          <span className="font-display text-xl tracking-wider text-white group-hover:text-yellow transition-colors">
            {siteConfig.name.toUpperCase()}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-white/70 transition-colors hover:text-yellow"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-yellow px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-all hover:bg-yellow-bright hover:shadow-[0_0_20px_rgba(255,229,0,0.4)]"
            >
              Book a shoot
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden text-yellow"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-4 border-yellow bg-ink"
          >
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 font-display text-2xl tracking-wide text-white hover:text-yellow"
                  >
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
              <li className="pt-4 pb-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-yellow py-3 text-center font-bold uppercase text-ink"
                >
                  Book a shoot
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
