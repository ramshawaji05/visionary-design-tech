import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreloaderCinematic from "@/components/PreloaderCinematic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visionary Design Tech | Creative Digital Agency",
  description: "High-end web & app design, branding, and marketing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <PreloaderCinematic />

        <Header />

        {/* ✅ PAGE WRAPPER */}
        <div className="page-wrapper">
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
