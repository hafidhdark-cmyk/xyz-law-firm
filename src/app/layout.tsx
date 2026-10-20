import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XYZ Law Firm | Premier Commercial & Dispute Counsel | Nigeria",
  description:
    "XYZ Law Firm is a premier Nigerian commercial law firm delivering strategic counsel in Corporate & Commercial, Banking & Finance, Energy, Tech, and Appellate Dispute Resolution.",
  keywords: ["Nigerian Law Firm", "Commercial Litigation", "Corporate Law Lagos", "Arbitration Nigeria", "Appellate E-Filing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory-200 text-charcoal-800 antialiased selection:bg-gold-500/20 selection:text-navy-900">
        {children}
      </body>
    </html>
  );
}
