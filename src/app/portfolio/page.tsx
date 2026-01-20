import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";



export const metadata: Metadata = {
  title: "Portfolio | Visionary Design Tech",
  description:
    "Explore our portfolio across logos, web design & development, mobile apps, and social media.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
