"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Scale, Phone, ArrowRight, MapPin } from "lucide-react";

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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-ivory-400/80 transition-all shadow-xs">
      {/* Main navigation (Topbar completely removed) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-22">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-navy-950 border border-gold-500/50 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-all duration-300 shadow-sm relative shrink-0">
              <Scale className="w-5 h-5 text-gold-400 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gold-400" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-navy-950 group-hover:text-gold-700 transition-colors truncate">
                XYZ LAW FIRM
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] uppercase text-charcoal-500 font-medium -mt-0.5 truncate">
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

          {/* Right Action: Consult Counsel (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-navy-950 border border-navy-950/40 hover:border-navy-950 hover:bg-navy-950 hover:text-white transition-all duration-200 rounded-sm shadow-xs group"
            >
              <span>Consult Counsel</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:text-gold-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button - Touch optimized (min 44px) */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              href="/contact"
              className="sm:inline-flex hidden px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold bg-navy-950 text-white rounded-sm"
            >
              Consult
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-navy-950 hover:text-gold-600 hover:bg-ivory-100 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 sm:top-22 z-50 lg:hidden bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border-b border-ivory-400 max-h-[calc(100vh-5rem)] overflow-y-auto px-5 pt-4 pb-8 shadow-2xl space-y-6">
            {/* Navigation links */}
            <nav className="space-y-1.5 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-700 px-3 block mb-1">
                Navigation
              </span>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 text-base font-medium rounded-sm transition-all ${
                      isActive
                        ? "bg-gold-50/90 text-navy-950 font-bold border-l-4 border-gold-500"
                        : "text-charcoal-800 hover:bg-ivory-100 active:bg-ivory-200"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-charcoal-400" />
                  </Link>
                );
              })}
            </nav>

            {/* Quick Contact & Action Section */}
            <div className="pt-4 border-t border-ivory-300 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-700 px-3 block">
                Direct Contact
              </span>

              {/* Direct Tap-to-Call */}
              <a
                href="tel:+23412954400"
                className="flex items-center gap-3 px-3.5 py-3 bg-ivory-100 border border-ivory-300 rounded-sm text-sm text-navy-950 font-semibold active:bg-ivory-200"
              >
                <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-500 font-normal">Telephone Switchboard</p>
                  <p className="text-sm font-semibold text-navy-950">+234 (1) 295 4400</p>
                </div>
              </a>

              {/* Office Locations summary */}
              <div className="flex items-center gap-2 px-3.5 py-2 text-xs text-charcoal-600 bg-ivory-50 rounded-sm border border-ivory-200">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Offices in Lagos (HQ), Abuja &amp; Port Harcourt</span>
              </div>

              {/* Primary Call to Action */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3.5 px-4 text-xs uppercase tracking-wider font-semibold bg-navy-950 text-white rounded-sm shadow-md active:bg-gold-600 transition-colors"
              >
                Schedule Confidential Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
