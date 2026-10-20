import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PRACTICE_AREAS } from "@/data/practices";
import { INSIGHTS_ARTICLES } from "@/data/insights";
import { OFFICES } from "@/data/offices";
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  Briefcase,
  ChevronRight,
  Building2,
  Clock,
  Compass,
  FileCheck2,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-navy-950 text-white pt-24 pb-28 lg:pt-32 lg:pb-36 border-b border-navy-800">
          {/* Subtle architectural gradient background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 right-0 w-[550px] h-[550px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-8">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-navy-900 border border-gold-500/30 text-gold-400 text-xs tracking-wider uppercase font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Commercial Law &amp; Dispute Resolution</span>
                <span className="text-navy-400">•</span>
                <span>Lagos • Abuja • Port Harcourt</span>
              </div>

              {/* Tagline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.15]">
                Clarity in complexity. <br />
                <span className="italic text-gold-300 font-serif">Decisive advocacy</span> when the stakes are highest.
              </h1>

              {/* Lead paragraph */}
              <p className="text-lg sm:text-xl text-ivory-300 font-light leading-relaxed max-w-2xl">
                XYZ Law Firm advises multinationals, institutional financiers, and emerging industry leaders navigating Nigeria’s evolving commercial, regulatory, and judicial landscape.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/practice-areas"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all rounded-sm shadow-md"
                >
                  <span>Explore Practice Areas</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/portal"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold border border-ivory-400/40 text-ivory-200 hover:border-white hover:text-white hover:bg-white/5 transition-all rounded-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Access Client Portal</span>
                </Link>
              </div>
            </div>

            {/* Understated capability stats banner */}
            <div className="mt-20 pt-10 border-t border-navy-800/80 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-1">
                <p className="font-serif text-3xl font-normal text-gold-300">30+ Years</p>
                <p className="text-xs uppercase tracking-wider text-ivory-400">Institutional Seniority</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl font-normal text-gold-300">3 Divisions</p>
                <p className="text-xs uppercase tracking-wider text-ivory-400">Lagos, Abuja, PH Offices</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl font-normal text-gold-300">7 Core</p>
                <p className="text-xs uppercase tracking-wider text-ivory-400">Specialised Practice Groups</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl font-normal text-gold-300">100%</p>
                <p className="text-xs uppercase tracking-wider text-ivory-400">Electronic Filing Ready</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE AREAS ROW */}
        <section className="py-24 bg-ivory-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl space-y-3">
                <div className="inline-flex items-center gap-2 text-gold-600 text-xs uppercase tracking-widest font-semibold">
                  <span>Specialised Advisory</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-navy-950 font-normal">
                  Our Practice Areas
                </h2>
                <p className="text-charcoal-600 text-base leading-relaxed">
                  Deep sector expertise blended with rigorous commercial acumen to support capital deployment, risk shielding, and regulatory compliance.
                </p>
              </div>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors group shrink-0"
              >
                <span>View All 7 Disciplines</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Grid of practice cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRACTICE_AREAS.slice(0, 6).map((practice) => (
                <div
                  key={practice.id}
                  className="bg-white p-8 rounded-sm border border-ivory-400 hover:border-gold-500/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-9 h-9 rounded-sm bg-ivory-100 border border-ivory-300 flex items-center justify-center text-gold-600 group-hover:bg-navy-900 group-hover:text-gold-300 group-hover:border-navy-900 transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-xl text-navy-950 font-medium group-hover:text-gold-600 transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {practice.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-ivory-300 flex items-center justify-between text-xs text-charcoal-500">
                    <span className="font-medium text-navy-900/80">Lead: {practice.leadPartner}</span>
                    <Link
                      href={`/practice-areas#${practice.slug}`}
                      className="text-gold-600 hover:text-navy-900 font-semibold flex items-center gap-1 group-hover:underline"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED INSIGHTS SECTION */}
        <section className="py-24 bg-white border-y border-ivory-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl space-y-3">
                <div className="inline-flex items-center gap-2 text-gold-600 text-xs uppercase tracking-widest font-semibold">
                  <span>Legal Intelligence</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-navy-950 font-normal">
                  Latest Insights &amp; Regulatory Briefings
                </h2>
                <p className="text-charcoal-600 text-base leading-relaxed">
                  Pragmatic analysis on statutory developments, court practice directions, and sovereign market shifts affecting Nigerian enterprise.
                </p>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors group shrink-0"
              >
                <span>Read All Insights</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {INSIGHTS_ARTICLES.slice(0, 3).map((article) => (
                <article
                  key={article.slug}
                  className="flex flex-col justify-between bg-ivory-100 p-7 rounded-sm border border-ivory-400 hover:border-gold-500/50 transition-all hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-charcoal-500">
                      <span className="px-2.5 py-1 bg-white border border-ivory-300 text-gold-700 font-semibold rounded-sm">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-charcoal-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg text-navy-950 font-medium hover:text-gold-600 transition-colors leading-snug">
                      <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-ivory-300/80 flex items-center justify-between">
                    <div className="text-xs">
                      <p className="font-semibold text-navy-950">{article.author.name}</p>
                      <p className="text-charcoal-500 text-[11px]">{article.author.role}</p>
                    </div>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-gold-600 hover:text-navy-900 text-xs font-semibold flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PORTAL & FILING TOOL TEASER */}
        <section className="py-20 bg-navy-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-sm bg-gradient-to-r from-navy-950 to-navy-900 p-8 sm:p-12 border border-gold-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold rounded-sm uppercase tracking-wider">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Exclusive Technology Showcase</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">
                  Nigerian Appellate Filing Assistant &amp; Real-Time Client Portal
                </h3>
                <p className="text-sm text-ivory-300 leading-relaxed">
                  Experience our integrated software capabilities designed specifically for Nigerian corporate clients: automated court nomenclature formatting, 30-day pre-hearing upload countdowns, OCR checklist audits, and live matter tracking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <Link
                  href="/portal/filing-assistant"
                  className="px-6 py-3 text-xs uppercase tracking-wider font-semibold bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors text-center rounded-sm"
                >
                  Launch Filing Assistant
                </Link>
                <Link
                  href="/portal"
                  className="px-6 py-3 text-xs uppercase tracking-wider font-semibold border border-ivory-400 text-ivory-200 hover:bg-white/10 transition-colors text-center rounded-sm"
                >
                  Enter Client Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OFFICES SECTION */}
        <section className="py-24 bg-ivory-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-gold-600 text-xs uppercase tracking-widest font-semibold">
                <span>Nationwide Presence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-950 font-normal">
                Offices Across Nigeria
              </h2>
              <p className="text-charcoal-600 text-base">
                Strategically positioned across Nigeria’s key commercial, political, and energy hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {OFFICES.map((office) => (
                <div
                  key={office.id}
                  className="bg-white p-8 rounded-sm border border-ivory-400 hover:border-gold-500/50 transition-all hover:shadow-md space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-sm bg-ivory-100 border border-ivory-300 flex items-center justify-center text-navy-900">
                      <Building2 className="w-5 h-5 text-gold-600" />
                    </div>
                    {office.isHeadquarters && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-navy-900 text-gold-300 rounded-sm">
                        Headquarters
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-navy-950">
                      {office.city}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                      {office.area}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-charcoal-600 pt-3 border-t border-ivory-300">
                    <p className="text-charcoal-800 font-medium">{office.address}</p>
                    <p className="text-xs text-charcoal-500">{office.postalCode}</p>
                    <p className="text-xs font-semibold text-navy-900 pt-1">{office.phone}</p>
                    <p className="text-xs text-gold-700">{office.email}</p>
                    <p className="text-[11px] text-charcoal-400 pt-1">{office.workingHours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALM CALL TO ACTION */}
        <section className="py-20 bg-ivory-100 border-t border-ivory-400">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-950">
              Confident counsel for consequential matters.
            </h2>
            <p className="text-charcoal-600 text-base max-w-xl mx-auto leading-relaxed">
              Whether structuring a cross-border acquisition, lodging an appellate brief, or ensuring strict statutory compliance, our partners are ready to assist.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 text-xs uppercase tracking-wider font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-colors rounded-sm shadow-sm"
              >
                Schedule Confidential Consultation
              </Link>
              <Link
                href="/people"
                className="px-8 py-3.5 text-xs uppercase tracking-wider font-semibold border border-navy-900 text-navy-900 hover:bg-white transition-colors rounded-sm"
              >
                Meet Our Partners
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
