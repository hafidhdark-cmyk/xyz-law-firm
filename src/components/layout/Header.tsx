"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Shield, ArrowUpRight, Scale } from "lucide-react";

const NAV_LINKS = [
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/people", label: "Our People" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-ivory-400/80 transition-all">
      {/* Top micro-bar */}
      <div className="bg-navy-950 text-ivory-300 text-xs py-1.5 px-4 sm:px-8 border-b border-navy-800 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Offices in Lagos, Abuja & Port Harcourt
          </span>
          <span className="hidden md:inline text-navy-400">|</span>
          <span className="hidden md:inline text-ivory-400">
            Recognised by leading commercial directories (sample)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="flex items-center gap-1 text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            <Shield className="w-3 h-3" />
            <span>Client Portal</span>
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 bg-gold-500/20 text-gold-300 rounded font-semibold ml-1">
              Demo
            </span>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-navy-900 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-colors shadow-sm">
              <Scale className="w-5 h-5 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-navy-900 group-hover:text-gold-600 transition-colors">
                XYZ LAW FIRM
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal-500 font-medium -mt-1">
                Barristers &amp; Solicitors • Lagos
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-sm ${
                    isActive
                      ? "text-navy-900 font-semibold bg-gold-50/80 border-b-2 border-gold-500"
                      : "text-charcoal-600 hover:text-navy-900 hover:bg-ivory-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Contact Button & Client Portal */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-navy-900 border border-navy-900/30 hover:border-navy-900 hover:bg-navy-900 hover:text-white transition-all rounded-sm"
            >
              Consult Counsel
            </Link>
            <Link
              href="/portal"
              className="flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-all rounded-sm shadow-sm"
            >
              <span>Client Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-900 hover:text-gold-600 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-ivory-400 bg-white px-4 pt-3 pb-6 shadow-xl space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-base font-medium rounded-sm ${
                  isActive
                    ? "bg-gold-50 text-navy-950 font-bold border-l-4 border-gold-500"
                    : "text-charcoal-700 hover:bg-ivory-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-ivory-300 space-y-2">
            <Link
              href="/portal"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold bg-navy-900 text-white rounded-sm"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold-400" />
                Access Client Portal
              </span>
              <span className="text-[10px] uppercase bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded">
                Demo
              </span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-3 py-2.5 text-sm font-semibold border border-navy-900 text-navy-900 rounded-sm"
            >
              Book Confidential Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
