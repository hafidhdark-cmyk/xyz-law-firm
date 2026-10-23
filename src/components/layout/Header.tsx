"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Scale, Phone, ArrowRight } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-ivory-400/80 transition-all shadow-xs">
      {/* Top micro-bar */}
      <div className="bg-navy-950 text-ivory-300 text-xs py-2 px-4 sm:px-8 border-b border-navy-900/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="font-medium text-ivory-200">Lagos • Abuja • Port Harcourt</span>
            </span>
            <span className="hidden md:inline text-navy-700">|</span>
            <span className="hidden md:inline text-ivory-400">
              Commercial Barristers &amp; Solicitors
            </span>
            <span className="hidden lg:inline text-navy-700">|</span>
            <span className="hidden lg:inline text-gold-400/90 italic">
              Recognised by leading legal directories (sample)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:+23412954400"
              className="hidden sm:flex items-center gap-1.5 text-ivory-300 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>+234 (1) 295 4400</span>
            </a>
            <span className="hidden sm:inline text-navy-700">|</span>
            <Link
              href="/contact"
              className="text-gold-400 hover:text-gold-300 font-semibold transition-colors uppercase tracking-wider text-[10px]"
            >
              Direct Counsel Inquiry →
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-sm bg-navy-950 border border-gold-500/50 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-all duration-300 shadow-sm relative">
              <Scale className="w-5 h-5 text-gold-400 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-navy-950 group-hover:text-gold-700 transition-colors">
                XYZ LAW FIRM
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-500 font-medium -mt-0.5">
                Barristers &amp; Solicitors • Est. 1996
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
                  className={`px-4 py-2.5 text-sm font-medium transition-all rounded-sm relative group ${
                    isActive
                      ? "text-navy-950 font-bold"
                      : "text-charcoal-700 hover:text-navy-950 hover:bg-ivory-100"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-500 rounded-full" />
                  ) : (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-500/0 group-hover:bg-gold-500/40 rounded-full transition-all" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Consult Counsel */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-navy-950 border border-navy-950/40 hover:border-navy-950 hover:bg-navy-950 hover:text-white transition-all duration-200 rounded-sm shadow-xs group"
            >
              <span>Consult Counsel</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:text-gold-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-950 hover:text-gold-600 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-ivory-400 bg-white px-4 pt-3 pb-6 shadow-xl space-y-2 animate-in fade-in duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 text-base font-medium rounded-sm ${
                  isActive
                    ? "bg-gold-50/80 text-navy-950 font-bold border-l-4 border-gold-500"
                    : "text-charcoal-700 hover:bg-ivory-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-ivory-300 space-y-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-4 py-3 text-xs uppercase tracking-wider font-semibold bg-navy-950 text-white rounded-sm hover:bg-navy-900 transition-colors"
            >
              Consult Counsel Directly
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
