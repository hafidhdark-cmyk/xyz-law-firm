import Link from "next/link";
import { Scale, ShieldCheck, Lock, ExternalLink, CheckCircle2 } from "lucide-react";
import { OFFICES } from "@/data/offices";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-ivory-300 border-t border-navy-800">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-navy-900 border border-gold-500/50 flex items-center justify-center text-gold-400">
                <Scale className="w-5 h-5 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  XYZ LAW FIRM
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400/80 font-medium -mt-1">
                  Barristers &amp; Solicitors
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory-400 leading-relaxed max-w-sm">
              Strategic counsel for landmark transactions and high-stakes commercial disputes across Nigeria and West Africa.
            </p>

            {/* Compliance Verified Badge - clearly marked as DEMO */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold flex items-center gap-1.5 text-emerald-200">
                    NDPA Compliant DPCO Framework
                    <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded font-bold uppercase tracking-wider">
                      Demo Verified
                    </span>
                  </span>
                  <span className="text-[11px] text-emerald-400/80">
                    Nigeria Data Protection Act 2023 certified mock audit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-400">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-sm text-ivory-400">
              <li>
                <Link href="/practice-areas" className="hover:text-gold-300 transition-colors">
                  Corporate &amp; Commercial
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-gold-300 transition-colors">
                  Banking &amp; Finance
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-gold-300 transition-colors">
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-gold-300 transition-colors">
                  Energy &amp; Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-gold-300 transition-colors">
                  Technology &amp; IP
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-gold-300 transition-colors">
                  Data Protection &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Firm */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-400">
              The Firm
            </h4>
            <ul className="space-y-2 text-sm text-ivory-400">
              <li>
                <Link href="/people" className="hover:text-gold-300 transition-colors">
                  Partners &amp; Counsel
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-gold-300 transition-colors">
                  Legal Insights &amp; Briefings
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gold-300 transition-colors">
                  Careers &amp; Pupillage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-300 transition-colors">
                  Offices &amp; Inquiries
                </Link>
              </li>
              <li>
                <Link href="/portal" className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors font-medium">
                  <Lock className="w-3 h-3" />
                  <span>Client Matter Portal</span>
                </Link>
              </li>
              <li>
                <Link href="/portal/filing-assistant" className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors font-medium">
                  <ExternalLink className="w-3 h-3" />
                  <span>Appellate Filing Assistant</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-400">
              Offices
            </h4>
            <div className="space-y-3 text-xs text-ivory-400">
              {OFFICES.map((office) => (
                <div key={office.id} className="space-y-0.5">
                  <p className="font-semibold text-white">{office.city} ({office.area})</p>
                  <p className="text-ivory-400/90">{office.address}</p>
                  <p className="text-gold-400/80">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Directory recognition neutral placeholder banner */}
      <div className="border-t border-navy-900 bg-navy-900/40 py-3 px-4 sm:px-8 text-center text-xs text-ivory-400">
        <p className="flex items-center justify-center gap-2 flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 inline-block"></span>
          <span>Recognised by leading legal directories across commercial practices (sample placeholder)</span>
          <span className="text-navy-400">•</span>
          <span>Regulated under the Legal Practitioners Act (Cap L11 LFN 2004)</span>
        </p>
      </div>

      {/* Legal & Regulatory Bottom bar */}
      <div className="border-t border-navy-800/80 bg-navy-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400/80">
          <p>
            &copy; {new Date().getFullYear()} XYZ Law Firm (Barristers &amp; Solicitors). Fictional demonstration website created for legal software pitch purposes.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-ivory-200 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-ivory-200 cursor-pointer">
              Cookie Preferences
            </span>
            <span className="hover:text-ivory-200 cursor-pointer">
              Legal Disclaimer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
