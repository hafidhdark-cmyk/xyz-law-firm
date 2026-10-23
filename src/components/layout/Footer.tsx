import Link from "next/link";
import { Scale, ShieldCheck, MapPin, ArrowRight, Phone, Mail } from "lucide-react";
import { OFFICES } from "@/data/offices";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-ivory-300 border-t border-navy-800">
      {/* Top Pre-Footer Inquiry Ribbon */}
      <div className="border-b border-navy-900 bg-navy-900/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gold-400">
              Direct Counsel Engagement
            </p>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug">
              Structuring transactions and resolving commercial disputes nationwide.
            </h3>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold bg-gold-500 hover:bg-gold-400 text-navy-950 rounded-sm transition-all shadow-sm shrink-0 text-center"
          >
            <span>Retain the Firm</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12">
          {/* Column 1: Brand & Tagline */}
          <div className="sm:col-span-2 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-navy-900 border border-gold-500/50 flex items-center justify-center text-gold-400 relative shrink-0">
                <Scale className="w-5 h-5 text-gold-400" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  XYZ LAW FIRM
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-gold-400/90 font-medium -mt-1">
                  Barristers &amp; Solicitors
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory-400 leading-relaxed max-w-sm font-light">
              Trusted commercial counsel for premier conglomerates, sovereign entities, and international financiers across Nigeria and West Africa.
            </p>

            {/* Compliance Verified Badge - clearly marked as DEMO */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-3 px-3.5 py-2.5 rounded-sm border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold flex items-center gap-1.5 text-emerald-200 text-[11px] sm:text-xs">
                    NDPA Compliant DPCO Framework
                    <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded font-bold uppercase tracking-wider">
                      Demo Verified
                    </span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-400/80">
                    Nigeria Data Protection Act 2023 certified mock audit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-400">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory-400 font-light">
              <li>
                <Link href="/practice-areas#corporate-commercial" className="hover:text-gold-300 transition-colors">
                  Corporate &amp; Commercial
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#banking-finance" className="hover:text-gold-300 transition-colors">
                  Banking &amp; Finance
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#dispute-resolution" className="hover:text-gold-300 transition-colors">
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#energy-infrastructure" className="hover:text-gold-300 transition-colors">
                  Energy &amp; Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#technology-ip" className="hover:text-gold-300 transition-colors">
                  Technology &amp; IP
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#data-protection-compliance" className="hover:text-gold-300 transition-colors">
                  Data Protection &amp; Compliance
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#real-estate" className="hover:text-gold-300 transition-colors">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Firm */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-400">
              The Firm
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory-400 font-light">
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
                  Careers &amp; Open Roles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-300 transition-colors">
                  Offices &amp; Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-400">
              Offices
            </h4>
            <div className="space-y-4 text-xs text-ivory-400">
              {OFFICES.map((office) => (
                <div key={office.id} className="space-y-1">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-gold-500 shrink-0" />
                    <span>{office.city} ({office.area})</span>
                  </p>
                  <p className="text-ivory-400/90 leading-relaxed pl-4 font-light text-[11px] sm:text-xs">{office.address}</p>
                  <p className="pl-4">
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-gold-400/90 hover:text-gold-300 font-medium"
                    >
                      {office.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Directory recognition neutral placeholder banner */}
      <div className="border-t border-navy-900 bg-navy-900/40 py-3.5 px-4 sm:px-8 text-center text-[11px] sm:text-xs text-ivory-400">
        <p className="flex items-center justify-center gap-2 flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 inline-block"></span>
          <span>Recognised by leading legal directories across commercial practices (sample placeholder)</span>
          <span className="hidden sm:inline text-navy-700">•</span>
          <span className="block sm:inline">Regulated under the Legal Practitioners Act (Cap L11 LFN 2004)</span>
        </p>
      </div>

      {/* Legal & Regulatory Bottom bar */}
      <div className="border-t border-navy-800/80 bg-navy-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-ivory-400/80 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} XYZ Law Firm (Barristers &amp; Solicitors). Fictional demonstration website created for legal software pitch purposes.
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
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
