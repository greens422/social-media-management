export type PortfolioCategory =
  | "all"
  | "food"
  | "retail"
  | "series"
  | "reviews"
  | "product"
  | "street";

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  clientHandle?: string;
  location: string;
  category: Exclude<PortfolioCategory, "all">;
  series?: string;
  episode?: string;
  thumbnail: string;
  videoUrl?: string;
  instagramUrl?: string;
  platforms: ("instagram" | "tiktok" | "youtube")[];
  stats?: {
    views?: string;
    engagement?: string;
  };
  description: string;
  featured?: boolean;
}

export interface PortfolioData {
  items: PortfolioItem[];
}
