import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t-4 border-yellow bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-yellow font-display text-sm text-ink">
            2G
          </span>
          <span className="text-sm text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
        </div>
        <p className="font-display text-sm tracking-widest text-yellow/60">
          {siteConfig.origin.toUpperCase()} · AVAILABLE EVERYWHERE
        </p>
      </div>
    </footer>
  );
}
