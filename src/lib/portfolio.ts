import portfolioData from "@/data/portfolio.json";
import type { PortfolioData, PortfolioItem } from "@/types/portfolio";

export function getPortfolioItems(): PortfolioItem[] {
  return (portfolioData as PortfolioData).items;
}

export function getFeaturedItems(): PortfolioItem[] {
  return getPortfolioItems().filter((item) => item.featured);
}
