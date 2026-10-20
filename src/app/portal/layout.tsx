"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Shield, FileCheck2, LayoutDashboard, ArrowLeft, LogOut, Bell } from "lucide-react";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Demo Banner */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs font-semibold flex items-center justify-between border-b border-amber-600/30">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
          <span>DEMO PORTAL WITH SAMPLE DATA • FOR SOFTWARE CAPABILITY EVALUATION ONLY</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-slate-900">
          <span>Client: Zenith Industrial Holdings Plc</span>
          <span>|</span>
          <Link href="/" className="underline hover:text-white transition-colors">
            Exit to Public Website
          </Link>
        </div>
      </div>

      {/* Portal Top Navigation Bar */}
      <header className="bg-navy-950 text-white border-b border-navy-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Brand / Portal Label */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-navy-900 border border-gold-500/50 flex items-center justify-center text-gold-400">
                  <Scale className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                    XYZ LAW FIRM
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-gold-400 font-sans font-semibold mt-0.5">
                    Client Matter Workspace
                  </span>
                </div>
              </Link>

              {/* Navigation Tabs */}
              <nav className="hidden md:flex items-center space-x-1 pl-4 border-l border-navy-800">
                <Link
                  href="/portal"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm flex items-center gap-1.5 transition-colors ${
                    pathname === "/portal"
                      ? "bg-navy-800 text-gold-300"
                      : "text-ivory-300 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-gold-400" />
                  <span>Matter Dashboard</span>
                </Link>

                <Link
                  href="/portal/filing-assistant"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm flex items-center gap-1.5 transition-colors ${
                    pathname.startsWith("/portal/filing-assistant")
                      ? "bg-navy-800 text-gold-300"
                      : "text-ivory-300 hover:text-white hover:bg-navy-900"
                  }`}
                >
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Filing Assistant (New Practice Rules)</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded uppercase font-bold">
                    Active
                  </span>
                </Link>
              </nav>
            </div>

            {/* Right: User Profile & Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3 text-right">
                <div>
                  <p className="text-xs font-semibold text-white">Chief T. Adebayo</p>
                  <p className="text-[10px] text-ivory-400">Zenith Industrial Holdings</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 flex items-center justify-center text-xs font-bold font-serif">
                  TA
                </div>
              </div>

              <Link
                href="/"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-ivory-300 hover:text-white border border-navy-800 hover:border-ivory-400/30 rounded-sm transition-all"
                title="Return to Public Site"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Exit Portal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Sub-bar */}
        <div className="md:hidden flex border-t border-navy-800 px-4 py-2 gap-2 bg-navy-900">
          <Link
            href="/portal"
            className={`flex-1 text-center py-1.5 text-xs font-semibold rounded-sm ${
              pathname === "/portal"
                ? "bg-navy-800 text-gold-300"
                : "text-ivory-300"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/portal/filing-assistant"
            className={`flex-1 text-center py-1.5 text-xs font-semibold rounded-sm ${
              pathname.startsWith("/portal/filing-assistant")
                ? "bg-navy-800 text-gold-300"
                : "text-ivory-300"
            }`}
          >
            Filing Assistant
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-16">{children}</main>
    </div>
  );
}
