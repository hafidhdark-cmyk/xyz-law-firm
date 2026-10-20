"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Scale, Shield, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PortalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("corporate.counsel@zenithholdings.ng");
  const [password, setPassword] = useState("••••••••••••");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Any input logs in as requested
    setTimeout(() => {
      router.push("/portal");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-between text-white font-sans relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top bar */}
      <header className="p-6 max-w-7xl mx-auto w-full flex justify-between items-center relative z-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-sm bg-navy-900 border border-gold-500/50 flex items-center justify-center text-gold-400">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-tight text-white block leading-none">
              XYZ LAW FIRM
            </span>
            <span className="text-[9px] uppercase tracking-widest text-gold-400 font-sans font-semibold">
              Client Portal Gateway
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="text-xs text-ivory-300 hover:text-white border border-navy-800 px-3 py-1.5 rounded-sm"
        >
          Return to Firm Website
        </Link>
      </header>

      {/* Centered Login Card */}
      <div className="max-w-md w-full mx-auto p-6 relative z-10">
        <div className="bg-white text-charcoal-900 p-8 sm:p-10 rounded-sm border border-ivory-300 shadow-2xl space-y-6">
          <div className="space-y-2 text-center">
            <div className="w-12 h-12 bg-navy-900 text-gold-400 rounded-sm flex items-center justify-center mx-auto border border-gold-500/30">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-navy-950">
              Secure Client Gateway
            </h1>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Encrypted matter updates, e-filing repository, and fee schedules for authorized corporate counsel.
            </p>
          </div>

          {/* Demo Notice Banner */}
          <div className="p-3 bg-amber-50 border border-amber-300/80 rounded-sm text-xs text-amber-900 space-y-1">
            <p className="font-semibold flex items-center gap-1.5 text-amber-950">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Demo Mode Active
            </p>
            <p className="text-[11px] text-amber-800">
              Any email and password combination will grant instant access to the sample matter workspace.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-navy-950">
                Corporate Email / Matter ID
              </label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-navy-950">
                Security Password / Token
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-ivory-100 border border-ivory-400 rounded-sm focus:border-navy-900 focus:bg-white text-charcoal-900"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-xs uppercase tracking-wider font-semibold bg-navy-900 text-white hover:bg-navy-800 rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Lock className="w-3.5 h-3.5 text-gold-400" />
              <span>{loading ? "Authenticating..." : "Sign In to Client Portal"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="pt-4 border-t border-ivory-300 text-center">
            <button
              type="button"
              onClick={() => router.push("/portal")}
              className="text-xs font-semibold text-gold-700 hover:text-navy-950 hover:underline"
            >
              Quick Preview: Instant One-Click Login →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-ivory-400/60 relative z-10">
        XYZ Law Firm Secure Infrastructure • Protected under NDPA &amp; ISO 27001 mock guidelines.
      </footer>
    </div>
  );
}
