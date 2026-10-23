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
  Landmark,
  Compass,
  Phone,
  Mail,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory-200 overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-navy-950 text-white pt-14 pb-20 sm:pt-24 sm:pb-28 lg:pt-36 lg:pb-40 border-b border-navy-800">
          {/* Subtle architectural hairline background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px]" />
          <div className="absolute -top-32 -right-32 w-80 h-80 sm:w-[650px] sm:h-[650px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-navy-800/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6 sm:space-y-8">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-900 border border-gold-500/30 text-gold-400 text-[11px] sm:text-xs tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Premier Commercial Counsel</span>
                <span className="hidden sm:inline text-navy-700">•</span>
                <span className="hidden sm:inline">Lagos • Abuja • Port Harcourt</span>
              </div>

              {/* Headings */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-normal tracking-tight text-white leading-[1.18] sm:leading-[1.12]">
                  Clarity in complexity. <br />
                  <span className="italic text-gold-300 font-serif">Decisive advocacy</span> for landmark matters.
                </h1>
                <p className="text-base sm:text-xl text-ivory-300 font-light leading-relaxed max-w-2xl pt-1 sm:pt-2">
                  XYZ Law Firm delivers counsel to blue-chip multinationals, sovereign institutions, and market pioneers navigating Nigeria’s evolving commercial, regulatory, and judicial landscape.
                </p>
              </div>

              {/* Action Buttons - Mobile full-width stack, desktop inline */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  href="/practice-areas"
                  className="inline-flex justify-center items-center gap-2.5 px-6 py-4 text-xs uppercase tracking-wider font-semibold bg-gold-500 text-navy-950 hover:bg-gold-400 active:bg-gold-600 transition-all duration-200 rounded-sm shadow-md text-center"
                >
                  <span>Explore Practice Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2.5 px-6 py-4 text-xs uppercase tracking-wider font-semibold border border-ivory-400/30 text-ivory-200 hover:border-white hover:text-white hover:bg-white/5 active:bg-white/10 transition-all duration-200 rounded-sm text-center"
                >
                  <span>Instruct Counsel</span>
                </Link>
              </div>
            </div>

            {/* Metric banner - Mobile clean 2x2 grid with hairline borders */}
            <div className="mt-14 sm:mt-24 pt-8 sm:pt-10 border-t border-navy-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="bg-navy-900/40 sm:bg-transparent p-4 sm:p-0 rounded-sm sm:rounded-none border sm:border-0 border-navy-800/80 space-y-1">
                <p className="font-serif text-2xl sm:text-4xl font-normal text-gold-300">30+ Years</p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-ivory-400 font-medium">Institutional Heritage</p>
              </div>
              <div className="bg-navy-900/40 sm:bg-transparent p-4 sm:p-0 rounded-sm sm:rounded-none border sm:border-0 border-navy-800/80 space-y-1">
                <p className="font-serif text-2xl sm:text-4xl font-normal text-gold-300">3 Divisions</p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-ivory-400 font-medium">Lagos, Abuja, PH Offices</p>
              </div>
              <div className="bg-navy-900/40 sm:bg-transparent p-4 sm:p-0 rounded-sm sm:rounded-none border sm:border-0 border-navy-800/80 space-y-1">
                <p className="font-serif text-2xl sm:text-4xl font-normal text-gold-300">7 Core</p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-ivory-400 font-medium">Specialised Groups</p>
              </div>
              <div className="bg-navy-900/40 sm:bg-transparent p-4 sm:p-0 rounded-sm sm:rounded-none border sm:border-0 border-navy-800/80 space-y-1">
                <p className="font-serif text-2xl sm:text-4xl font-normal text-gold-300">Top-Tier</p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-ivory-400 font-medium">Appellate Advocacy</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE AREAS SECTION */}
        <section className="py-16 sm:py-28 bg-ivory-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
              <div className="max-w-xl space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-2 text-gold-600 text-xs uppercase tracking-widest font-semibold">
                  <span>Specialised Disciplines</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-navy-950 font-normal">
                  Practice Areas
                </h2>
                <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed font-light">
                  Sector-specific acumen blended with rigorous commercial strategy to protect assets, close complex transactions, and resolve high-stakes disputes.
                </p>
              </div>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-navy-950 hover:text-gold-700 transition-colors group shrink-0"
              >
                <span>View All 7 Practice Groups</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Grid of practice cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {PRACTICE_AREAS.map((practice) => (
                <div
                  key={practice.id}
                  className="bg-white p-6 sm:p-10 rounded-sm border border-ivory-400 hover:border-gold-500/70 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group relative"
                >
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-transparent group-hover:border-gold-500 transition-colors pointer-events-none" />

                  <div className="space-y-3.5 sm:space-y-4">
                    <div className="w-10 h-10 rounded-sm bg-ivory-100 border border-ivory-300 flex items-center justify-center text-gold-600 group-hover:bg-navy-950 group-hover:text-gold-300 group-hover:border-navy-950 transition-all duration-300">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-navy-950 font-normal group-hover:text-gold-700 transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                      {practice.shortDescription}
                    </p>
                  </div>

                  <div className="pt-5 sm:pt-6 mt-6 sm:mt-8 border-t border-ivory-300 flex items-center justify-between text-xs text-charcoal-500">
                    <span className="font-medium text-navy-950/80 text-[11px] sm:text-xs truncate pr-2">Lead: {practice.leadPartner}</span>
                    <Link
                      href={`/practice-areas#${practice.slug}`}
                      className="text-gold-700 hover:text-navy-950 font-semibold flex items-center gap-1 group-hover:underline shrink-0"
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

        {/* INSTITUTIONAL PILLARS / WHY XYZ LAW FIRM */}
        <section className="py-16 sm:py-24 bg-navy-950 text-white border-y border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
              <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold">
                Firm Distinction
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white font-normal">
                Why Institutional Leaders Choose XYZ
              </h2>
              <p className="text-ivory-300 text-xs sm:text-sm leading-relaxed font-light">
                We combine courtroom gravitas before the Supreme Court of Nigeria with sophisticated transactional execution across West Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="bg-navy-900/60 p-6 sm:p-8 rounded-sm border border-navy-800 space-y-3 sm:space-y-4 hover:border-gold-500/40 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                  Appellate Mastery
                </h3>
                <p className="text-xs text-ivory-400 leading-relaxed font-light">
                  Direct advocacy by Senior Advocates of Nigeria (SAN) with an established record before the Supreme Court, Court of Appeal, and major arbitral tribunals.
                </p>
              </div>

              <div className="bg-navy-900/60 p-6 sm:p-8 rounded-sm border border-navy-800 space-y-3 sm:space-y-4 hover:border-gold-500/40 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                  Regulatory Fluency
                </h3>
                <p className="text-xs text-ivory-400 leading-relaxed font-light">
                  Continuous engagement with key sovereign bodies including the CBN, NUPRC, NMDPRA, SEC, and the Nigeria Data Protection Commission (NDPC).
                </p>
              </div>

              <div className="bg-navy-900/60 p-6 sm:p-8 rounded-sm border border-navy-800 space-y-3 sm:space-y-4 hover:border-gold-500/40 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                  Pan-African Reach
                </h3>
                <p className="text-xs text-ivory-400 leading-relaxed font-light">
                  Managing cross-border joint ventures, regional supply chains, and foreign direct investment across Nigeria and the wider ECOWAS trade corridor.
                </p>
              </div>

              <div className="bg-navy-900/60 p-6 sm:p-8 rounded-sm border border-navy-800 space-y-3 sm:space-y-4 hover:border-gold-500/40 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                  Ethical Stewardship
                </h3>
                <p className="text-xs text-ivory-400 leading-relaxed font-light">
                  Unbending adherence to professional conduct rules, strict advocate-client confidentiality, and rigorous corporate governance standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED INSIGHTS SECTION */}
        <section className="py-16 sm:py-28 bg-white border-b border-ivory-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
              <div className="max-w-xl space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-2 text-gold-600 text-xs uppercase tracking-widest font-semibold">
                  <span>Legal Intelligence</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-navy-950 font-normal">
                  Latest Insights &amp; Briefings
                </h2>
                <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed font-light">
                  Authoritative commentary on the Nigeria Data Protection Act, appellate court electronic filing practice directions, Petroleum Industry Act, and corporate governance.
                </p>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-navy-950 hover:text-gold-700 transition-colors group shrink-0"
              >
                <span>Browse All Publications</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {INSIGHTS_ARTICLES.slice(0, 3).map((article) => (
                <article
                  key={article.slug}
                  className="flex flex-col justify-between bg-ivory-100 p-6 sm:p-8 rounded-sm border border-ivory-400 hover:border-gold-500/60 transition-all hover:shadow-lg"
                >
                  <div className="space-y-3.5 sm:space-y-4">
                    <div className="flex items-center justify-between text-xs text-charcoal-500">
                      <span className="px-2.5 py-0.5 sm:py-1 bg-white border border-ivory-300 text-gold-700 font-semibold rounded-sm text-[11px] sm:text-xs">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px]">
                        <Clock className="w-3 h-3 text-charcoal-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-navy-950 font-normal hover:text-gold-700 transition-colors leading-snug">
                      <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="text-xs text-charcoal-600 leading-relaxed font-light line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-ivory-300 flex items-center justify-between">
                    <div className="text-xs">
                      <p className="font-semibold text-navy-950 text-xs sm:text-sm">{article.author.name}</p>
                      <p className="text-charcoal-500 text-[10px] sm:text-[11px] font-light">{article.author.role}</p>
                    </div>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-gold-700 hover:text-navy-950 text-xs font-semibold flex items-center gap-1 shrink-0"
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

        {/* OFFICES SECTION WITH MOBILE TAP-TO-CALL */}
        <section className="py-16 sm:py-28 bg-ivory-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-gold-600 text-xs uppercase tracking-widest font-semibold">
                <span>Nationwide Presence</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-navy-950 font-normal">
                Offices Across Nigeria
              </h2>
              <p className="text-charcoal-600 text-sm sm:text-base font-light">
                Positioned in Nigeria’s commercial, federal capital, and energy centers for seamless in-person and tribunal liaison.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {OFFICES.map((office) => (
                <div
                  key={office.id}
                  className="bg-white p-6 sm:p-10 rounded-sm border border-ivory-400 hover:border-gold-500/60 transition-all hover:shadow-lg space-y-5 sm:space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-sm bg-ivory-100 border border-ivory-300 flex items-center justify-center text-navy-950">
                      <Building2 className="w-5 h-5 text-gold-600" />
                    </div>
                    {office.isHeadquarters && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-navy-950 text-gold-300 rounded-sm">
                        Headquarters
                      </span>
                    )}
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-navy-950">
                      {office.city}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                      {office.area}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-charcoal-600 pt-3 border-t border-ivory-300 font-light">
                    <p className="text-charcoal-800 font-medium">{office.address}</p>
                    <p className="text-xs text-charcoal-500">{office.postalCode}</p>
                    <p className="text-[11px] text-charcoal-400 pt-1">{office.workingHours}</p>
                  </div>

                  {/* Mobile Tap-to-Call & Email Direct Triggers */}
                  <div className="pt-3 border-t border-ivory-200 flex flex-col sm:flex-row gap-2">
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-ivory-100 hover:bg-gold-50 text-navy-950 font-semibold text-xs rounded-sm border border-ivory-300 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-600" />
                      <span>{office.phone}</span>
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="inline-flex items-center justify-center py-2.5 px-3 bg-ivory-100 hover:bg-gold-50 text-navy-950 font-semibold text-xs rounded-sm border border-ivory-300 transition-colors"
                      title="Send Email"
                    >
                      <Mail className="w-3.5 h-3.5 text-gold-600" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALM CALL TO ACTION */}
        <section className="py-16 sm:py-24 bg-ivory-100 border-t border-ivory-400">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-navy-950 font-normal leading-tight">
              Confident counsel for consequential matters.
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
              Whether structuring a cross-border acquisition, defending corporate rights before an appellate tribunal, or seeking statutory guidance, our practice heads are available for confidential consultations.
            </p>
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 text-xs uppercase tracking-wider font-semibold bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-all rounded-sm shadow-sm text-center"
              >
                Schedule Confidential Consultation
              </Link>
              <Link
                href="/people"
                className="px-8 py-4 text-xs uppercase tracking-wider font-semibold border border-navy-950 text-navy-950 hover:bg-white transition-colors rounded-sm text-center"
              >
                Meet Our Partners &amp; Counsel
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
