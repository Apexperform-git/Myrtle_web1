import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title: "Myrtle Europe — OmnI Navigation",
  description:
    "Human-centric operational intelligence that learns how your line behaves, reasons forward, and guides decisions. Reduce firefighting. Reveal what matters next.",
  keywords: [
    "operational intelligence",
    "manufacturing",
    "OmnI",
    "Myrtle Europe",
    "production optimization",
    "operator guidance",
  ],
  openGraph: {
    title: "Myrtle Europe — OmnI Navigation",
    description:
      "Operational Intelligence that Guides, Not Reports. Cut Non-Value-Added time by 50% or more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=JetBrains+Mono:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-midnight text-foreground">
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
